import { useState } from 'react'
import './Events.css'

const DUMMY_EVENTS = [
  {
    id: 1,
    title: "Summer Blockbuster Premiere",
    date: "2024-07-15",
    time: "19:00",
    location: "Grand Theater",
    price: 50,
    image: "/images/events/premiere.jpg",
    description: "Join us for the red carpet premiere of our latest summer blockbuster.",
    tickets_available: 100
  },
  {
    id: 2,
    title: "Film Workshop Series",
    date: "2024-08-01",
    time: "14:00",
    location: "MoviePro Studios",
    price: 75,
    image: "/images/events/workshop.jpg",
    description: "Learn from industry professionals in our exclusive workshop series.",
    tickets_available: 50
  },
  {
    id: 3,
    title: "Documentary Screening",
    date: "2024-08-15",
    time: "18:30",
    location: "Art House Cinema",
    price: 25,
    image: "/images/events/documentary.jpg",
    description: "Special screening of our award-winning documentary followed by Q&A.",
    tickets_available: 150
  }
]

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedEvent, setSelectedEvent] = useState(null)

  const filteredEvents = DUMMY_EVENTS.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handlePurchase = (event) => {
    setSelectedEvent(event)
    // In a real application, this would open a payment modal
    alert(`Proceeding to purchase tickets for ${event.title}`)
  }

  return (
    <div className="events">
      <section className="events-hero">
        <div className="container">
          <h1>Upcoming Events</h1>
          <p>Book your tickets for exclusive MoviePro events</p>
        </div>
      </section>

      <section className="events-content container">
        <div className="events-search">
          <input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="events-grid">
          {filteredEvents.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-image">
                <img src={event.image} alt={event.title} />
              </div>
              <div className="event-details">
                <h3>{event.title}</h3>
                <p className="event-description">{event.description}</p>
                <div className="event-info">
                  <p><strong>Date:</strong> {event.date}</p>
                  <p><strong>Time:</strong> {event.time}</p>
                  <p><strong>Location:</strong> {event.location}</p>
                  <p><strong>Price:</strong> ${event.price}</p>
                  <p><strong>Available Tickets:</strong> {event.tickets_available}</p>
                </div>
                <button 
                  className="btn btn-primary"
                  onClick={() => handlePurchase(event)}
                >
                  Purchase Tickets
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Events 