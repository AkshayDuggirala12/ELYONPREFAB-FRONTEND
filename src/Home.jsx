import { useEffect, useRef, useState } from 'react'
import QuoteForm from './components/QuoteForm'

const heroStats = [
  { value: 'Pan India', label: 'Execution reach' },
  { value: '25+', label: 'Project packages supported' },
  { value: '72K+', label: 'Sq. ft. delivered' },
  { value: '2025', label: 'Established' },
]

function Home({ stopAnimations }) {
  const heroVideoPath = `${import.meta.env.BASE_URL}hero-video.mp4`
  const heroVideoRef = useRef(null)
  const [hasHeroVideo, setHasHeroVideo] = useState(true)
  const [videoReady, setVideoReady] = useState(false)

  const [dbProjects, setDbProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/projects/');
        if (response.ok) {
          const data = await response.json();
          setDbProjects(data);
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    const video = heroVideoRef.current

    if (!video || !hasHeroVideo || !videoReady) {
      return
    }

    if (stopAnimations) {
      video.pause()
      return
    }

    const playPromise = video.play()
    if (playPromise && typeof playPromise.catch === 'function') {
      playPromise.catch(() => {})
    }
  }, [stopAnimations, hasHeroVideo, videoReady])

  return (
    <main>
      <section
        className={`hero${hasHeroVideo ? ' hero-video-active' : ''}`}
        id="top"
      >
        <div className="hero-media" aria-hidden="true">
          <video
            autoPlay
            className={`hero-video${videoReady ? ' is-ready' : ''}`}
            loop
            muted
            onError={() => {
              setHasHeroVideo(false)
              setVideoReady(false)
            }}
            onLoadedData={() => setVideoReady(true)}
            playsInline
            preload="auto"
            ref={heroVideoRef}
          >
            <source src={heroVideoPath} type="video/mp4" />
          </video>
        </div>
        <div className="hero-overlay"></div>
        <div className="frame hero-inner">
          <div className="hero-copy hero-copy-home">
            <a className="hero-pill-link" href="#about">
              Learn about our leap
              <span aria-hidden="true">{'->'}</span>
            </a>
            <p className="hero-home-caption">
              Prefab infrastructure executed with sharper speed, site
              control, and modular delivery discipline.
            </p>
          </div>
        </div>
      </section>

      <section className="chapter chapter-overview" id="about">
        <div className="frame corporate-shell">
          <div className="corporate-copy">
            <p className="eyebrow">Corporate Overview</p>
            <h2>FROM SITE OFFICES TO STEEL STRUCTURES</h2>
            <p className="corporate-lead">
              Elyon operates across the prefab infrastructure spectrum,
              supporting customers with modular buildings, labour
              accommodation, structural steel, and turnkey site-ready
              delivery.
            </p>
            <p className="corporate-body">
              We serve industrial, institutional, and government-led work
              where clients need faster mobilization, controlled fabrication,
              and dependable execution from planning through handover.
            </p>
            <a className="section-link" href="#businesses">
              Know More
            </a>
          </div>

          <div className="overview-facts corporate-facts" aria-label="Company highlights">
            {heroStats.map((stat) => (
              <article key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="chapter chapter-projects" id="projects">
        <div className="frame">
          <div className="section-heading">
            <span className="section-number">01</span>
            <div>
              <p className="eyebrow">Portfolio</p>
              <h2>Recent Projects</h2>
            </div>
          </div>
          <div className="projects-list">
            {/* This loops through your PostgreSQL data! */}
            {dbProjects.map((project) => (
              <article key={project.id} className="project-row">
                <div className="project-row-head">
                  <div>
                    <p className="project-location">{project.location}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <span className="project-badge">{project.duration}</span>
                </div>

                <div className="project-row-body">
                  {/* Smart Media Renderer: Video if exists, else Image */}
                  {project.video_url ? (
                    <video 
                      src={project.video_url} 
                      autoPlay loop muted playsInline 
                      style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '4px' }} 
                    />
                  ) : (
                    <div style={{ backgroundImage: `url(${project.image_url})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '220px', borderRadius: '4px' }}></div>
                  )}

                  <div className="project-meta">
                    <span>Execution Overview</span>
                    {/* Shows custom description if you typed one, otherwise shows the default! */}
                    <p>{project.description || "Turnkey prefabricated construction delivered on schedule. All structural assembly, finishing, and handover completed to client specifications."}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="chapter chapter-contact" id="contact">
        <div className="frame contact-layout">
          <div className="contact-copy">
            <p className="eyebrow">Get In Touch</p>
            <h2>Let&apos;s build something extraordinary together.</h2>
            <p className="contact-intro">
              Elyon Prefab Pvt Ltd welcomes collaboration with infrastructure
              developers, EPC contractors, industrial operators, and
              government departments looking for prefab and modular
              construction partners.
            </p>

            <div className="contact-detail-grid">
              <div>
                <span>Director</span>
                <p>Abhishek Kondapalli</p>
              </div>
              <div>
                <span>Phone</span>
                <p>+91 88865 77785</p>
              </div>
              <div>
                <span>Email</span>
                <p>elyonprefab@gmail.com</p>
              </div>
              <div>
                <span>Office</span>
                <p>Hyderabad, Telangana, India</p>
              </div>
            </div>

            <p className="contact-footnote">
              Vendor registration documents and detailed project credentials
              are available on request.{' '}
              <a href="/admin">Open admin dashboard</a>
            </p>
          </div>

          <QuoteForm />

        </div>
      </section>
    </main>
  )
}

export default Home