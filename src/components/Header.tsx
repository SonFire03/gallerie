import { motion } from 'framer-motion';

type HeaderProps = {
  totalCount: number;
  visibleCount: number;
};

function Header({ totalCount, visibleCount }: HeaderProps) {
  return (
    <motion.header
      className="site-header"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="site-header__inner">
        <a className="brand" href="#top" aria-label="Retour en haut de la page">
          <span className="brand__mark" aria-hidden="true" />
          <span className="brand__text">
            <strong>SonFire03</strong>
            <span>Gallerie</span>
          </span>
        </a>

        <nav className="site-nav" aria-label="Navigation principale">
          <a href="#gallery">Galerie</a>
          <a href="#filters">Filtres</a>
        </nav>

        <p className="header-meta" aria-live="polite">
          {visibleCount} / {totalCount} photos
        </p>
      </div>
    </motion.header>
  );
}

export default Header;
