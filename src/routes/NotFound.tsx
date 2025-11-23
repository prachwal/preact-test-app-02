import { memo } from 'preact/compat';
import { PATHS } from '../utils';

export const NotFound = memo(() => (
  <div>
    <h1>404 - Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <a href={PATHS.HOME}>Go back to Home</a>
  </div>
));
