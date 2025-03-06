import { useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import './AuditionDetail.css'

const AuditionDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [showForm, setShowForm] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    portfolio: '',
    coverLetter: '',
    headshot: null,
    mediaFiles: []
  })
  const fileInputRef = useRef(null)
  const mediaInputRef = useRef(null)
  const [uploadProgress, setUploadProgress] = useState(0)

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

  const validateForm = () => {
    const newErrors = {}
    
    // Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Name is required'
    } else if (formData.fullName.length < 2) {
      newErrors.fullName = 'Name is too short'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }

    // Phone validation
    const phoneRegex = /^\+?[\d\s-]{10,}$/
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required'
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Invalid phone format'
    }

    // Experience validation
    if (!formData.experience.trim()) {
      newErrors.experience = 'Experience is required'
    } else if (formData.experience.length < 50) {
      newErrors.experience = 'Please provide more details about your experience'
    }

    // Cover letter validation
    if (!formData.coverLetter.trim()) {
      newErrors.coverLetter = 'Cover letter is required'
    } else if (formData.coverLetter.length < 100) {
      newErrors.coverLetter = 'Cover letter should be at least 100 characters'
    }

    // Portfolio URL validation (optional)
    if (formData.portfolio && !formData.portfolio.startsWith('http')) {
      newErrors.portfolio = 'Please enter a valid URL'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const handleFileChange = (e, type) => {
    const files = Array.from(e.target.files)
    
    // Validate file types and sizes
    const validTypes = ['image/jpeg', 'image/png', 'image/jpg']
    const maxSize = 5 * 1024 * 1024 // 5MB

    if (type === 'headshot') {
      const file = files[0]
      if (!file) return

      if (!validTypes.includes(file.type)) {
        toast.error('Please upload a valid image file (JPG, PNG)')
        return
      }

      if (file.size > maxSize) {
        toast.error('File size should be less than 5MB')
        return
      }

      // Create preview URL
      const previewUrl = URL.createObjectURL(file)
      setFormData(prev => ({
        ...prev,
        headshot: {
          file,
          preview: previewUrl
        }
      }))
    } else if (type === 'media') {
      const validMediaTypes = [...validTypes, 'video/mp4', 'video/quicktime']
      const validFiles = files.filter(file => {
        if (!validMediaTypes.includes(file.type)) {
          toast.error(`Invalid file type: ${file.name}`)
          return false
        }
        if (file.size > maxSize) {
          toast.error(`File too large: ${file.name}`)
          return false
        }
        return true
      })

      setFormData(prev => ({
        ...prev,
        mediaFiles: [
          ...prev.mediaFiles,
          ...validFiles.map(file => ({
            file,
            preview: URL.createObjectURL(file),
            type: file.type.startsWith('image/') ? 'image' : 'video'
          }))
        ]
      }))
    }
  }

  const removeFile = (index, type) => {
    if (type === 'headshot') {
      URL.revokeObjectURL(formData.headshot?.preview)
      setFormData(prev => ({
        ...prev,
        headshot: null
      }))
    } else if (type === 'media') {
      const newFiles = [...formData.mediaFiles]
      URL.revokeObjectURL(newFiles[index].preview)
      newFiles.splice(index, 1)
      setFormData(prev => ({
        ...prev,
        mediaFiles: newFiles
      }))
    }
  }

  // Simulate file upload progress
  const simulateUpload = async () => {
    for (let i = 0; i <= 100; i += 10) {
      setUploadProgress(i)
      await new Promise(resolve => setTimeout(resolve, 200))
    }
    setUploadProgress(0)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      toast.error('Please fix the errors in the form')
      return
    }

    setIsSubmitting(true)
    const loadingToast = toast.loading('Uploading files...')

    try {
      // Simulate file upload
      await simulateUpload()
      toast.loading('Submitting application...', { id: loadingToast })
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      toast.success('Application submitted successfully!')
      navigate('/auditions')
    } catch (error) {
      toast.error('Failed to submit application. Please try again.')
    } finally {
      toast.dismiss(loadingToast)
      setIsSubmitting(false)
    }
  }

  const handleCancel = () => {
    if (Object.values(formData).some(value => value.trim())) {
      if (window.confirm('Are you sure you want to cancel your application? All progress will be lost.')) {
        setShowForm(false)
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          experience: '',
          portfolio: '',
          coverLetter: '',
          headshot: null,
          mediaFiles: []
        })
        setErrors({})
        toast('Application cancelled', { icon: '🚫' })
      }
    } else {
      setShowForm(false)
    }
  }

  const handleBackToAuditions = () => {
    if (showForm && formData.fullName) {
      if (window.confirm('Are you sure you want to leave? Your application progress will be lost.')) {
        navigate('/auditions')
      }
    } else {
      navigate('/auditions')
    }
  }

  return (
    <div className="audition-detail-page">
      <Toaster position="top-right" />
      <div className="audition-hero">
        <div className="container">
          <button 
            onClick={handleBackToAuditions}
            className="back-button"
          >
            ← Back to Auditions
          </button>
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
                    className={errors.fullName ? 'error' : ''}
                    required
                  />
                  {errors.fullName && <span className="error-message">{errors.fullName}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? 'error' : ''}
                    required
                  />
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={errors.phone ? 'error' : ''}
                    required
                  />
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="experience">Professional Experience</label>
                  <textarea
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className={errors.experience ? 'error' : ''}
                    required
                    rows="4"
                  />
                  {errors.experience && <span className="error-message">{errors.experience}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="portfolio">Portfolio Link (Optional)</label>
                  <input
                    type="url"
                    id="portfolio"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    className={errors.portfolio ? 'error' : ''}
                  />
                  {errors.portfolio && <span className="error-message">{errors.portfolio}</span>}
                </div>

                <div className="form-group">
                  <label>Headshot</label>
                  <div className="file-upload-area">
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={(e) => handleFileChange(e, 'headshot')}
                      accept="image/*"
                      className="hidden-input"
                    />
                    {formData.headshot ? (
                      <div className="file-preview">
                        <img src={formData.headshot.preview} alt="Headshot preview" />
                        <button 
                          type="button"
                          onClick={() => removeFile(0, 'headshot')}
                          className="remove-file"
                        >
                          ×
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="upload-btn"
                      >
                        Upload Headshot
                      </button>
                    )}
                  </div>
                </div>

                <div className="form-group">
                  <label>Additional Media (Optional)</label>
                  <div className="file-upload-area">
                    <input
                      type="file"
                      multiple
                      ref={mediaInputRef}
                      onChange={(e) => handleFileChange(e, 'media')}
                      accept="image/*,video/*"
                      className="hidden-input"
                    />
                    <button
                      type="button"
                      onClick={() => mediaInputRef.current?.click()}
                      className="upload-btn"
                    >
                      Add Media Files
                    </button>
                  </div>
                  {formData.mediaFiles.length > 0 && (
                    <div className="media-preview-grid">
                      {formData.mediaFiles.map((file, index) => (
                        <div key={index} className="file-preview">
                          {file.type === 'image' ? (
                            <img src={file.preview} alt={`Media ${index + 1}`} />
                          ) : (
                            <video src={file.preview} controls />
                          )}
                          <button 
                            type="button"
                            onClick={() => removeFile(index, 'media')}
                            className="remove-file"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {uploadProgress > 0 && (
                  <div className="upload-progress">
                    <div 
                      className="progress-bar" 
                      style={{ width: `${uploadProgress}%` }}
                    />
                    <span>{uploadProgress}%</span>
                  </div>
                )}

                <div className="form-group">
                  <label htmlFor="coverLetter">Why are you perfect for this role?</label>
                  <textarea
                    id="coverLetter"
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    className={errors.coverLetter ? 'error' : ''}
                    required
                    rows="6"
                  />
                  {errors.coverLetter && <span className="error-message">{errors.coverLetter}</span>}
                </div>

                <div className="form-buttons">
                  <button 
                    type="submit" 
                    className={`btn btn-glow ${isSubmitting ? 'submitting' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-glass"
                    onClick={handleCancel}
                    disabled={isSubmitting}
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