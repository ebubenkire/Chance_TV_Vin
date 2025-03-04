import { useState } from 'react'
import './Academy.css'

const COURSES = [
  {
    id: 1,
    title: "Film Direction",
    duration: "12 months",
    level: "Advanced",
    tuition: 15000,
    startDate: "September 2024",
    image: "/images/academy/direction.jpg",
    description: "Master the art of film direction with hands-on experience in both studio and location shooting.",
    highlights: [
      "Learn from award-winning directors",
      "Work with professional equipment",
      "Direct your own short film",
      "Industry networking opportunities"
    ]
  },
  {
    id: 2,
    title: "Cinematography",
    duration: "9 months",
    level: "Intermediate",
    tuition: 12000,
    startDate: "October 2024",
    image: "/images/academy/cinematography.jpg",
    description: "Develop your skills in cinematography with focus on lighting, composition, and camera movement.",
    highlights: [
      "Master digital cinema cameras",
      "Advanced lighting techniques",
      "Color theory and grading",
      "Practical shooting exercises"
    ]
  },
  {
    id: 3,
    title: "Screenwriting",
    duration: "6 months",
    level: "Beginner",
    tuition: 8000,
    startDate: "August 2024",
    image: "/images/academy/screenwriting.jpg",
    description: "Learn the craft of screenwriting from concept to final draft.",
    highlights: [
      "Story structure fundamentals",
      "Character development",
      "Dialogue writing",
      "Script formatting"
    ]
  }
]

const Academy = () => {
  const [selectedCourse, setSelectedCourse] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    motivation: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, this would send the application to a server
    alert('Application submitted successfully!')
    setSelectedCourse(null)
    setFormData({
      name: '',
      email: '',
      phone: '',
      education: '',
      experience: '',
      motivation: ''
    })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="academy">
      <section className="academy-hero">
        <div className="container">
          <h1>Film Production Academy</h1>
          <p>Transform your passion into profession</p>
        </div>
      </section>

      <section className="academy-content container">
        <div className="academy-intro">
          <h2>Our Programs</h2>
          <p>
            Join MoviePro Academy and learn from industry professionals. Our hands-on
            programs are designed to give you real-world experience in film production.
          </p>
        </div>

        <div className="courses-grid">
          {COURSES.map(course => (
            <div key={course.id} className="course-card">
              <div className="course-image">
                <img src={course.image} alt={course.title} />
                <span className="course-level">{course.level}</span>
              </div>
              <div className="course-details">
                <h3>{course.title}</h3>
                <p className="course-description">{course.description}</p>
                <div className="course-info">
                  <span><strong>Duration:</strong> {course.duration}</span>
                  <span><strong>Start Date:</strong> {course.startDate}</span>
                  <span><strong>Tuition:</strong> ${course.tuition}</span>
                </div>
                <h4>Program Highlights:</h4>
                <ul>
                  {course.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
                <button 
                  className="btn btn-primary"
                  onClick={() => setSelectedCourse(course)}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedCourse && (
          <div className="application-modal">
            <div className="modal-content">
              <h2>Apply for {selectedCourse.title}</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-control"
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
                    className="form-control"
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
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="education">Educational Background</label>
                  <textarea
                    id="education"
                    name="education"
                    value={formData.education}
                    onChange={handleInputChange}
                    required
                    className="form-control"
                    rows="3"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="experience">Relevant Experience</label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="form-control"
                    rows="3"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="motivation">Statement of Purpose</label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    required
                    className="form-control"
                    rows="5"
                    placeholder="Tell us why you want to join this program..."
                  />
                </div>

                <div className="form-buttons">
                  <button type="submit" className="btn btn-primary">Submit Application</button>
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={() => setSelectedCourse(null)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}

export default Academy 