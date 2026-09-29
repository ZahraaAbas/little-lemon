import { useEffect } from 'react';

// Custom hook: sets the browser tab title for the current page.
// Screen readers announce the new title when the page changes.
function usePageTitle(title) {
  useEffect(() => {
    document.title = `${title} | Little Lemon`;
  }, [title]);
}

export default usePageTitle;