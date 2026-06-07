import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import Gallery from './components/Gallery';
import Lightbox from './components/Lightbox';
import Footer from './components/Footer';
import { photos, type Photo } from './data/photos';

type SortMode = 'recent' | 'oldest' | 'name';

const sortedCategories = ['All', ...new Set(photos.map((photo) => photo.category))];

function App() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [sortMode, setSortMode] = useState<SortMode>('recent');
  const [activePhotoId, setActivePhotoId] = useState<string | null>(null);
  const [isBooting, setIsBooting] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsBooting(false), 420);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 520);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const visiblePhotos = useMemo(() => {
    const query = search.trim().toLowerCase();

    const filtered = photos.filter((photo) => {
      const matchesCategory = category === 'All' || photo.category === category;
      if (!matchesCategory) {
        return false;
      }

      if (!query) {
        return true;
      }

      const haystack = [
        photo.title,
        photo.location,
        photo.category,
        photo.description,
        ...(photo.tags ?? []),
      ]
        .join(' ')
        .toLowerCase();

      return haystack.includes(query);
    });

    return [...filtered].sort((left, right) => {
      if (sortMode === 'name') {
        return left.title.localeCompare(right.title);
      }

      const leftDate = new Date(left.date).getTime();
      const rightDate = new Date(right.date).getTime();

      if (sortMode === 'oldest') {
        return leftDate - rightDate || left.title.localeCompare(right.title);
      }

      return rightDate - leftDate || left.title.localeCompare(right.title);
    });
  }, [category, search, sortMode]);

  const activeIndex = activePhotoId
    ? visiblePhotos.findIndex((photo) => photo.id === activePhotoId)
    : -1;
  const activePhoto = activeIndex >= 0 ? visiblePhotos[activeIndex] : null;

  useEffect(() => {
    if (activePhotoId && activeIndex === -1) {
      setActivePhotoId(null);
    }
  }, [activeIndex, activePhotoId]);

  useEffect(() => {
    if (!activePhotoId) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [activePhotoId]);

  const openPhoto = (photo: Photo) => setActivePhotoId(photo.id);
  const closePhoto = () => setActivePhotoId(null);
  const goPrev = () => {
    if (!visiblePhotos.length) {
      return;
    }

    const nextIndex =
      activeIndex <= 0 ? visiblePhotos.length - 1 : activeIndex - 1;
    setActivePhotoId(visiblePhotos[nextIndex].id);
  };
  const goNext = () => {
    if (!visiblePhotos.length) {
      return;
    }

    const nextIndex =
      activeIndex < 0 || activeIndex === visiblePhotos.length - 1
        ? 0
        : activeIndex + 1;
    setActivePhotoId(visiblePhotos[nextIndex].id);
  };

  return (
    <div className="app-shell" id="top">
      <Header totalCount={photos.length} visibleCount={visiblePhotos.length} />
      <main>
        <Hero totalCount={photos.length} />

        <section className="content-wrap" id="gallery">
          <FilterBar
            categories={sortedCategories}
            category={category}
            onCategoryChange={setCategory}
            search={search}
            onSearchChange={setSearch}
            sortMode={sortMode}
            onSortChange={setSortMode}
            visibleCount={visiblePhotos.length}
            totalCount={photos.length}
          />

          <Gallery
            photos={visiblePhotos}
            isLoading={isBooting}
            onOpenPhoto={openPhoto}
          />
        </section>
      </main>

      <Footer />

      <AnimatePresence>
        {activePhoto && (
          <Lightbox
            key={activePhoto.id}
            photo={activePhoto}
            currentIndex={activeIndex}
            total={visiblePhotos.length}
            onClose={closePhoto}
            onPrev={goPrev}
            onNext={goNext}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            type="button"
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            aria-label="Remonter en haut"
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
