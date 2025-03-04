import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h3>ChanceTv</h3>
          <p>Your Gateway to the World of Cinema</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/academy">Academy</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><Link to="/auditions">Auditions</Link></li>
            <li><Link to="/streaming">Streaming</Link></li>
            <li><Link to="/voting">Voting</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>Email: info@chancetv.com</li>
            <li>Phone: (555) 123-4567</li>
            <li>Address: 123 Cinema Street</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2025 ChanceTv. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 