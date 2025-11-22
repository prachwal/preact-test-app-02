const BASE_PATH = import.meta.env.VITE_BASE_PATH || '/'
const SCOPE = BASE_PATH.replace(/\/$/, '') // Usuwa końcowy slash

// Funkcja do budowy ścieżek tras
export const buildPath = (relativePath: string) => `${SCOPE}${relativePath}`