import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'

function Products() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const products = [
    {
      id: '01',
      name: 'Aero Chrono',
      subtitle: 'Carbon case and sapphire glass for all-day precision.',
      price: '$249',
      image:
        'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=420&q=80',
    },
    {
      id: '02',
      name: 'Midnight Pulse',
      subtitle: 'Slim dial with luminous hands and premium steel strap.',
      price: '$289',
      image:
        'https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?auto=format&fit=crop&w=420&q=80',
    },
    {
      id: '03',
      name: 'Urban Tide',
      subtitle: 'Water-resistant everyday companion with ceramic finish.',
      price: '$219',
      image:
        'https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?auto=format&fit=crop&w=420&q=80',
    },
  ]

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

      <main className="products-page">
        <section className="products-intro" aria-label="Products page introduction">
          <p className="hero-kicker">Our Full Collection</p>
          <h1>Choose Your Next Signature Watch</h1>
        </section>

        <section className="product-grid" aria-label="Featured watches">
          {products.map((item) => (
            <article className="product-card" key={item.id}>
              <div
                className="thumb"
                style={{ backgroundImage: `url(${item.image})` }}
                aria-label={item.name}
              ></div>
              <p className="card-index">{item.id}</p>
              <h4>{item.name}</h4>
              <p className="card-text">{item.subtitle}</p>
              <p className="price">{item.price}</p>
            </article>
          ))}
        </section>
      </main>

      <footer className="footer-row">
        <p>Fast Delivery</p>
        <p>2 Year Warranty</p>
        <p>Secure Checkout</p>
      </footer>
    </div>
  )
}

export default Products
