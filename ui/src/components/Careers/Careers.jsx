import { useState } from 'react'
import './Careers.css'

const JOBS = [
  {
    id: 1,
    title: "Senior Film Editor",
    department: "Post Production",
    type: "Full-time",
    location: "Los Angeles, CA",
    description: "Looking for an experienced film editor with expertise in Adobe Premiere Pro and DaVinci Resolve.",
    requirements: [
      "7+ years of professional film editing experience",
      "Proficiency in Adobe Premiere Pro and DaVinci Resolve",
      "Experience with feature films and TV series",
      "Strong storytelling abilities"
    ]
  },
  {
    id: 2,
    title: "Makeup Artist",
    department: "Production",
    type: "Contract",
    location: "New York, NY",
    description: "Seeking talented makeup artists for upcoming feature film productions.",
    requirements: [
      "5+ years of experience in film/TV makeup",
      "Experience with special effects makeup",
      "Portfolio of previous work",
      "Ability to work under pressure"
    ]
  },
  {
    id: 3,
    title: "Production Assistant",
    department: "Production",
    type: "Full-time",
    location: "Atlanta, GA",
    description: "Entry-level position supporting various aspects of film production.",
    requirements: [
      "Bachelor's degree in Film or related field",
      "Strong organizational skills",
      "Ability to work long hours",
      "Valid driver's license"
    ]
  }
]

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, this would send the application to a server
    alert('Application submitted successfully!')
    setSelectedJob(null)
    setFormData({
      name: '',
      email: '',
      phone: '',
      resume: null,
      coverLetter: ''
    })
  }

  const handleInputChange = (e) => {
    const { name, value, files } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }))
  }

  return (
    <div className="careers">
      <section className="careers-hero">
        <div className="container">
          <h1>Join Our Team</h1>
          <p>Build your career in the film industry</p>
        </div>
      </section>

      <section className="careers-content container">
        <div className="jobs-grid">
          {JOBS.map(job => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <div className="job-info">
                <span>{job.department}</span>
                <span>{job.type}</span>
                <span>{job.location}</span>
              </div>
              <p>{job.description}</p>
              <h4>Requirements:</h4>
              <ul>
                {job.requirements.map((req, index) => (
                  <li key={index}>{req}</li>
                ))}
              </ul>
              <button 
                className="btn btn-primary"
                onClick={() => setSelectedJob(job)}
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {selectedJob && (
          <div className="application-modal">
            <div className="modal-content">
              <h2>Apply for {selectedJob.title}</h2>
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
                  <label htmlFor="resume">Resume</label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    onChange={handleInputChange}
                    required
                    className="form-control"
                    accept=".pdf,.doc,.docx"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="coverLetter">Cover Letter</label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    required
                    className="form-control"
                    rows="5"
                  />
                </div>

                <div className="form-buttons">
                  <button type="submit" className="btn btn-primary">Submit Application</button>
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={() => setSelectedJob(null)}
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

export default Careers 