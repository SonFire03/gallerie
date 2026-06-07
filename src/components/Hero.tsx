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
          <h1>Une sélection d’images présentée avec une direction claire et sobre.</h1>
          <p className="hero__lead">
            Une mise en page inspirée des portfolios photo éditoriaux, avec une
            lecture simple, des catégories directes et des visuels au premier plan.
          </p>

          <div className="hero__actions">
            <a className="button button--primary" href="#gallery">
              Explorer la galerie
            </a>
            <a className="button button--secondary" href="#filters">
              Affiner la sélection
            </a>
          </div>
        </motion.div>

        <motion.aside
          className="hero__panel"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
        >
          <div className="hero__stat hero__stat--accent">
            <span className="hero__stat-label">Photos publiées</span>
            <strong>{totalCount}</strong>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-label">Approche</span>
            <strong>Minimal, dense, image-first</strong>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-label">Navigation</span>
            <strong>Catégories, recherche, tri, lightbox</strong>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}

export default Hero;
