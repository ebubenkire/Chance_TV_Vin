import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'
import Events from './components/Events/Events'
import Careers from './components/Careers/Careers'
import Academy from './components/Academy/Academy'
import Auditions from './components/Auditions/Auditions'
import Voting from './components/Voting/Voting'
import Streaming from './components/Streaming/Streaming'
import Account from './components/Account/Account'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import ProtectedRoute from './components/Routes/ProtectedRoute'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/auditions" element={<Auditions />} />
            <Route path="/voting" element={<Voting />} />
            <Route 
              path="/streaming" 
              element={
                <ProtectedRoute>
                  <Streaming />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/account" 
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              } 
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
