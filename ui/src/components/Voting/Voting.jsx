import { useState } from 'react'
import './Voting.css'

const CONTESTANTS = [
  {
    id: 1,
    name: "Sarah Johnson",
    project: "The Last Symphony",
    role: "Lead Actress",
    votes: 1234,
    image: "/images/voting/contestant1.jpg",
    description: "Sarah brings depth and emotion to the role of a visually impaired pianist.",
    performanceClip: "https://example.com/clip1"
  },
  {
    id: 2,
    name: "Michael Chen",
    project: "City Lights",
    role: "Supporting Actor",
    votes: 982,
    image: "/images/voting/contestant2.jpg",
    description: "Michael's charismatic portrayal of a restaurant owner brings warmth and humor to the series.",
    performanceClip: "https://example.com/clip2"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    project: "New Beginnings",
    role: "Ensemble Cast",
    votes: 756,
    image: "/images/voting/contestant3.jpg",
    description: "Elena's powerful performance showcases the strength of community bonds.",
    performanceClip: "https://example.com/clip3"
  }
]

const VOTE_PACKAGES = [
  { id: 1, votes: 1, price: 1 },
  { id: 2, votes: 5, price: 4 },
  { id: 3, votes: 10, price: 7 },
  { id: 4, votes: 50, price: 30 }
]

const Voting = () => {
  const [selectedContestant, setSelectedContestant] = useState(null)
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [paymentStep, setPaymentStep] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const filteredContestants = CONTESTANTS.filter(contestant =>
    contestant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contestant.project.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleVote = (contestant) => {
    setSelectedContestant(contestant)
  }

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg)
    setPaymentStep(true)
  }

  const handlePaymentSubmit = (e) => {
    e.preventDefault()
    // In a real application, this would process payment and record votes
    alert(`Payment processed! ${selectedPackage.votes} votes cast for ${selectedContestant.name}`)
    setSelectedContestant(null)
    setSelectedPackage(null)
    setPaymentStep(false)
  }

  return (
    <div className="voting">
      <section className="voting-hero">
        <div className="container">
          <h1>Vote for Your Favorite</h1>
          <p>Support talented artists and help them achieve their dreams</p>
        </div>
      </section>

      <section className="voting-content container">
        <div className="voting-search">
          <input
            type="text"
            placeholder="Search contestants or projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="contestants-grid">
          {filteredContestants.map(contestant => (
            <div key={contestant.id} className="contestant-card">
              <div className="contestant-image">
                <img src={contestant.image} alt={contestant.name} />
              </div>
              <div className="contestant-details">
                <h3>{contestant.name}</h3>
                <p className="contestant-role">{contestant.role} in "{contestant.project}"</p>
                <p className="contestant-description">{contestant.description}</p>
                <div className="vote-count">
                  <span>{contestant.votes} votes</span>
                </div>
                <button 
                  className="btn btn-primary"
                  onClick={() => handleVote(contestant)}
                >
                  Vote Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedContestant && !paymentStep && (
          <div className="voting-modal">
            <div className="modal-content">
              <h2>Vote for {selectedContestant.name}</h2>
              <p>Select your voting package:</p>
              <div className="packages-grid">
                {VOTE_PACKAGES.map(pkg => (
                  <div key={pkg.id} className="package-card" onClick={() => handlePackageSelect(pkg)}>
                    <h3>{pkg.votes} {pkg.votes === 1 ? 'Vote' : 'Votes'}</h3>
                    <p className="package-price">${pkg.price}</p>
                    <p className="package-value">
                      ${(pkg.price / pkg.votes).toFixed(2)} per vote
                    </p>
                  </div>
                ))}
              </div>
              <button 
                className="btn btn-secondary"
                onClick={() => setSelectedContestant(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {paymentStep && (
          <div className="voting-modal">
            <div className="modal-content">
              <h2>Payment Details</h2>
              <div className="payment-summary">
                <h3>Order Summary</h3>
                <p><strong>Contestant:</strong> {selectedContestant.name}</p>
                <p><strong>Votes:</strong> {selectedPackage.votes}</p>
                <p><strong>Total:</strong> ${selectedPackage.price}</p>
              </div>
              <form onSubmit={handlePaymentSubmit}>
                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    required
                    className="form-control"
                  />
                </div>

                <div className="payment-row">
                  <div className="form-group">
                    <label htmlFor="expiry">Expiry Date</label>
                    <input
                      type="text"
                      id="expiry"
                      placeholder="MM/YY"
                      required
                      className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input
                      type="text"
                      id="cvv"
                      placeholder="123"
                      required
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-buttons">
                  <button type="submit" className="btn btn-primary">
                    Pay ${selectedPackage.price}
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={() => {
                      setPaymentStep(false)
                      setSelectedPackage(null)
                    }}
                  >
                    Back
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

export default Voting 