import { motion } from 'framer-motion';

type HeroProps = {
  totalCount: number;
};

function Hero({ totalCount }: HeroProps) {
  return (
    <section className="hero">
      <div className="hero__ambient" aria-hidden="true" />
      <div className="hero__content">
        <motion.div
          className="hero__copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="eyebrow">Portfolio photo</p>
          <h1>SonFire03</h1>
          <p className="hero__lead">
            Sélection d’images, catégories photo et lecture minimale. Une galerie
            pensée comme un portfolio éditorial.
          </p>

          <div className="hero__actions">
            <a className="button button--primary" href="#gallery">
              Explorer la galerie
            </a>
            <a className="button button--secondary" href="#filters">
              Affiner la sélection
            </a>
          </div>

          <p className="hero__note">
            {totalCount} photos, une direction visuelle simple, un rendu statique rapide.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
