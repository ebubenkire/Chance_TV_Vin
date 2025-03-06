import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import './EventDetail.css'

const EventDetail = () => {
  const { id } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Mock event data - replace with API call
  const event = {
    id: parseInt(id),
    title: "Hollywood Casting Call",
    date: "April 15, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Los Angeles Convention Center",
    address: "1201 S Figueroa St, Los Angeles, CA 90015",
    category: "Casting",
    spots: 50,
    price: "Free",
    image: "/src/assets/images/events/casting-call.jpg",
    description: `Join us for an exclusive casting call event where top industry professionals will be looking for fresh talent across multiple roles. This is your chance to showcase your skills and potentially land a role in upcoming TV series and feature films.`,
    highlights: [
      "Multiple roles available",
      "Direct interaction with casting directors",
      "On-the-spot callbacks possible",
      "Professional headshot photography available"
    ],
    requirements: [
      "Professional headshot and resume",
      "Prepared monologue (1-2 minutes)",
      "Comfortable with cold readings",
      "Must be 18+ or accompanied by guardian"
    ],
    organizer: {
      name: "ChanceTv Studios",
      verified: true,
      image: "/src/assets/images/logo.png"
    }
  }

  return (
    <div className="event-detail-page">
      <div className="event-hero">
        <div className="event-image">
          <img src={event.image} alt={event.title} />
        </div>
        <div className="event-overlay"></div>
        <div className="container">
          <div className="event-info">
            <span className="event-category">{event.category}</span>
            <h1>{event.title}</h1>
            <div className="event-meta">
              <div className="meta-item">
                <i className="fas fa-calendar"></i>
                <span>{event.date}</span>
              </div>
              <div className="meta-item">
                <i className="fas fa-clock"></i>
                <span>{event.time}</span>
              </div>
              <div className="meta-item">
                <i className="fas fa-map-marker-alt"></i>
                <span>{event.location}</span>
              </div>
              <div className="meta-item">
                <i className="fas fa-users"></i>
                <span>{event.spots} spots available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="event-grid">
          <div className="event-main">
            <section className="description">
              <h2>About This Event</h2>
              <p>{event.description}</p>
            </section>

            <section className="highlights">
              <h2>Event Highlights</h2>
              <ul className="highlights-list">
                {event.highlights.map((highlight, index) => (
                  <li key={index}>
                    <i className="fas fa-star"></i>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="requirements">
              <h2>Requirements</h2>
              <ul className="requirements-list">
                {event.requirements.map((requirement, index) => (
                  <li key={index}>
                    <i className="fas fa-check-circle"></i>
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="event-sidebar">
            <div className="sidebar-card register-card">
              <span className="spots-left">
                <i className="fas fa-user-friends"></i> {event.spots} spots left
              </span>
              <div className="price">
                {event.price} <span>per person</span>
              </div>
              <button className="register-btn">
                Register Now <i className="fas fa-arrow-right"></i>
              </button>
            </div>

            <div className="sidebar-card organizer-card">
              <h3>Organizer</h3>
              <div className="organizer-info">
                <img src={event.organizer.image} alt={event.organizer.name} />
                <div>
                  <h4>{event.organizer.name}</h4>
                  {event.organizer.verified && (
                    <span className="verified-badge">
                      <i className="fas fa-check-circle"></i> Verified
                    </span>
                  )}
                </div>
              </div>
              <div className="organizer-actions">
                <button className="btn btn-outline">
                  <i className="fas fa-envelope"></i> Contact
                </button>
                <button className="btn btn-outline">
                  <i className="fas fa-share"></i> Share
                </button>
              </div>
            </div>

            <div className="sidebar-card location-card">
              <h3>Location</h3>
              <p>{event.address}</p>
              <div className="map-container">
                {/* Add map component here */}
              </div>
              <a 
                href={`https://maps.google.com/?q=${event.address}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <i className="fas fa-directions"></i> Get Directions
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

export default EventDetail 