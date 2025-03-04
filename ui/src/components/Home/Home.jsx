import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content container">
          <div className="hero-text animate-fade-in">
            <h1>
              <span className="gradient-text">ChanceTv</span>
              <br />
              Where Stars Are Born
            </h1>
            <p>Discover, Create, and Shine in the World of Entertainment</p>
          </div>
          <div className="hero-buttons animate-fade-in">
            <Link to="/streaming" className="btn btn-glow hover-scale">
              Start Watching
            </Link>
            <Link to="/auditions" className="btn btn-glass hover-scale">
              Join the Cast
            </Link>
          </div>
          <div className="hero-stats animate-fade-in">
            <div className="stat-item">
              <span className="stat-number">1M+</span>
              <span className="stat-label">Viewers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Shows</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Awards</span>
            </div>
          </div>
        </div>
      </section>

      <section className="features glass-morphism">
        <div className="container">
          <h2 className="section-title">
            <span className="gradient-text">Why Choose ChanceTv?</span>
          </h2>
          <div className="features-grid">
            <div className="feature-card hover-scale">
              <div className="feature-icon gradient-bg-1">🎬</div>
              <h3>Film Academy</h3>
              <p>Learn from industry experts and master your craft</p>
              <Link to="/academy" className="btn btn-glass">Learn More</Link>
            </div>
            <div className="feature-card hover-scale">
              <div className="feature-icon gradient-bg-2">🎭</div>
              <h3>Auditions</h3>
              <p>Your chance to shine on the big screen</p>
              <Link to="/auditions" className="btn btn-glass">Apply Now</Link>
            </div>
            <div className="feature-card hover-scale">
              <div className="feature-icon gradient-bg-3">💼</div>
              <h3>Career Growth</h3>
              <p>Explore exciting opportunities in entertainment</p>
              <Link to="/careers" className="btn btn-glass">View Openings</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="shows-preview">
        <div className="container">
          <h2 className="section-title">
            <span className="gradient-text">Trending Shows</span>
          </h2>
          <div className="shows-grid">
            {[1, 2, 3, 4].map((show) => (
              <div key={show} className="show-card hover-scale">
                <div className="show-image">
                  <img src={`/src/assets/images/movie-thumbnails/movie${show}.jpg`} alt="Show" />
                  <div className="show-overlay">
                    <Link to="/streaming" className="btn btn-glow">Watch Now</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta glass-morphism">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>Join ChanceTv today and be part of something extraordinary</p>
            <Link to="/register" className="btn btn-glow hover-scale">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 