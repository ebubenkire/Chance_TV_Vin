import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
    
    // Add scroll animation observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.scroll-animate').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const featuredAuditions = [
    {
      id: 1,
      title: "Lead Role - Netflix Series",
      category: "Television",
      deadline: "2024-04-15",
      image: "/src/assets/images/auditions/netflix-series.jpg"
    },
    {
      id: 2,
      title: "Broadway Musical",
      category: "Theater",
      deadline: "2024-04-20",
      image: "/src/assets/images/auditions/broadway.jpg"
    },
    {
      id: 3,
      title: "Commercial Campaign",
      category: "Commercial",
      deadline: "2024-04-10",
      image: "/src/assets/images/auditions/commercial.jpg"
    }
  ]

  const successStories = [
    {
      name: "Sarah Johnson",
      role: "Lead Actress",
      project: "Stranger Things Season 5",
      image: "/src/assets/images/success/sarah.jpg",
      quote: "ChanceTv helped me land my dream role!"
    },
    {
      name: "Michael Chen",
      role: "Supporting Actor",
      project: "Hamilton Broadway",
      image: "/src/assets/images/success/michael.jpg",
      quote: "From audition to standing ovation!"
    }
  ]

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className={`hero-section ${isVisible ? 'visible' : ''}`}>
        <div className="hero-content">
          <h1 className="hero-title">
            Your Stage,
            <span className="gradient-text"> Your Spotlight</span>
          </h1>
          <p className="hero-subtitle">
            Connect with top casting directors, find auditions, and launch your career in entertainment
          </p>
          <div className="hero-cta">
            <Link to="/auditions" className="btn btn-glow">
              <span>Find Auditions</span>
              <i className="fas fa-arrow-right"></i>
            </Link>
            <Link to="/register" className="btn btn-glass">
              <i className="fas fa-user-plus"></i>
              <span>Join Free</span>
            </Link>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10k+</span>
              <span className="stat-label">Active Roles</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50k+</span>
              <span className="stat-label">Talents</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Success Rate</span>
            </div>
          </div>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Categories Section */}
      <section className="categories-section scroll-animate">
        <div className="container">
          <h2 className="section-title">Explore Categories</h2>
          <div className="categories-grid">
            {['Acting', 'Modeling', 'Music', 'Dance', 'Voice Over', 'Theater'].map((category, index) => (
              <Link to={`/auditions?category=${category.toLowerCase()}`} key={index} className="category-card">
                <div className="category-icon">
                  <i className={`fas fa-${getCategoryIcon(category)}`}></i>
                </div>
                <h3>{category}</h3>
                <span className="category-count">200+ Opportunities</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="featured-section scroll-animate">
        <div className="container">
          <h2 className="section-title">Featured Opportunities</h2>
          <div className="featured-grid">
            {[1, 2, 3].map((item) => (
              <div key={item} className="featured-card">
                <div className="card-badge">Featured</div>
                <h3>Netflix Original Series</h3>
                <p className="role-type">Lead Role</p>
                <div className="card-details">
                  <span><i className="fas fa-map-marker-alt"></i> Los Angeles</span>
                  <span><i className="fas fa-calendar"></i> Starts Apr 2024</span>
                </div>
                <Link to="/auditions/1" className="btn btn-outline">Learn More</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="success-section scroll-animate">
        <div className="container">
          <h2 className="section-title">Success Stories</h2>
          <div className="testimonials-slider">
            {successStories.map((story, index) => (
              <div key={index} className="success-card">
                <div className="success-image">
                  <img src={story.image} alt={story.name} />
                </div>
                <div className="success-content">
                  <blockquote>{story.quote}</blockquote>
                  <div className="success-info">
                    <h3>{story.name}</h3>
                    <p>{story.role}</p>
                    <p className="project">{story.project}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section scroll-animate">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Journey?</h2>
            <p>Join thousands of artists who've found their big break through our platform</p>
            <Link to="/register" className="btn btn-glow">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

const getCategoryIcon = (category) => {
  const icons = {
    'Acting': 'theater-masks',
    'Modeling': 'camera',
    'Music': 'music',
    'Dance': 'running',
    'Voice Over': 'microphone-alt',
    'Theater': 'masks'
  }
  return icons[category] || 'star'
}

export default Home 