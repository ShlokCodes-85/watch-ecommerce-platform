import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'
import HappyCustomers from '../components/HappyCustomers'

function Landing() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <div className="page-shell">
      <header className="top-nav">
        <h2 className="logo">Chronovia</h2>

        <nav className="nav-links center" aria-label="Primary navigation">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <a href="#">Cart</a>
          <a href="#">Contact</a>
        </nav>

        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          aria-pressed={theme === 'dark'}
        >
          {theme === 'light' ? (
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M21.2 13.1A8.4 8.4 0 0 1 10.9 2.8a.8.8 0 0 0-1-.9 10.2 10.2 0 1 0 12.2 12.2.8.8 0 0 0-.9-1Z" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M12 5.2a.8.8 0 0 1 .8.8v1.6a.8.8 0 1 1-1.6 0V6a.8.8 0 0 1 .8-.8Zm0 10.6a.8.8 0 0 1 .8.8v1.6a.8.8 0 1 1-1.6 0v-1.6a.8.8 0 0 1 .8-.8Zm6.8-5.8a.8.8 0 0 1-.8.8h-1.6a.8.8 0 1 1 0-1.6H18a.8.8 0 0 1 .8.8Zm-10.6 0a.8.8 0 0 1-.8.8H5.8a.8.8 0 1 1 0-1.6h1.6a.8.8 0 0 1 .8.8Zm8.1 4.5a.8.8 0 0 1 0 1.1l-1.2 1.2a.8.8 0 0 1-1.1-1.1l1.2-1.2a.8.8 0 0 1 1.1 0Zm-7.8-7.8a.8.8 0 0 1 0 1.1L7.3 9a.8.8 0 1 1-1.1-1.1l1.2-1.2a.8.8 0 0 1 1.1 0Zm7.8 1.1a.8.8 0 0 1-1.1 0l-1.2-1.2a.8.8 0 0 1 1.1-1.1l1.2 1.2a.8.8 0 0 1 0 1.1ZM8.4 16.1a.8.8 0 0 1-1.1 0l-1.2-1.2a.8.8 0 1 1 1.1-1.1l1.2 1.2a.8.8 0 0 1 0 1.1ZM12 8.4A3.6 3.6 0 1 0 15.6 12 3.6 3.6 0 0 0 12 8.4Z" />
            </svg>
          )}
        </button>
      </header>

      <main className="hero-section">
        <p className="hero-kicker">Luxury Timepieces, Curated Online</p>
        <h1>Discover The New Era of Watch E-commerce</h1>

        <section className="hero-copy" aria-label="Brand introduction">
          <p>
            Explore premium craftsmanship, transparent pricing, and a seamless buying
            experience built for modern collectors.
          </p>
          <Link className="hero-cta" to="/products">
            Browse Products
          </Link>
        </section>
      </main>

      <HappyCustomers />

      <footer className="footer-row">
        <p>Fast Delivery</p>
        <p>2 Year Warranty</p>
        <p>Secure Checkout</p>
      </footer>
    </div>
  )
}

export default Landing
