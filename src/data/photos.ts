export type Photo = {
  id: string;
  title: string;
  category: string;
  location: string;
  date: string;
  description: string;
  image: string;
  tags?: string[];
};

const asset = (file: string) => `${import.meta.env.BASE_URL}photos/${file}`;

export const photos: Photo[] = [
  {
    id: 'blue-hour-line',
    title: 'Blue Hour Line',
    category: 'Urban',
    location: 'Paris, France',
    date: '2026-05-21',
    description:
      'Une lecture graphique des volumes urbains au moment où la lumière devient froide et nette.',
    image: asset('ResizedImage_2026-05-21_17-30-06_6399[0].png'),
    tags: ['city', 'light', 'architecture'],
  },
  {
    id: 'silent-motion',
    title: 'Silent Motion',
    category: 'Street',
    location: 'Lyon, France',
    date: '2026-06-02',
    description:
      'Un instant suspendu entre déplacement et immobilité, avec une palette volontairement discrète.',
    image: asset('IMG_20260602_055845_486.jpg'),
    tags: ['motion', 'shadow', 'night'],
  },
  {
    id: 'after-rain',
    title: 'After Rain',
    category: 'Landscape',
    location: 'Annecy, France',
    date: '2025-07-09',
    description:
      'L’atmosphère s’éclaircit après l’averse, révélant des contrastes doux et une profondeur cinématographique.',
    image: asset('20250709_235700.jpg'),
    tags: ['water', 'reflection', 'calm'],
  },
  {
    id: 'golden-slope',
    title: 'Golden Slope',
    category: 'Landscape',
    location: 'Alpes françaises',
    date: '2025-06-12',
    description:
      'Une composition ouverte où les lignes du relief guident naturellement le regard vers l’horizon.',
    image: asset('20250612_213220.jpg'),
    tags: ['mountains', 'sunset', 'depth'],
  },
  {
    id: 'night-grid',
    title: 'Night Grid',
    category: 'Urban',
    location: 'Bordeaux, France',
    date: '2025-06-02',
    description:
      'Un réseau de lignes lumineuses et de halos diffus qui transforme la scène en composition graphique.',
    image: asset('20250602_213200.jpg'),
    tags: ['night', 'lights', 'lines'],
  },
  {
    id: 'calm-frames',
    title: 'Calm Frames',
    category: 'Architecture',
    location: 'Brussels, Belgium',
    date: '2024-11-03',
    description:
      'Une façade minimaliste traitée comme un ensemble de cadres, avec une géométrie très lisible.',
    image: asset('20241103_170321.jpg'),
    tags: ['minimal', 'geometry', 'facade'],
  },
  {
    id: 'soft-echo',
    title: 'Soft Echo',
    category: 'Abstract',
    location: 'Studio',
    date: '2024-07-14',
    description:
      'Une image qui joue davantage sur les matières, les reflets et l’ambiance que sur le sujet lui-même.',
    image: asset('20240714_221603.jpg'),
    tags: ['texture', 'reflection', 'studio'],
  },
  {
    id: 'quiet-curve',
    title: 'Quiet Curve',
    category: 'Abstract',
    location: 'Studio',
    date: '2024-07-14',
    description:
      'Une forme organique, presque architecturale, mise en valeur par un contraste contrôlé.',
    image: asset('20240714_221529.jpg'),
    tags: ['shape', 'contrast', 'minimal'],
  },
  {
    id: 'portrait-noir',
    title: 'Portrait Noir',
    category: 'Portrait',
    location: 'Marseille, France',
    date: '2026-06-08',
    description:
      'Un portrait à dominante sombre, pensé pour mettre en avant la présence et la lumière de contour.',
    image: asset('file_0000000060947246ae909adf3f0fbc00.png'),
    tags: ['portrait', 'shadow', 'close-up'],
  },
  {
    id: 'framed-light',
    title: 'Framed Light',
    category: 'Portrait',
    location: 'Paris, France',
    date: '2026-05-21',
    description:
      'Une présence douce, presque éditoriale, construite autour d’une lumière latérale très propre.',
    image: asset('file_00000000c9e07246828593cf1cccd946.png'),
    tags: ['editorial', 'light', 'portrait'],
  },
  {
    id: 'canopy-view',
    title: 'Canopy View',
    category: 'Landscape',
    location: 'Nature',
    date: '2026-06-08',
    description:
      'Un cadre naturel construit par le feuillage, avec une scène ouverte sur l’eau et le ciel.',
    image: asset('5300072b-ae9f-4e69-aff6-f3d30722438e.png'),
    tags: ['trees', 'water', 'summer'],
  },
  {
    id: 'abyssal-rise',
    title: 'Abyssal Rise',
    category: 'Conceptual',
    location: 'Studio',
    date: '2026-06-08',
    description:
      'Une image verticale et cinématographique, pensée comme une apparition suspendue dans la profondeur.',
    image: asset('ee4b79f5-2879-423a-923e-9cbeb13a27e2.png'),
    tags: ['underwater', 'blue', 'surreal'],
  },
];
