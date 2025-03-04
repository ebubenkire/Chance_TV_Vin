import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Auditions.css'

const Auditions = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const auditions = [
    {
      id: 1,
      title: "Lead Role - Drama Series",
      category: "acting",
      deadline: "2024-04-30",
      location: "Los Angeles",
      requirements: "Age 25-35, Drama experience",
      image: "/src/assets/images/auditions/drama-series.jpg"
    },
    {
      id: 2,
      title: "Reality Show Host",
      category: "hosting",
      deadline: "2024-05-15",
      location: "New York",
      requirements: "Charismatic, TV experience",
      image: "/src/assets/images/auditions/reality-host.jpg"
    },
    {
      id: 3,
      title: "Musical Theater Production",
      category: "musical",
      deadline: "2024-05-01",
      location: "Chicago",
      requirements: "Singing & dancing skills",
      image: "/src/assets/images/auditions/musical.jpg"
    }
  ]

  const filteredAuditions = selectedCategory === 'all' 
    ? auditions 
    : auditions.filter(audition => audition.category === selectedCategory)

  return (
    <div className="auditions-page">
      <section className="auditions-hero">
        <div className="container">
          <h1 className="gradient-text">Auditions</h1>
          <p>Your journey to stardom begins here</p>
        </div>
      </section>

      <section className="auditions-content container">
        <div className="auditions-filters">
          <button 
            className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('all')}
          >
            All Auditions
          </button>
          <button 
            className={`filter-btn ${selectedCategory === 'acting' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('acting')}
          >
            Acting
          </button>
          <button 
            className={`filter-btn ${selectedCategory === 'hosting' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('hosting')}
          >
            Hosting
          </button>
          <button 
            className={`filter-btn ${selectedCategory === 'musical' ? 'active' : ''}`}
            onClick={() => setSelectedCategory('musical')}
          >
            Musical
          </button>
        </div>

        <div className="auditions-grid">
          {filteredAuditions.map(audition => (
            <div key={audition.id} className="audition-card glass-morphism">
              <div className="audition-image">
                <img src={audition.image} alt={audition.title} />
                <div className="category-tag">{audition.category}</div>
              </div>
              <div className="audition-details">
                <h3>{audition.title}</h3>
                <div className="audition-info">
                  <p><span>Location:</span> {audition.location}</p>
                  <p><span>Deadline:</span> {new Date(audition.deadline).toLocaleDateString()}</p>
                  <p><span>Requirements:</span> {audition.requirements}</p>
                </div>
                <Link to={`/auditions/${audition.id}`} className="btn btn-glow">
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Auditions 