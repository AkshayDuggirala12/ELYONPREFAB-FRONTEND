import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import QuoteForm from './components/QuoteForm'
import './Home.css'

const ImageCarousel = ({ images }) => {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const { current } = scrollRef
    if (current) {
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  // Fallback if no images are provided
  if (!images || images.length === 0) {
    return <div className="project-media-image"></div>
  }

  // If there's only 1 image, don't show the carousel arrows
  if (images.length === 1) {
    return (
      <div
        className="project-media-image"
        style={{ backgroundImage: `url("${images[0]}")` }}
      ></div>
    )
  }

  return (
    <div className="carousel-wrapper">
      <button className="carousel-btn left" onClick={() => scroll('left')} aria-label="Previous">
        &#10094;
      </button>

      <div className="carousel-container" ref={scrollRef}>
        {images.map((img, index) => (
          <div
            key={index}
            className="carousel-slide"
            style={{ backgroundImage: `url("${img}")` }}
          ></div>
        ))}
      </div>

      <button className="carousel-btn right" onClick={() => scroll('right')} aria-label="Next">
        &#10095;
      </button>
    </div>
  )
}

const heroStats = [
  { value: 'Pan India', accent: '', label: 'Execution reach' },
  { value: '10', accent: '+', label: 'Years of leadership experience' },
  { value: '200', accent: '+', label: 'Project packages supported' },
  { value: '4', accent: ' Weeks', label: 'Average delivery' },
  { value: '175K', accent: '+', label: 'Sq. ft. delivered' },
]

const processSteps = [
  {
    number: '01',
    stage: 'Stage 1',
    title: 'Enquiry & Requirement Understanding',
    description: 'Share your site dimensions, intended use, project requirements, and expected timeline. Our team works closely with you to understand your needs and establish the project scope before moving forward.',
  },
  {
    number: '02',
    stage: 'Stage 2',
    title: 'Quotation & Commercial Finalisation',
    description: 'Based on the confirmed requirements, we prepare a detailed quotation covering the agreed scope of work. We then finalise the project cost, payment milestones, and commercial terms with complete clarity.',
  },
  {
    number: '03',
    stage: 'Stage 3',
    title: 'Project Planning & Deployment',
    description: 'Once the project is confirmed, we plan the execution schedule and coordinate the required materials, manpower, and resources. Our team ensures everything is prepared for smooth and timely project execution.',
  },
  {
    number: '04',
    stage: 'Stage 4',
    title: 'Material Deployment & Site Execution',
    description: 'Materials and the required project team are deployed to site according to the agreed schedule. Our experienced team manages the installation and execution while maintaining quality, safety, and project timelines.',
  },
  {
    number: '05',
    stage: 'Stage 5',
    title: 'Project Completion & Handover',
    description: 'On completion, the site is inspected against the agreed scope and requirements. Once the work is successfully completed, we formally hand over the project along with the relevant project documentation.',
  },
  {
    number: '06',
    stage: 'Stage 6',
    title: 'After Sales Support',
    description: 'Our relationship continues beyond project completion. Our support team remains accessible for post-handover assistance, queries, and service requirements through phone and WhatsApp.',
  },
]

const engineeringHighlights = [
  {
    title: 'Earthquake Resistant',
    description: 'Structures are engineered to withstand seismic activity, with occupant safety as a core design priority.',
  },
  {
    title: 'Thermal Insulation',
    description: 'Insulated panel systems help maintain comfortable interior temperatures across a range of site conditions.',
  },
  {
    title: 'Fire Retardant',
    description: 'Materials are selected with fire safety and industrial compliance in mind.',
  },
  {
    title: 'Plug-and-Play Ready',
    description: 'Electrical, plumbing, and HVAC fixtures can be integrated at the factory stage for faster site readiness.',
  },
]

const whyChooseUs = [
  {
    title: 'Quality Assured',
    description: 'Rigorous quality checks at every stage — from fabrication and finishing to final installation.',
  },
  {
    title: 'On-Time Delivery',
    description: 'Detailed planning and coordinated execution help us maintain schedules and deliver projects on time.',
  },
  {
    title: 'Cost Optimised',
    description: 'Efficient design, material planning, and prefabrication help reduce construction time and overall project costs.',
  },
  {
    title: 'Precision Fabrication',
    description: 'Advanced factory-based fabrication ensures consistent quality, accuracy, and superior workmanship.',
  },
  {
    title: 'Sustainable construction',
    description: 'Efficient use of materials and modern construction methods help minimise waste and reduce environmental impact..',
  },
  {
    title: 'Experienced Team',
    description: 'From planning and fabrication to site erection and handover, our experienced team ensures every stage is professionally managed.',
  },
]

// Elyon's actual named clients — only real partners go here.
const trustedClients = [
  { name: 'Government of Andhra Pradesh', tag: 'Institutional Infrastructure & State Development Partner' },
  { name: 'Sreecore Building Solutions Private Limited', tag: 'Heavy Structural Fabrication & Assembly Partner' },
  { name: 'KAP (India) Projects Construction Pvt Ltd', tag: 'Major Construction & Commercial Delivery Operations Partner' },
  { name: 'Srinivasa Engineers', tag: 'Specialized Engineering & PEB Partner' },
  { name: 'SAI Associates', tag: 'Industrial & Commercial Construction Partner' }
]

// 🚀 HARDCODED PERMANENT PROJECTS
// To update a video or image, just change the URL here and save!
const featuredProjects = [
  {
    id: 1,
    title: "HOD Tower No. 1 - Labour Camp",
    location: "Amaravathi, Andhra Pradesh",
    duration: "6 WEEKS",
    images: [
    "/H1 img1.png.jpeg",
    "/H1 img2.png.jpeg",
    "/H1 img3.png.jpeg",
    ],
    description: "Turnkey Prefabricated Construction for SICSOL Projects Successfully executed modular accommodation blocks, washrooms, and mess facilities with seamless project coordination and timely on-site installation."
  },
  {
    id: 2,
    title: "HOD Tower No. 5 - Site office",
    location: "Amaravathi, Andhra Pradesh",
    duration: "3 WEEKS",
    video_url: "hero-video.mp4", // Put project1.mp4 in your 'public' folder!
    image_url: "", // Fallback if video is missing
    description: "Prefabricated Wall Paneling for Colliers International Successfully executed prefabricated wall paneling works, ensuring quality workmanship, seamless installation, and timely project completion"
  },
  {
    id: 2,
    title: "MADP Zone-7 Site Office",
    location: "Mandadam, Amaravathi",
    duration: "3 WEEKS",
    video_url: "hero-video.mp4", // Leave blank if you just want to show an image
    image_url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800",
    description: "Prefabricated Wall Paneling for L&T Successfully executed prefabricated wall paneling works with precision, quality, and timely completion, meeting project requirements and delivery schedules.."
  },
  
  {
    id: 3,
    title: "Abhee Aaria Project – Labour Camp",
    location: "Bangalore, Karnataka",
    duration: "2 WEEKS",
    video_url: "",
    images:[
      "EB1.jpeg",
      "EB2.jpeg",
      "EB8.jpeg",
      "EB9.jpeg",
      "EB10.jpeg",
      "EB11.jpeg",
      "EB12.jpeg",
      "EB14.jpeg",
    ],
    description: "Successfully executed a complete prefabricated labour camp solution, encompassing modular accommodation blocks, coordinated project execution, and efficient on-site installation, delivered within the required project timelines."
  },
  {
    id: 4,
    title: "Government Court Buildings",
    location: "Parchoor, Andhra Pradesh",
    duration: "6 WEEKS",
    video_url: "",
    images:[
      "Ap1.jpeg",
      "Ap2.jpeg",
      "Ap3.jpeg",
      "Ap4.jpeg",
      "Ap5.jpeg",
      "Ap6.jpeg",
      "Ap7.jpeg",
      "Ap8.jpeg",
      "Ap9.jpeg",
      "Ap10.jpeg",
    ],
    image_url: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800",
    description: "Court Infrastructure Project for the Government of Andhra Pradesh Successfully executed 15,901 SFT of Civil and Criminal Court facilities, encompassing structural works, wall paneling, electrical installations, and grid ceiling systems, delivered to required quality standards and project timelines"
  },

  {
    id: 5,
    title: "Kerala-Style Manduva Pent House",
    location: "Hyderabad, Telangana",
    duration: "3 WEEKS",
    video_url: "",
    images: [
    "/hyd_pent1.jpeg",
    "/hyd_pent2.jpeg",
    "/hyd_pent3.jpeg",
    "/hyd_pent4.jpeg",
    ],
    description: "A modern prefab penthouse featuring the timeless charm of traditional clay tile roofing. Durable and efficiently built, it combines authentic Kerala aesthetics with contemporary comfort.Traditional charm. Modern construction. Built to last."
  }

];

function Home({ stopAnimations }) {
  const heroVideoPath = `${import.meta.env.BASE_URL}hero-video.mp4`
  const heroVideoRef = useRef(null)
  const [hasHeroVideo, setHasHeroVideo] = useState(true)
  const [videoReady, setVideoReady] = useState(false)

  // HERO VIDEO LOGIC 
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
      
      {/* HERO SECTION */}
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
           
            <p className="hero-home-caption">
              Prefab infrastructure executed with sharper speed, site
              control, and modular delivery discipline.
            </p>
          </div>
        </div>
      </section>

      {/* CORPORATE OVERVIEW */}
      <section className="chapter chapter-overview" id="about">
        <div className="frame corporate-shell">
          <div className="corporate-copy">
            <p className="eyebrow">Corporate Overview</p>
            <h2>Innovating Construction Through Prefabrication</h2>
            <h3>END-TO-END TURNKEY SOLUTIONS</h3>
            <p className="corporate-lead">
              ELYON PREFAB PRIVATE LIMITED is a professionally managed prefabricated construction and structural solutions company based in Hyderabad, Telangana. We specialize in delivering modern, durable, cost-effective, and time-efficient construction solutions for infrastructure, industrial, commercial, institutional, and residential projects.
            </p>
            <p className="corporate-body">
              Our core strength lies in combining prefabrication technology, structural fabrication, quality materials, skilled workmanship, and project execution expertise to provide reliable construction solutions from concept to completion.
            </p>
            <p className="corporate-body">
              We undertake complete prefabricated building solutions, labour accommodation camps, site offices, PPGI sheds, structural fabrication, Aerocon wall panel installations, interior partitions, roofing systems, and turnkey construction works.
            </p>
            <Link className="section-link" to="/about" style={{ marginTop: '20px' }}>
              Know More
            </Link>
          </div>
        </div>

        <div className="stats-band" aria-label="Company highlights">
          <div className="stats-band-inner">
            {heroStats.map((stat) => (
              <div className="stat-block" key={stat.label}>
                <p className="stat-figure">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-accent">{stat.accent}</span>
                </p>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR TRUSTED CLIENTS SECTION */}
      <section className="chapter chapter-clients">
        <div className="frame">
          <div className="clients-header">
            <span className="eyebrow clients-eyebrow">Our Clients</span>
            <h2 className="clients-heading">Organizations We Serve</h2>
          </div>
        </div>

        <div className="clients-marquee" aria-label="Companies Elyon Prefab has worked with">
          <div className="clients-marquee-track">
            {[...trustedClients, ...trustedClients].map((client, index) => (
              <div className="client-pill" key={`${client.name}-${index}`}>
                <h3>{client.name}</h3>
                <p>{client.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HARDCODED STATIC PORTFOLIO */}
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
            {featuredProjects.map((project) => (
              <article key={project.id} className="project-row">
                <div className="project-row-head">
                  <div>
                    <p className="project-location">{project.location}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <span className="project-badge">{project.duration}</span>
                </div>

                <div className="project-row-body">
                  {/* Smart Media Renderer checks for video, falls back to carousel */}
                  {project.video_url ? (
                    <video
                      src={project.video_url}
                      autoPlay loop muted playsInline
                      className="project-media-video"
                    />
                  ) : (
                    <ImageCarousel images={project.images || (project.image_url ? [project.image_url] : [])} />
                  )}

                  <div className="project-meta">
                    <span>Execution Overview</span>
                    <p>{project.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CRM LEAD FORM */}
      {/* THE PROCESS */}
      <section className="chapter chapter-process">
        <div className="frame">
          <div className="process-header">
            <span className="eyebrow">The Process</span>
            <h2>From Enquiry to Handover</h2>
            <p className="process-intro">
              A milestone-based process built for predictability — one point
              of contact from your first enquiry through final handover.
            </p>
          </div>

          <div className="process-grid">
            {processSteps.map((step) => (
              <div className="process-card" key={step.number}>
                <span className="process-number">{step.number}</span>
                <p className="process-stage">{step.stage}</p>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
 
          <div className="process-cta">
            <div>
              <h3>Ready to Get start?</h3>
              <p>Free consultation. Quote within 24 hours. Project kickoff within a week.</p>
            </div>
            <a className="primary-link" href="#contact">
              Start Your Project Today
              <span aria-hidden="true">{'->'}</span>
            </a>
          </div>
        </div>
      </section>

      {/* ENGINEERING STANDARDS */}
      
      {/* WHY CHOOSE US */}
      <section className="chapter chapter-why-us">
        <div className="frame">
          <div className="why-us-header">
            <span className="eyebrow">Why Choose Us</span>
            <h2>Built on Trust. Delivered with Precision.</h2>
            <p className="why-us-intro">
              We combine engineering expertise, controlled fabrication, and disciplined project execution to deliver structures that meet the highest standards of quality, performance, and reliability.
            </p>
          </div>

          <div className="elyon-why-layout">

            {/* FIRST ROW - 3 CARDS */}
            <div className="elyon-why-row">
              {whyChooseUs.slice(0, 3).map((item) => (
                <div className="why-us-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>

            {/* SECOND ROW - 3 CARDS */}
            <div className="elyon-why-row">
              {whyChooseUs.slice(3, 6).map((item) => (
                <div className="why-us-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <section className="chapter chapter-contact" id="contact">
        <div className="frame contact-layout">
          <div className="contact-copy">
            <p className="eyebrow">Get In Touch</p>
            <h2>Let&apos;s Build Your Project Better.</h2>
            <p className="contact-intro">
              Elyon Prefab Pvt Ltd welcomes 
              From site offices and officer camps to labour accommodations, security cabins, storage blocks, kitchens, mess facilities, and complete site infrastructure, Elyon Prefab Pvt Ltd delivers end-to-end prefabricated solutions for infrastructure, industrial, irrigation, mining, high-rise, and commercial projects.
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
              <Link to="/admin">Open admin dashboard</Link>
            </p>
          </div>

          <QuoteForm />

        </div>
      </section>
    </main>
  )
}

export default Home