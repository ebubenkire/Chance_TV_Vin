import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    // Toggle body scroll
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto'
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = 'auto'
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
    closeMenu()
  }, [location])

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
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

        <div 
          className={`nav-overlay ${isMenuOpen ? 'active' : ''}`} 
          onClick={closeMenu}
        ></div>
        
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link 
              to="/about" 
              className={location.pathname === '/about' ? 'active' : ''}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/events"
              className={location.pathname === '/events' ? 'active' : ''}
              onClick={closeMenu}
            >
              Events
            </Link>
          </li>
          <li>
            <Link 
              to="/careers"
              className={location.pathname === '/careers' ? 'active' : ''}
              onClick={closeMenu}
            >
              Careers
            </Link>
          </li>
          <li>
            <Link 
              to="/academy"
              className={location.pathname === '/academy' ? 'active' : ''}
              onClick={closeMenu}
            >
              Academy
            </Link>
          </li>
          <li>
            <Link 
              to="/auditions"
              className={location.pathname === '/auditions' ? 'active' : ''}
              onClick={closeMenu}
            >
              Auditions
            </Link>
          </li>
          <li>
            <Link 
              to="/voting"
              className={location.pathname === '/voting' ? 'active' : ''}
              onClick={closeMenu}
            >
              Voting
            </Link>
          </li>
          <li>
            <Link 
              to="/streaming"
              className={location.pathname === '/streaming' ? 'active' : ''}
              onClick={closeMenu}
            >
              Streaming
            </Link>
          </li>
          <li className="nav-cta">
            <Link 
              to="/account"
              className="btn btn-glass hover-scale"
              onClick={closeMenu}
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