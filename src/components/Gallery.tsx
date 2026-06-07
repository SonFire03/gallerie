import { motion } from 'framer-motion';
import { type Photo } from '../data/photos';
import PhotoCard from './PhotoCard';

type GalleryProps = {
  photos: Photo[];
  isLoading: boolean;
  onOpenPhoto: (photo: Photo) => void;
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
            <article key={`skeleton-${index}`} className="photo-card photo-card--skeleton">
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
            />
          ))}
    </section>
  );
}

export default Gallery;
