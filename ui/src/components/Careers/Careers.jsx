import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Careers.css'

const Careers = () => {
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

  const openings = [
    {
      id: 1,
      title: "Senior Casting Director",
      department: "Casting",
      location: "Los Angeles, CA",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead our casting team in discovering and nurturing talent"
    },
    {
      id: 2,
      title: "Talent Relations Manager",
      department: "Artist Relations",
      location: "New York, NY",
      type: "Full-time",
      experience: "3+ years",
      description: "Build and maintain relationships with artists and agencies"
    },
    {
      id: 3,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      experience: "2+ years",
      description: "Create and execute marketing strategies for our platform"
    }
  ]

  const benefits = [
    {
      icon: 'heart',
      title: 'Health & Wellness',
      items: ['Medical Coverage', 'Dental & Vision', 'Mental Health Support']
    },
    {
      icon: 'plane',
      title: 'Time Off',
      items: ['Unlimited PTO', 'Paid Holidays', 'Sabbatical Leave']
    },
    {
      icon: 'graduation-cap',
      title: 'Growth',
      items: ['Learning Budget', 'Career Development', 'Industry Events']
    },
    {
      icon: 'users',
      title: 'Culture',
      items: ['Remote Work', 'Team Events', 'Inclusive Environment']
    }
  ]

  return (
    <div className="careers-page">
      {/* Hero Section */}
      <section className="careers-hero">
        <div className="container">
          <h1 className="careers-title">
            Join Our
            <span className="gradient-text"> Creative Team</span>
          </h1>
          <p className="careers-subtitle">
            Help us shape the future of entertainment talent discovery
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section scroll-animate">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>We're building the world's most innovative platform for connecting talent with opportunities. Join us in revolutionizing how the entertainment industry discovers and nurtures artists.</p>
            <div className="culture-values">
              <div className="value-item">
                <i className="fas fa-star"></i>
                <h3>Innovation</h3>
                <p>Push boundaries and reimagine possibilities</p>
              </div>
              <div className="value-item">
                <i className="fas fa-users"></i>
                <h3>Community</h3>
                <p>Foster inclusive and supportive environments</p>
              </div>
              <div className="value-item">
                <i className="fas fa-rocket"></i>
                <h3>Growth</h3>
                <p>Continuous learning and development</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section scroll-animate">
        <div className="container">
          <h2 className="section-title">Why Join Us</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">
                  <i className={`fas fa-${benefit.icon}`}></i>
                </div>
                <h3>{benefit.title}</h3>
                <ul>
                  {benefit.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="positions-section scroll-animate">
        <div className="container">
          <h2 className="section-title">Open Positions</h2>
          <div className="positions-grid">
            {openings.map(job => (
              <div key={job.id} className="position-card">
                <div className="position-header">
                  <h3>{job.title}</h3>
                  <span className="department-badge">{job.department}</span>
                </div>
                <p className="position-description">{job.description}</p>
                <div className="position-meta">
                  <span><i className="fas fa-map-marker-alt"></i> {job.location}</span>
                  <span><i className="fas fa-briefcase"></i> {job.type}</span>
                  <span><i className="fas fa-clock"></i> {job.experience}</span>
                </div>
                <Link to={`/careers/${job.id}`} className="btn btn-outline">
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="careers-cta scroll-animate">
        <div className="container">
          <h2>Ready to Make an Impact?</h2>
          <p>Join our team and help shape the future of talent discovery</p>
          <a href="mailto:careers@chancetv.com" className="btn btn-glow">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  )
}

export default Careers 