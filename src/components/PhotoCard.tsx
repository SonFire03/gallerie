import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { type Photo } from '../data/photos';

type PhotoLayout = 'feature' | 'wide' | 'standard' | 'portrait';

type PhotoCardProps = {
  photo: Photo;
  onClick: () => void;
  index: number;
  layout: PhotoLayout;
};

const ROW_HEIGHT = 12;
const ROW_GAP = 18;

function PhotoCard({ photo, onClick, index, layout }: PhotoCardProps) {
  const [loaded, setLoaded] = useState(false);
  const [rowSpan, setRowSpan] = useState(1);
  const cardRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) {
      return;
    }

    let frame = 0;

    const updateSpan = () => {
      cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const height = element.getBoundingClientRect().height;
        const span = Math.max(
          1,
          Math.ceil((height + ROW_GAP) / (ROW_HEIGHT + ROW_GAP)),
        );
        setRowSpan(span);
      });
    };

    updateSpan();

    const observer = new ResizeObserver(updateSpan);
    observer.observe(element);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [loaded]);

  return (
    <motion.button
      ref={cardRef}
      type="button"
      className={`photo-card photo-card--${layout}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.35) }}
      style={{ gridRowEnd: `span ${rowSpan}` }}
    >
      <div className={`photo-card__media ${loaded ? 'is-loaded' : ''}`}>
        <img
          src={photo.image}
          alt={photo.title}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
        />
      </div>

      <div className="photo-card__body">
        <div className="photo-card__headline">
          <h3>{photo.title}</h3>
          <span>{photo.category}</span>
        </div>
        <p>{photo.description}</p>

        <div className="photo-card__meta">
          <span>{new Date(photo.date).getFullYear()}</span>
        </div>
      </div>
    </motion.button>
  );
}

export default PhotoCard;
