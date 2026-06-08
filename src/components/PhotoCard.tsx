import { useState } from 'react';
import { motion } from 'framer-motion';
import { type Photo } from '../data/photos';

type PhotoLayout = 'feature' | 'panorama' | 'wide' | 'standard' | 'portrait';

type PhotoCardProps = {
  photo: Photo;
  onClick: () => void;
  index: number;
  layout: PhotoLayout;
  rowSpan: number;
};

function PhotoCard({ photo, onClick, index, layout, rowSpan }: PhotoCardProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.button
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
        <div className="photo-card__overlay">
          <div className="photo-card__headline">
            <h3>{photo.title}</h3>
            <span>{photo.category}</span>
          </div>
          <div className="photo-card__meta">
            <span>{new Date(photo.date).getFullYear()}</span>
          </div>
        </div>
      </div>
    </motion.button>
  );
}

export default PhotoCard;
