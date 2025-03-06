import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
  useEffect(() => {
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

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="about-title">
            Empowering Artists to
            <span className="gradient-text"> Shape Entertainment</span>
          </h1>
          <p className="about-subtitle">
            ChanceTv is revolutionizing how talents connect with opportunities in the entertainment industry
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section scroll-animate">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-content">
              <h2>Our Mission</h2>
              <p>We believe every artist deserves their moment in the spotlight. Our platform bridges the gap between talent and opportunity, making the entertainment industry more accessible than ever.</p>
              <div className="mission-stats">
                <div className="stat-box">
                  <span className="stat-value">150k+</span>
                  <span className="stat-label">Artists Connected</span>
                </div>
                <div className="stat-box">
                  <span className="stat-value">5k+</span>
                  <span className="stat-label">Productions</span>
                </div>
                <div className="stat-box">
                  <span className="stat-value">98%</span>
                  <span className="stat-label">Success Rate</span>
                </div>
              </div>
            </div>
            <div className="mission-image">
              <img src="/src/assets/images/about/mission.jpg" alt="Our Mission" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section scroll-animate">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            {[
              {
                icon: 'star',
                title: 'Excellence',
                description: 'We strive for excellence in every opportunity we present'
              },
              {
                icon: 'handshake',
                title: 'Integrity',
                description: 'Building trust through transparent and honest practices'
              },
              {
                icon: 'users',
                title: 'Community',
                description: 'Fostering a supportive environment for artists to thrive'
              },
              {
                icon: 'rocket',
                title: 'Innovation',
                description: 'Continuously evolving to serve our community better'
              }
            ].map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <i className={`fas fa-${value.icon}`}></i>
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section scroll-animate">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <div className="team-grid">
            {/* Add team member cards here */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta scroll-animate">
        <div className="container">
          <h2>Ready to Join Our Community?</h2>
          <p>Start your journey with ChanceTv today</p>
          <Link to="/register" className="btn btn-glow">Get Started</Link>
        </div>
      </section>
    </div>
  )
}

export default About 