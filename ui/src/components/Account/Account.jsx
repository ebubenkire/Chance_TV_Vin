import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import './Account.css'

const MOCK_USER = {
  name: "John Doe",
  email: "john@example.com",
  subscription: "Premium",
  subscriptionEnd: "2024-12-31",
  avatar: "/images/avatars/default.jpg",
  activity: [
    {
      id: 1,
      type: "vote",
      description: "Voted for Sarah Johnson in The Last Symphony",
      date: "2024-03-15"
    },
    {
      id: 2,
      type: "watch",
      description: "Watched City Lights Episode 3",
      date: "2024-03-14"
    },
    {
      id: 3,
      type: "application",
      description: "Applied for Film Direction Course",
      date: "2024-03-10"
    }
  ]
}

const Account = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [activeTab, setActiveTab] = useState('profile')
  const [user, setUser] = useState(MOCK_USER)
  const [editMode, setEditMode] = useState(false)
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  useEffect(() => {
    // In a real application, check if user is logged in
    const checkAuth = () => {
      const token = localStorage.getItem('token')
      setIsAuthenticated(!!token)
    }
    checkAuth()
  }, [])

  if (!isAuthenticated) {
    return <Navigate to="/login" />
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
    // In a real application, this would update the user's information
    alert('Profile updated successfully!')
    setEditMode(false)
  }

  return (
    <div className="account">
      <section className="account-hero">
        <div className="container">
          <h1>My Account</h1>
          <p>Manage your ChanceTv experience</p>
        </div>
      </section>

      <section className="account-content container">
        <div className="account-grid">
          <div className="account-sidebar">
            <div className="user-info">
              <img src={user.avatar} alt={user.name} className="user-avatar" />
              <h3>{user.name}</h3>
              <p className="subscription-badge">{user.subscription}</p>
            </div>
            <div className="account-tabs">
              <button 
                className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                Profile
              </button>
              <button 
                className={`tab-btn ${activeTab === 'subscription' ? 'active' : ''}`}
                onClick={() => setActiveTab('subscription')}
              >
                Subscription
              </button>
              <button 
                className={`tab-btn ${activeTab === 'activity' ? 'active' : ''}`}
                onClick={() => setActiveTab('activity')}
              >
                Activity
              </button>
            </div>
          </div>

          <div className="account-main">
            {activeTab === 'profile' && (
              <div className="profile-section">
                <div className="section-header">
                  <h2>Profile Information</h2>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => setEditMode(!editMode)}
                  >
                    {editMode ? 'Cancel' : 'Edit Profile'}
                  </button>
                </div>

                {editMode ? (
                  <form onSubmit={handleSubmit} className="profile-form">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
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
                        className="form-control"
                      />
                    </div>

                    <div className="password-section">
                      <h3>Change Password</h3>
                      <div className="form-group">
                        <label htmlFor="currentPassword">Current Password</label>
                        <input
                          type="password"
                          id="currentPassword"
                          name="currentPassword"
                          value={formData.currentPassword}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="newPassword">New Password</label>
                        <input
                          type="password"
                          id="newPassword"
                          name="newPassword"
                          value={formData.newPassword}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className="form-control"
                        />
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Save Changes
                    </button>
                  </form>
                ) : (
                  <div className="profile-info">
                    <div className="info-group">
                      <label>Name</label>
                      <p>{user.name}</p>
                    </div>
                    <div className="info-group">
                      <label>Email</label>
                      <p>{user.email}</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'subscription' && (
              <div className="subscription-section">
                <h2>Subscription Details</h2>
                <div className="subscription-info">
                  <div className="info-group">
                    <label>Current Plan</label>
                    <p>{user.subscription}</p>
                  </div>
                  <div className="info-group">
                    <label>Renewal Date</label>
                    <p>{user.subscriptionEnd}</p>
                  </div>
                  <button className="btn btn-primary">Upgrade Plan</button>
                </div>
              </div>
            )}

            {activeTab === 'activity' && (
              <div className="activity-section">
                <h2>Recent Activity</h2>
                <div className="activity-list">
                  {user.activity.map(item => (
                    <div key={item.id} className="activity-item">
                      <div className="activity-icon">
                        {item.type === 'vote' && '🗳️'}
                        {item.type === 'watch' && '🎬'}
                        {item.type === 'application' && '📝'}
                      </div>
                      <div className="activity-details">
                        <p>{item.description}</p>
                        <span className="activity-date">{item.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Account 