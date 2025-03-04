import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import './Streaming.css'

const MOVIES = [
  {
    id: 1,
    title: "The Last Symphony",
    category: "Drama",
    duration: "2h 15m",
    year: 2024,
    rating: "PG-13",
    image: "/images/streaming/movie1.jpg",
    description: "A visually impaired pianist discovers a new purpose through teaching music to underprivileged children.",
    videoUrl: "https://example.com/video1"
  },
  {
    id: 2,
    title: "City Lights",
    category: "Comedy",
    duration: "30m",
    year: 2024,
    rating: "TV-14",
    image: "/images/streaming/movie2.jpg",
    description: "Follow the hilarious adventures of a charismatic restaurant owner in Manhattan.",
    videoUrl: "https://example.com/video2"
  },
  {
    id: 3,
    title: "New Beginnings",
    category: "Drama",
    duration: "22m",
    year: 2024,
    rating: "TV-PG",
    image: "/images/streaming/movie3.jpg",
    description: "A heartwarming story about community and family bonds in a diverse neighborhood.",
    videoUrl: "https://example.com/video3"
  }
]

const CATEGORIES = ["All", "Drama", "Comedy", "Action", "Documentary"]

const Streaming = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    // In a real application, check if user is logged in
    const checkAuth = () => {
      const token = localStorage.getItem('token')
      setIsAuthenticated(!!token)
    }
    checkAuth()
  }, [])

  const filteredMovies = MOVIES.filter(movie => {
    const matchesCategory = selectedCategory === "All" || movie.category === selectedCategory
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  return (
    <div className="streaming">
      <section className="streaming-hero">
        <div className="container">
          <h1>ChanceTv Streaming</h1>
          <p>Watch exclusive content from our productions</p>
        </div>
      </section>

      <section className="streaming-content container">
        {selectedMovie ? (
          <div className="video-player-section">
            <button 
              className="btn btn-secondary back-button"
              onClick={() => setSelectedMovie(null)}
            >
              Back to Browse
            </button>
            <div className="video-player">
              <video controls>
                <source src={selectedMovie.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="video-info">
              <h2>{selectedMovie.title}</h2>
              <div className="video-meta">
                <span>{selectedMovie.year}</span>
                <span>{selectedMovie.duration}</span>
                <span>{selectedMovie.rating}</span>
              </div>
              <p>{selectedMovie.description}</p>
            </div>
          </div>
        ) : (
          <>
            <div className="streaming-filters">
              <div className="categories">
                {CATEGORIES.map(category => (
                  <button
                    key={category}
                    className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search movies and shows..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="form-control"
                />
              </div>
            </div>

            <div className="movies-grid">
              {filteredMovies.map(movie => (
                <div 
                  key={movie.id} 
                  className="movie-card"
                  onClick={() => setSelectedMovie(movie)}
                >
                  <div className="movie-image">
                    <img src={movie.image} alt={movie.title} />
                    <div className="movie-overlay">
                      <button className="btn btn-primary play-btn">
                        Play
                      </button>
                    </div>
                  </div>
                  <div className="movie-details">
                    <h3>{movie.title}</h3>
                    <div className="movie-meta">
                      <span>{movie.year}</span>
                      <span>{movie.duration}</span>
                      <span>{movie.rating}</span>
                    </div>
                    <p className="movie-description">{movie.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  )
}

export default Streaming 