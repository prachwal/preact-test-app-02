import { useLocation } from 'preact-iso';

export const useActiveLink = (path: string) => {
  const { path: currentPath } = useLocation();
  return currentPath === path;
};
