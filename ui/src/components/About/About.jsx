import './About.css'

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1>About MoviePro</h1>
          <p>Leading the future of entertainment</p>
        </div>
      </section>

      <section className="about-content container">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2020, MoviePro has quickly become one of the leading film production
            companies in the industry. We specialize in creating compelling content that
            pushes boundaries and tells stories that matter.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            To create innovative and inspiring content while nurturing new talent and
            providing opportunities for creative minds to flourish in the entertainment
            industry.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-stat">
            <h3>100+</h3>
            <p>Productions</p>
          </div>
          <div className="about-stat">
            <h3>500+</h3>
            <p>Industry Professionals</p>
          </div>
          <div className="about-stat">
            <h3>50+</h3>
            <p>Awards</p>
          </div>
          <div className="about-stat">
            <h3>1M+</h3>
            <p>Streaming Subscribers</p>
          </div>
        </div>

        <div className="about-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Innovation</h3>
              <p>Pushing the boundaries of storytelling through technology</p>
            </div>
            <div className="value-card">
              <h3>Diversity</h3>
              <p>Embracing different perspectives and voices</p>
            </div>
            <div className="value-card">
              <h3>Excellence</h3>
              <p>Maintaining the highest standards in everything we do</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 