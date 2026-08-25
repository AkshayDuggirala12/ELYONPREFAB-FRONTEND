import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import QuoteForm from './components/QuoteForm';

// This acts as our temporary database for product content
// The complete database for Elyon Prefab's product catalog
const productsDatabase = {
  "site-office": {
    title: "Prefabricated Site Offices",
    heroText: "Quick-deploy, climate-controlled workspaces for your site engineers.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200",
    whatIsIt: "Our prefabricated site offices provide instant, professional administration spaces right at your construction or industrial site. Engineered for rapid deployment, these units are structurally robust, fully insulated, and can be customized with internal partitions, electrical fittings, and HVAC systems. They eliminate the delays of civil construction, allowing your project management teams to start working immediately.",
    benefits: [
      { title: "Rapid Deployment", desc: "Manufactured off-site and assembled in days, not months." },
      { title: "Weather & Sound Proof", desc: "High-density insulation keeps the interior quiet and temperature-controlled." },
      { title: "Fully Relocatable", desc: "Easily dismantle and move the office to your next project site." },
      { title: "Turnkey Solution", desc: "Comes pre-fitted with electrical wiring, lighting, and plumbing if required." }
    ]
  },
  "labour-accommodation": {
    title: "Labour Accommodation",
    heroText: "Secure, scalable housing for large workforces.",
    image: "https://images.unsplash.com/photo-1541888081622-0248810c9c10?q=80&w=1200",
    whatIsIt: "Provide safe, hygienic, and comfortable living quarters for your workforce with our modular labour accommodations. Designed for heavy industrial camps, mining sites, and large-scale construction projects, these multi-tier structures are built to maximize space efficiency while adhering to strict safety and welfare regulations.",
    benefits: [
      { title: "Scalable Design", desc: "Easily add more modules as your workforce expands." },
      { title: "Hygienic Surfaces", desc: "Built with materials that are easy to clean and maintain." },
      { title: "Fire Retardant", desc: "Constructed using fire-safe panels for maximum camp security." },
      { title: "Cost-Effective", desc: "Reduces long-term housing costs for multi-year projects." }
    ]
  },
  "prefab-labour-accommodation": {
    title: "Pre Fab Labour Accommodation",
    heroText: "Engineered modular living quarters for remote site deployment.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1200",
    whatIsIt: "Our pure-prefab labour accommodations are flat-packed and shipped directly to remote or difficult-to-access sites. Because every component is precision-engineered in our factory, on-site erection requires minimal heavy machinery and zero wet-work, ensuring your workforce has shelter in record time.",
    benefits: [
      { title: "Flat-Pack Shipping", desc: "Highly efficient logistics for remote project locations." },
      { title: "Zero Wet-Work", desc: "No concrete curing times required; instant assembly." },
      { title: "High Durability", desc: "Engineered steel frames withstand harsh weather conditions." },
      { title: "Easy Maintenance", desc: "Standardized parts make repairs and upgrades incredibly simple." }
    ]
  },
  "room-house": {
    title: "Prefab Room Houses",
    heroText: "Compact, standalone modular living units.",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1200",
    whatIsIt: "The Elyon Prefab Room House is a self-contained, versatile modular unit. Perfect for security outposts, individual executive housing, or small remote teams. Each unit is completely pre-finished in our facility and drops onto your site ready for immediate utility connection and move-in.",
    benefits: [
      { title: "Drop-and-Go", desc: "Arrives 100% finished. Just connect power and water." },
      { title: "Compact Footprint", desc: "Ideal for sites with severe space restrictions." },
      { title: "Premium Finish", desc: "Executive-grade interior paneling and flooring options." },
      { title: "High Resale Value", desc: "Easily sold and relocated after project completion." }
    ]
  },
  "site-engineer-4-floor": {
    title: "Site Engineer - 4 Floor",
    heroText: "Multi-level command centers for major infrastructure projects.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
    whatIsIt: "When space is at a premium and your engineering team is large, our 4-story prefabricated office blocks are the ultimate solution. Engineered with heavy-duty structural steel to safely support multi-level loads, these buildings feature integrated stairwells, multi-zone HVAC, and specialized technical rooms for project planning and execution.",
    benefits: [
      { title: "Vertical Efficiency", desc: "Maximize your operational space on tight construction sites." },
      { title: "Heavy-Duty Steel", desc: "Structural integrity engineered specifically for 4-story loads." },
      { title: "Zoned Layouts", desc: "Dedicated floors for management, engineering, and meeting rooms." },
      { title: "Safety Compliant", desc: "Built with integrated fire-escapes and emergency protocols." }
    ]
  },
  "prefab-school": {
    title: "Pre Fab Schools",
    heroText: "Safe, inspiring, and rapidly deployed educational infrastructure.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200",
    whatIsIt: "Elyon Prefab schools provide high-quality learning environments in a fraction of the time of conventional builds. Our modular classrooms are designed with acoustics, natural lighting, and child safety in mind. Perfect for government initiatives, growing municipalities, or temporary campus expansions.",
    benefits: [
      { title: "Fast-Track Delivery", desc: "Have a fully operational school ready before the next term." },
      { title: "Acoustic Control", desc: "Specialized wall panels reduce noise transfer between classrooms." },
      { title: "Child-Safe Materials", desc: "Non-toxic, fire-retardant finishes used throughout." },
      { title: "Customizable Campuses", desc: "Add laboratories, cafeterias, and staff rooms seamlessly." }
    ]
  },
  "internal-partition": {
    title: "Internal Partitions",
    heroText: "Flexible space division for commercial and industrial facilities.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200",
    whatIsIt: "Transform large, open-plan warehouses or offices with our modular internal partition systems. These lightweight, insulated panels lock together quickly to create separate offices, clean rooms, or storage areas without the mess and disruption of drywall construction.",
    benefits: [
      { title: "Dust-Free Installation", desc: "Zero drywall dust means your facility stays operational." },
      { title: "Reconfigurable", desc: "Easily move walls as your business needs change." },
      { title: "Thermal Insulation", desc: "Create climate-controlled zones within larger warehouses." },
      { title: "Clean Aesthetic", desc: "Seamless joints and professional factory finishes." }
    ]
  },
  "prefab-partition": {
    title: "Prefab Partitions",
    heroText: "Heavy-duty modular walls for rigorous environments.",
    image: "https://images.unsplash.com/photo-1565626424178-01977cc9a7a6?q=80&w=1200",
    whatIsIt: "Designed for industrial applications, our heavy-duty prefab partitions are built to withstand impacts, dampen heavy machinery noise, and provide rigid fire barriers. Ideal for separating manufacturing zones, creating secure tool cribs, or isolating hazardous materials.",
    benefits: [
      { title: "Impact Resistant", desc: "Tough steel skins designed for warehouse and factory wear." },
      { title: "Fire Rated", desc: "Core materials formulated to meet strict industrial fire codes." },
      { title: "Acoustic Dampening", desc: "Significantly reduces noise pollution from shop floors." },
      { title: "Rapid Zoning", desc: "Divide massive industrial spaces in a matter of days." }
    ]
  },
  "mezzanine-flooring": {
    title: "Mezzanine Flooring",
    heroText: "Multiply your usable floor space without moving facilities.",
    image: "https://images.unsplash.com/photo-1587293852726-591db31632ee?q=80&w=1200",
    whatIsIt: "Unlock the vertical potential of your warehouse with Elyon's structural steel mezzanine systems. Custom-engineered to your exact load requirements, our mezzanines create an entirely new level for storage, elevated offices, or additional production lines.",
    benefits: [
      { title: "Double Your Space", desc: "Capitalize on unused vertical clearance in your facility." },
      { title: "Custom Load Ratings", desc: "Engineered to support everything from foot traffic to heavy machinery." },
      { title: "Non-Disruptive Build", desc: "Prefabricated steel components bolt together quickly on-site." },
      { title: "Integrated Systems", desc: "Can be fitted with custom stairs, handrails, and loading gates." }
    ]
  },
  "precast-ms-block": {
    title: "Precast M&S Blocks",
    heroText: "Solid, dependable foundations and modular structural blocks.",
    image: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?q=80&w=1200",
    whatIsIt: "Our Precast M&S (Mild Steel integrated) blocks combine the compressive strength of precast concrete with the tensile strength of integrated steel nodes. These are used for rapid foundation deployment, retaining walls, or heavy-duty modular assembly where extreme structural rigidity is required.",
    benefits: [
      { title: "Instant Foundations", desc: "Skip the concrete pouring and curing phase on your site." },
      { title: "Precision Engineering", desc: "Cast in controlled factory environments for exact tolerances." },
      { title: "Heavy Load Bearing", desc: "Ideal for industrial equipment mounts and structural bases." },
      { title: "Weather Independent", desc: "Installation can proceed in rain or freezing temperatures." }
    ]
  },
  "fire-exit-ramp": {
    title: "Fire Exit Ramps",
    heroText: "Code-compliant, rapid-install emergency egress systems.",
    image: "https://images.unsplash.com/photo-1520625447781-6f4614a51187?q=80&w=1200",
    whatIsIt: "Safety cannot wait. Our prefabricated steel fire exit ramps and stairways are designed to meet all national safety and accessibility codes. Manufactured off-site and bolted into place, they provide immediate, secure evacuation routes for multi-story site offices or permanent buildings.",
    benefits: [
      { title: "Code Compliant", desc: "Engineered to strict safety, load, and accessibility standards." },
      { title: "Anti-Slip Surfaces", desc: "Tread patterns designed for maximum grip in all weather conditions." },
      { title: "Fast Installation", desc: "Bolted assembly prevents hot-works (welding) hazards on site." },
      { title: "Corrosion Resistant", desc: "Hot-dip galvanized steel ensures decades of rust-free safety." }
    ]
  },
  "prefab-toilet": {
    title: "Pre Fab Toilets",
    heroText: "Hygienic, plug-and-play sanitation blocks.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200",
    whatIsIt: "Maintain high welfare standards on your site with our prefabricated ablution blocks. Fully plumbed, wired, and finished at the factory, these durable units range from single VIP stalls to massive multi-user workforce washrooms. Just connect them to your site's water and waste lines.",
    benefits: [
      { title: "Plug-and-Play", desc: "Pre-plumbed for immediate connection to site utilities." },
      { title: "Ultra-Hygienic", desc: "Finished with waterproof, easily sanitized industrial materials." },
      { title: "Heavy-Duty Fixtures", desc: "Fitted with vandal-resistant steel or commercial-grade ceramics." },
      { title: "Proper Ventilation", desc: "Built-in exhaust systems maintain a clean, odor-free environment." }
    ]
  },
  "prefab-products": {
    title: "Custom Pre Fab Products",
    heroText: "Tailored modular solutions for unique infrastructure challenges.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356f58?q=80&w=1200",
    whatIsIt: "Don't see exactly what you need? Elyon Prefab operates a full-scale design and fabrication facility capable of producing custom modular units. From specialized security cabins and toll booths to customized equipment enclosures and hazardous material storage, we engineer solutions to fit your exact specifications.",
    benefits: [
      { title: "Bespoke Engineering", desc: "Our in-house design team turns your specific requirements into blueprints." },
      { title: "Flexible Dimensions", desc: "Built to fit the exact footprint and height restrictions of your site." },
      { title: "Specialized Integration", desc: "We can pre-install your specific machinery or tech hardware." },
      { title: "Consistent Quality", desc: "Enjoy the same rigorous QA/QC process applied to all our major structures." }
    ]
  }
};
const ProductPage = () => {
  // Grab the product ID from the URL (e.g., "site-office")
  const { productId } = useParams();

  // Find the matching product in our database
  const product = productsDatabase[productId];

  // If the user types a random URL, send them back home
  if (!product) {
    return <Navigate to="/" />;
  }

  return (
    <div style={{ backgroundColor: '#0a1017', color: '#fff', paddingTop: '120px', paddingBottom: '80px', fontFamily: 'sans-serif' }}>

      {/* HERO SECTION */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ color: '#f2b84b', fontSize: '3rem', marginBottom: '15px' }}>{product.title}</h1>
        <p style={{ color: '#8f9bb3', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>{product.heroText}</p>
      </div>

      {/* IMAGE & "WHAT IS IT" SECTION */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center', marginBottom: '80px' }}>

        {/* Added a backgroundColor fallback just in case the Unsplash image fails to load */}
        <div style={{ backgroundImage: `url(${product.image})`, backgroundColor: '#1c2b3a', backgroundSize: 'cover', backgroundPosition: 'center', height: '400px', borderRadius: '12px' }}></div>

        <div>
          <h4 style={{ color: '#d4891a', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '10px' }}>What is it?</h4>

          {/* Added color: '#fff' right here so the heading doesn't use the dark global CSS! */}
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#fff' }}>{product.title}</h2>

          <p style={{ color: '#8f9bb3', lineHeight: '1.8', fontSize: '1.1rem' }}>{product.whatIsIt}</p>
        </div>
      </div>

      {/* KEY BENEFITS SECTION */}
      <div style={{ backgroundColor: '#1c2b3a', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
             <h4 style={{ color: '#d4891a', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '10px' }}>Key Benefits</h4>
             <h2 style={{ fontSize: '2.5rem', margin: 0 }}>Stronger by Design. Smarter by Choice.</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
            {product.benefits.map((benefit, index) => (
              <div key={index} style={{ backgroundColor: '#0f171f', padding: '30px', borderRadius: '8px', border: '1px solid #2e4259' }}>
                <h3 style={{ color: '#f2b84b', marginBottom: '15px', fontSize: '1.2rem' }}>{benefit.title}</h3>
                <p style={{ color: '#8f9bb3', lineHeight: '1.6', fontSize: '0.95rem' }}>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* GET IN TOUCH SECTION */}
      <section className="chapter chapter-contact" id="contact" style={{ marginTop: '40px' }}>
        <div className="frame contact-layout">
          <div className="contact-copy">
            <p className="eyebrow">Get In Touch</p>
            <h2>Let's build something extraordinary together.</h2>
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

    </div>
  );
};

export default ProductPage;