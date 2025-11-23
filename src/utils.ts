const BASE_PATH = import.meta.env.VITE_BASE_PATH || '/';
export const SCOPE = BASE_PATH.replace(/\/$/, '');

// Funkcja do budowy ścieżek tras
export const buildPath = (relativePath: string) => `${SCOPE}${relativePath}`;

// Cache dla często używanych ścieżek
export const PATHS = {
  HOME: buildPath('/'),
  ABOUT: buildPath('/about'),
} as const;
