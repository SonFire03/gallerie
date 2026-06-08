import { motion } from 'framer-motion';

type SortMode = 'recent' | 'oldest' | 'name';

type FilterBarProps = {
  categories: string[];
  category: string;
  onCategoryChange: (category: string) => void;
  search: string;
  onSearchChange: (value: string) => void;
  sortMode: SortMode;
  onSortChange: (value: SortMode) => void;
  visibleCount: number;
  totalCount: number;
};

function FilterBar({
  categories,
  category,
  onCategoryChange,
  search,
  onSearchChange,
  sortMode,
  onSortChange,
  visibleCount,
  totalCount,
}: FilterBarProps) {
  return (
    <motion.section
      className="filters"
      id="filters"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.05 }}
    >
      <div className="filters__topline">
        <div>
          <p className="eyebrow">Navigation</p>
          <h2>Gallery index</h2>
        </div>
        <p className="filters__count" aria-live="polite">
          {visibleCount} photo{visibleCount === 1 ? '' : 's'} affichée
          {visibleCount === 1 ? '' : 's'} sur {totalCount}
        </p>
      </div>

      <div className="filters__grid">
        <label className="field">
          <span>Recherche</span>
          <input
            type="search"
            placeholder="Titre, lieu, catégorie ou tag"
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
          />
        </label>

        <label className="field">
          <span>Tri</span>
          <select
            value={sortMode}
            onChange={(event) => onSortChange(event.target.value as SortMode)}
          >
            <option value="recent">Récent</option>
            <option value="oldest">Ancien</option>
            <option value="name">Nom</option>
          </select>
        </label>
      </div>

      <div className="chips chips--portfolio" role="tablist" aria-label="Catégories">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            className={`chip ${item === category ? 'chip--active' : ''}`}
            onClick={() => onCategoryChange(item)}
            aria-pressed={item === category}
          >
            {item}
          </button>
        ))}
      </div>
    </motion.section>
  );
}

export default FilterBar;
