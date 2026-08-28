import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

// Disable browser scroll restoration so our ScrollToHash component in App.tsx
// owns all scroll behaviour. Without this, the browser auto-restores the last
// scroll position of a URL and races against (and wins over) window.scrollTo.
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

const container = document.getElementById('root')!

const tree = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Every route ships as real prerendered HTML (scripts/prerender.mjs), so
// the normal path is hydration — React adopts the markup that's already
// painted instead of throwing it away and re-rendering from blank.
// createRoot stays as the fallback for anything served from the bare
// template (a route the prerenderer didn't cover).
if (container.firstElementChild) {
  hydrateRoot(container, tree)
} else {
  createRoot(container).render(tree)
}
