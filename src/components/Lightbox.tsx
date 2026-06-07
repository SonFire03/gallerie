import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { type Photo } from '../data/photos';

type LightboxProps = {
  photo: Photo;
  currentIndex: number;
  total: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

function Lightbox({
  photo,
  currentIndex,
  total,
  onClose,
  onPrev,
  onNext,
}: LightboxProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }

      if (event.key === 'ArrowLeft') {
        onPrev();
      }

      if (event.key === 'ArrowRight') {
        onNext();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose, onNext, onPrev]);

  return (
    <motion.div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={photo.title}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={onClose}
    >
      <motion.div
        className="lightbox__panel"
        initial={{ scale: 0.96, opacity: 0, y: 18 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.98, opacity: 0, y: 12 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="lightbox__topbar">
          <p>
            {currentIndex + 1} / {total}
          </p>
          <div className="lightbox__actions">
            <button type="button" onClick={onPrev} aria-label="Image précédente">
              ←
            </button>
            <button type="button" onClick={onNext} aria-label="Image suivante">
              →
            </button>
            <button type="button" onClick={onClose} aria-label="Fermer la lightbox">
              ✕
            </button>
          </div>
        </div>

        <div className="lightbox__content">
          <div className="lightbox__media">
            <img src={photo.image} alt={photo.title} />
          </div>

          <div className="lightbox__details">
            <p className="eyebrow">{photo.category}</p>
            <h3>{photo.title}</h3>
            <p>{photo.description}</p>

            <dl className="lightbox__meta">
              <div>
                <dt>Date</dt>
                <dd>{new Date(photo.date).toLocaleDateString('fr-FR', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric',
                })}</dd>
              </div>
              <div>
                <dt>Tags</dt>
                <dd>{photo.tags?.join(' • ') ?? '—'}</dd>
              </div>
            </dl>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Lightbox;
