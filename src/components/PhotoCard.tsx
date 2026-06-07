import { useState } from 'react';
import { motion } from 'framer-motion';
import { type Photo } from '../data/photos';

type PhotoCardProps = {
  photo: Photo;
  onClick: () => void;
  index: number;
};

function PhotoCard({ photo, onClick, index }: PhotoCardProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.button
      type="button"
      className="photo-card"
      onClick={onClick}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.35) }}
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
