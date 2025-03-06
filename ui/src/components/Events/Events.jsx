import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Events.css'

const Events = () => {
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

  const upcomingEvents = [
    {
      id: 1,
      title: "Hollywood Casting Call",
      date: "April 15, 2024",
      location: "Los Angeles, CA",
      image: "/src/assets/images/events/casting-call.jpg",
      category: "Casting",
      spots: 50
    },
    {
      id: 2,
      title: "Acting Workshop Series",
      date: "April 20, 2024",
      location: "New York, NY",
      image: "/src/assets/images/events/workshop.jpg",
      category: "Workshop",
      spots: 25
    },
    {
      id: 3,
      title: "Industry Networking Night",
      date: "April 25, 2024",
      location: "Miami, FL",
      image: "/src/assets/images/events/networking.jpg",
      category: "Networking",
      spots: 100
    }
  ]

  return (
    <div className="events-page">
      {/* Hero Section */}
      <section className="events-hero">
        <div className="container">
          <h1 className="events-title">
            Connect at Our
            <span className="gradient-text"> Exclusive Events</span>
          </h1>
          <p className="events-subtitle">
            Join workshops, casting calls, and networking events to boost your career
          </p>
        </div>
      </section>

      {/* Featured Events */}
      <section className="featured-events scroll-animate">
        <div className="container">
          <h2 className="section-title">Upcoming Events</h2>
          <div className="events-grid">
            {upcomingEvents.map(event => (
              <div key={event.id} className="event-card">
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
                  <div className="event-category">{event.category}</div>
                </div>
                <div className="event-content">
                  <h3>{event.title}</h3>
                  <div className="event-details">
                    <span><i className="fas fa-calendar"></i> {event.date}</span>
                    <span><i className="fas fa-map-marker-alt"></i> {event.location}</span>
                    <span><i className="fas fa-users"></i> {event.spots} spots</span>
                  </div>
                  <Link to={`/events/${event.id}`} className="btn btn-outline">
                    Learn More <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="event-categories scroll-animate">
        <div className="container">
          <h2 className="section-title">Event Categories</h2>
          <div className="categories-grid">
            {[
              { icon: 'video', title: 'Casting Calls', count: '20+' },
              { icon: 'chalkboard-teacher', title: 'Workshops', count: '15+' },
              { icon: 'users', title: 'Networking', count: '10+' },
              { icon: 'microphone-alt', title: 'Showcases', count: '5+' }
            ].map((category, index) => (
              <div key={index} className="category-card">
                <div className="category-icon">
                  <i className={`fas fa-${category.icon}`}></i>
                </div>
                <h3>{category.title}</h3>
                <p>{category.count} upcoming events</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="events-cta scroll-animate">
        <div className="container">
          <h2>Don't Miss Out on Great Opportunities</h2>
          <p>Register now to get notified about upcoming events</p>
          <Link to="/register" className="btn btn-glow">
            Join Now
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Events 