import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './AuditionDetail.css'

const AuditionDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    portfolio: '',
    coverLetter: ''
  })

  // Mock data - in real app would fetch from API
  const audition = {
    id: parseInt(id),
    title: "Lead Role - Drama Series",
    category: "acting",
    deadline: "2024-04-30",
    location: "Los Angeles",
    requirements: [
      "Age 25-35",
      "Professional acting experience",
      "Strong dramatic skills",
      "Availability for 6-month shoot",
      "SAG-AFTRA membership preferred"
    ],
    description: "We're seeking a dynamic lead actor for an upcoming premium drama series. The role demands emotional depth and versatility. The series explores themes of family, identity, and redemption in contemporary America.",
    compensation: "$1,500 per episode",
    duration: "6 months",
    startDate: "June 2024",
    image: "/src/assets/images/auditions/drama-series.jpg"
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Show success message and redirect
    alert('Application submitted successfully!')
    navigate('/auditions')
  }

  return (
    <div className="audition-detail-page">
      <div className="audition-hero">
        <div className="container">
          <span className="category-badge">{audition.category}</span>
          <h1>{audition.title}</h1>
          <p className="location">{audition.location}</p>
        </div>
      </div>

      <div className="container audition-content">
        <div className="audition-grid">
          <div className="audition-main glass-morphism">
            <img src={audition.image} alt={audition.title} className="audition-image" />
            <div className="audition-info">
              <h2>About the Role</h2>
              <p>{audition.description}</p>
              
              <div className="requirements-section">
                <h3>Requirements</h3>
                <ul>
                  {audition.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="details-grid">
                <div className="detail-item">
                  <span className="label">Compensation</span>
                  <span className="value">{audition.compensation}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Duration</span>
                  <span className="value">{audition.duration}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Start Date</span>
                  <span className="value">{audition.startDate}</span>
                </div>
                <div className="detail-item">
                  <span className="label">Deadline</span>
                  <span className="value">{new Date(audition.deadline).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="application-section glass-morphism">
            {!showForm ? (
              <div className="cta-card">
                <h3>Ready to Apply?</h3>
                <p>Submit your application today and take the first step towards your dream role.</p>
                <button 
                  className="btn btn-glow hover-scale"
                  onClick={() => setShowForm(true)}
                >
                  Start Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="application-form">
                <h3>Application Form</h3>
                
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="experience">Professional Experience</label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    rows="4"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="portfolio">Portfolio Link (Optional)</label>
                  <input
                    type="url"
                    id="portfolio"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="coverLetter">Why are you perfect for this role?</label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    required
                    rows="6"
                  />
                </div>

                <div className="form-buttons">
                  <button type="submit" className="btn btn-glow">
                    Submit Application
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-glass"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuditionDetail 