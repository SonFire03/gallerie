# Gallerie

Galerie photo premium, statique et responsive construite avec Vite, React, TypeScript et GitHub Pages.

## Installation

```bash
npm install
```

## Lancer en local

```bash
npm run dev
```

Puis ouvre `http://localhost:5173/gallerie/`.

Pour tester le build de production en local :

```bash
npm run build
npm run preview
```

Puis ouvre `http://127.0.0.1:4173/gallerie/`.

Le site est configuré pour GitHub Pages avec le base path `/gallerie/`.

## Ajouter des photos

1. Ajoute les fichiers image dans `public/photos/`.
2. Déclare les nouvelles entrées dans `src/data/photos.ts`.
3. Renseigne au minimum :
   - `id`
   - `title`
   - `category`
   - `location`
   - `date`
   - `description`
   - `image`
4. Ajoute éventuellement des `tags` pour améliorer la recherche.

Les images sont servies publiquement, donc évite tout contenu sensible.

## Modifier les catégories

Les catégories sont générées depuis `src/data/photos.ts`.
Pour en ajouter ou en retirer, modifie la valeur `category` des photos concernées.
Le filtre de l’interface se mettra à jour automatiquement.

## Déploiement GitHub Pages

Le workflow `.github/workflows/deploy.yml` :

1. installe les dépendances,
2. lance `npm run build`,
3. publie le dossier `dist` sur GitHub Pages.

Il s’exécute automatiquement à chaque push sur `main`.

## Structure

- `src/components/` : composants UI
- `src/data/photos.ts` : données de la galerie
- `src/styles/global.css` : styles globaux
- `public/photos/` : images statiques
- `.github/workflows/deploy.yml` : déploiement automatique
