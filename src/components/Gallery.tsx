import { motion } from 'framer-motion';
import { type Photo } from '../data/photos';
import PhotoCard from './PhotoCard';

type PhotoLayout = 'feature' | 'panorama' | 'wide' | 'standard' | 'portrait';

type GalleryProps = {
  photos: Photo[];
  isLoading: boolean;
  onOpenPhoto: (photo: Photo) => void;
};

const getRowSpan = (layout: PhotoLayout) => {
  switch (layout) {
    case 'feature':
      return 22;
    case 'panorama':
      return 20;
    case 'wide':
      return 18;
    case 'portrait':
      return 16;
    case 'standard':
    default:
      return 17;
  }
};

const getLayout = (index: number): PhotoLayout => {
  const pattern: PhotoLayout[] = [
    'feature',
    'standard',
    'wide',
    'portrait',
    'panorama',
    'wide',
    'portrait',
    'standard',
    'wide',
    'portrait',
    'feature',
    'standard',
  ];

  return pattern[index % pattern.length];
};

function Gallery({ photos, isLoading, onOpenPhoto }: GalleryProps) {
  if (!isLoading && photos.length === 0) {
    return (
      <motion.div
        className="empty-state"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="empty-state__eyebrow">Aucun résultat</p>
        <h3>Cette combinaison de filtres ne retourne aucune image.</h3>
        <p>
          Essayez un autre mot-clé, une autre catégorie ou changez le tri pour
          retrouver des photos.
        </p>
      </motion.div>
    );
  }

  return (
    <section className="gallery" aria-label="Galerie photo">
      {isLoading
        ? Array.from({ length: 8 }).map((_, index) => (
            <article
              key={`skeleton-${index}`}
              className={`photo-card photo-card--skeleton photo-card--${getLayout(index)}`}
              style={{ gridRowEnd: `span ${getRowSpan(getLayout(index))}` }}
            >
              <div className="photo-card__skeleton photo-card__skeleton--image" />
              <div className="photo-card__skeleton photo-card__skeleton--line" />
              <div className="photo-card__skeleton photo-card__skeleton--line short" />
            </article>
          ))
        : photos.map((photo, index) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              onClick={() => onOpenPhoto(photo)}
              index={index}
              layout={getLayout(index)}
              rowSpan={getRowSpan(getLayout(index))}
            />
          ))}
    </section>
  );
}

export default Gallery;
