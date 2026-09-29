import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls to the top of the page every time the route changes.
// Without this, a new page can open halfway down, where the last page was scrolled.
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // This component only runs an effect, it renders nothing
  return null;
}

export default ScrollToTop;