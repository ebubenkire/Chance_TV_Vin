import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto'
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
    document.body.style.overflow = 'auto'
  }, [location])

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/src/assets/images/logo.png" alt="ChanceTv" />
          {/* ChanceTv */}
        </Link>
        <button 
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <div className={`nav-overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
        
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/about" 
              className={location.pathname === '/about' ? 'active' : ''}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/events"
              className={location.pathname === '/events' ? 'active' : ''}
            >
              Events
            </Link>
          </li>
          <li>
            <Link 
              to="/careers"
              className={location.pathname === '/careers' ? 'active' : ''}
            >
              Careers
            </Link>
          </li>
          <li>
            <Link 
              to="/academy"
              className={location.pathname === '/academy' ? 'active' : ''}
            >
              Academy
            </Link>
          </li>
          <li>
            <Link 
              to="/auditions"
              className={location.pathname === '/auditions' ? 'active' : ''}
            >
              Auditions
            </Link>
          </li>
          <li>
            <Link 
              to="/voting"
              className={location.pathname === '/voting' ? 'active' : ''}
            >
              Voting
            </Link>
          </li>
          <li>
            <Link 
              to="/streaming"
              className={location.pathname === '/streaming' ? 'active' : ''}
            >
              Streaming
            </Link>
          </li>
          <li className="nav-cta">
            <Link 
              to="/account"
              className="btn btn-glass hover-scale"
            >
              Account
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar 