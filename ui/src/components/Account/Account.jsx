import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Account.css'

const Account = () => {
  const [activeTab, setActiveTab] = useState('profile')
  
  // Mock user data
  const userData = {
    name: "Victory Nkire",
    role: "Actor/Performer",
    avatar: "/src/assets/images/avatars/user-avatar.jpg",
    email: "victory@example.com",
    phone: "+1 (555) 123-4567",
    location: "Los Angeles, CA",
    bio: "Professional actor with 5+ years of experience in theater and television.",
    stats: {
      auditions: 12,
      callbacks: 5,
      roles: 3,
      followers: 1240
    },
    recentActivity: [
      {
        type: "audition",
        title: "Lead Role - Drama Series",
        date: "2024-03-15",
        status: "pending"
      },
      {
        type: "callback",
        title: "Supporting Role - Feature Film",
        date: "2024-03-10",
        status: "success"
      }
    ],
    upcomingEvents: [
      {
        title: "Acting Workshop",
        date: "2024-03-20",
        time: "14:00",
        location: "Studio A"
      },
      {
        title: "Callback Audition",
        date: "2024-03-22",
        time: "10:00",
        location: "Main Theater"
      }
    ]
  }

  return (
    <div className="account-page">
      <div className="account-hero">
        <div className="container">
          <div className="profile-header">
            <div className="profile-avatar">
              <img src={userData.avatar} alt={userData.name} />
              <button className="edit-avatar">
                <i className="fas fa-camera"></i>
              </button>
            </div>
            <div className="profile-info">
              <h1>{userData.name}</h1>
              <p className="role">{userData.role}</p>
              <div className="profile-stats">
                <div className="stat-item">
                  <span className="stat-number">{userData.stats.auditions}</span>
                  <span className="stat-label">Auditions</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{userData.stats.callbacks}</span>
                  <span className="stat-label">Callbacks</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{userData.stats.roles}</span>
                  <span className="stat-label">Roles</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{userData.stats.followers}</span>
                  <span className="stat-label">Followers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="account-content container">
        <div className="account-tabs">
          <button 
            className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            Profile
          </button>
          <button 
            className={`tab-btn ${activeTab === 'activity' ? 'active' : ''}`}
            onClick={() => setActiveTab('activity')}
          >
            Activity
          </button>
          <button 
            className={`tab-btn ${activeTab === 'media' ? 'active' : ''}`}
            onClick={() => setActiveTab('media')}
          >
            Media
          </button>
          <button 
            className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button>
        </div>

        <div className="account-grid">
          <div className="main-content glass-morphism">
            {activeTab === 'profile' && (
              <div className="profile-section">
                <h2>About Me</h2>
                <p className="bio">{userData.bio}</p>
                
                <div className="contact-info">
                  <h3>Contact Information</h3>
                  <div className="info-grid">
                    <div className="info-item">
                      <span className="label">Email</span>
                      <span className="value">{userData.email}</span>
                    </div>
                    <div className="info-item">
                      <span className="label">Phone</span>
                      <span className="value">{userData.phone}</span>
                    </div>
                    <div className="info-item">
                      <span className="label">Location</span>
                      <span className="value">{userData.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'activity' && (
              <div className="activity-section">
                <h2>Recent Activity</h2>
                <div className="activity-timeline">
                  {userData.recentActivity.map((activity, index) => (
                    <div key={index} className={`activity-card ${activity.status}`}>
                      <div className="activity-icon">
                        <i className={`fas fa-${activity.type === 'audition' ? 'theater-masks' : 'check-circle'}`}></i>
                      </div>
                      <div className="activity-details">
                        <h3>{activity.title}</h3>
                        <p className="date">{new Date(activity.date).toLocaleDateString()}</p>
                        <span className="status-badge">{activity.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'media' && (
              <div className="media-section">
                <h2>My Media Gallery</h2>
                
                <div className="media-filters">
                  <button className="filter-btn active">All</button>
                  <button className="filter-btn">Photos</button>
                  <button className="filter-btn">Videos</button>
                  <button className="filter-btn">Reels</button>
                </div>

                <div className="media-upload-area">
                  <input 
                    type="file" 
                    id="media-upload" 
                    className="hidden-input" 
                    multiple 
                    accept="image/*,video/*" 
                  />
                  <label htmlFor="media-upload" className="upload-label">
                    <i className="fas fa-cloud-upload-alt"></i>
                    <span>Drop files here or click to upload</span>
                    <small>Supports: JPG, PNG, MP4 (Max 10MB)</small>
                  </label>
                </div>

                <div className="media-grid">
                  {/* Sample Media Items */}
                  <div className="media-item">
                    <img src="/src/assets/images/portfolio/headshot1.jpg" alt="Headshot" />
                    <div className="media-overlay">
                      <div className="media-actions">
                        <button className="action-btn">
                          <i className="fas fa-expand"></i>
                        </button>
                        <button className="action-btn">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                      <div className="media-info">
                        <span className="media-type">Photo</span>
                        <span className="media-date">Mar 15, 2024</span>
                      </div>
                    </div>
                  </div>

                  <div className="media-item video">
                    <video src="/src/assets/videos/reel1.mp4" poster="/src/assets/images/portfolio/video-thumb1.jpg" />
                    <div className="media-overlay">
                      <div className="media-actions">
                        <button className="action-btn">
                          <i className="fas fa-play"></i>
                        </button>
                        <button className="action-btn">
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                      <div className="media-info">
                        <span className="media-type">Video</span>
                        <span className="media-date">Mar 10, 2024</span>
                      </div>
                    </div>
                  </div>

                  {/* Add more media items here */}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="settings-section">
                <h2>Account Settings</h2>
                
                <div className="settings-grid">
                  <div className="settings-group">
                    <h3>Profile Settings</h3>
                    <form className="settings-form">
                      <div className="form-group">
                        <label>Display Name</label>
                        <input type="text" defaultValue={userData.name} />
                      </div>
                      <div className="form-group">
                        <label>Professional Title</label>
                        <input type="text" defaultValue={userData.role} />
                      </div>
                      <div className="form-group">
                        <label>Bio</label>
                        <textarea defaultValue={userData.bio} rows="4" />
                      </div>
                      <button type="submit" className="btn btn-glow">Save Changes</button>
                    </form>
                  </div>

                  <div className="settings-group">
                    <h3>Contact Information</h3>
                    <form className="settings-form">
                      <div className="form-group">
                        <label>Email</label>
                        <input type="email" defaultValue={userData.email} />
                      </div>
                      <div className="form-group">
                        <label>Phone</label>
                        <input type="tel" defaultValue={userData.phone} />
                      </div>
                      <div className="form-group">
                        <label>Location</label>
                        <input type="text" defaultValue={userData.location} />
                      </div>
                      <button type="submit" className="btn btn-glow">Update Contact Info</button>
                    </form>
                  </div>

                  <div className="settings-group">
                    <h3>Privacy Settings</h3>
                    <div className="settings-options">
                      <label className="toggle-label">
                        <span>Profile Visibility</span>
                        <div className="toggle-switch">
                          <input type="checkbox" defaultChecked />
                          <span className="toggle-slider"></span>
                        </div>
                      </label>
                      <label className="toggle-label">
                        <span>Show Email Address</span>
                        <div className="toggle-switch">
                          <input type="checkbox" />
                          <span className="toggle-slider"></span>
                        </div>
                      </label>
                      <label className="toggle-label">
                        <span>Show Phone Number</span>
                        <div className="toggle-switch">
                          <input type="checkbox" />
                          <span className="toggle-slider"></span>
                        </div>
                      </label>
                    </div>
                  </div>

                  <div className="settings-group danger-zone">
                    <h3>Account Management</h3>
                    <div className="danger-zone-options">
                      <button className="btn btn-outline-danger">Deactivate Account</button>
                      <button className="btn btn-danger">Delete Account</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="side-content">
            <div className="upcoming-events glass-morphism">
              <h2>Upcoming Events</h2>
              {userData.upcomingEvents.map((event, index) => (
                <div key={index} className="event-card">
                  <div className="event-date">
                    <span className="day">{new Date(event.date).getDate()}</span>
                    <span className="month">{new Date(event.date).toLocaleString('default', { month: 'short' })}</span>
                  </div>
                  <div className="event-details">
                    <h3>{event.title}</h3>
                    <p className="time">{event.time}</p>
                    <p className="location">{event.location}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="quick-actions glass-morphism">
              <h2>Quick Actions</h2>
              <div className="action-buttons">
                <Link to="/auditions" className="btn btn-glow">
                  Find Auditions
                </Link>
                <Link to="/academy" className="btn btn-glass">
                  Browse Courses
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Account 