import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import QuoteForm from './components/QuoteForm';

// This acts as our temporary database for product content
// The official 15-product catalog for Elyon Prefab
const productsDatabase = {
  "labour-accommodation": {
    title: "Prefabricated Labour Accommodation",
    heroText: "Secure, scalable housing for large workforces on remote or fast-moving sites.",
    image: "https://images.unsplash.com/photo-1541888081622-0248810c9c10?q=80&w=1200",
    whatIsIt: "Provide safe, hygienic, and comfortable living quarters for your workforce with our modular labour accommodations. Designed for heavy industrial camps, mining sites, and large-scale construction projects, these multi-tier structures are built to maximize space efficiency while adhering to strict safety and welfare regulations.",
    benefits: [
      { title: "Scalable Design", desc: "Easily add more modules as your workforce expands." },
      { title: "Hygienic Surfaces", desc: "Built with materials that are easy to clean and maintain." },
      { title: "Fire Retardant", desc: "Constructed using fire-safe panels for maximum camp security." },
      { title: "Cost-Effective", desc: "Reduces long-term housing costs for multi-year projects." }
    ]
  },
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
  "officers-quarters": {
    title: "Prefabricated Officers' Quarters",
    heroText: "Private, premium-finish living units for site management and supervisory staff.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
    whatIsIt: "Separate from general workforce housing, our Officers' Quarters give supervisors and management staff private, comfortable living spaces on long-duration projects. Each unit is factory-finished with premium interior paneling, dedicated wet areas, and can be configured as standalone cabins or attached suites.",
    benefits: [
      { title: "Executive-Grade Finish", desc: "Upgraded interior paneling, flooring, and fixtures compared to standard housing." },
      { title: "Private Layouts", desc: "Individual or attached-suite configurations for supervisory staff." },
      { title: "Fully Furnished Option", desc: "Can be delivered ready-to-occupy with furniture and fittings." },
      { title: "Climate Controlled", desc: "Insulated panels support AC installation for year-round comfort." }
    ]
  },
  "mess-block": {
    title: "Prefabricated Mess Blocks",
    heroText: "Large-span dining and kitchen facilities for high-volume site catering.",
    image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?q=80&w=1200",
    whatIsIt: "Feeding a large workforce requires infrastructure that can keep pace. Our prefabricated mess blocks combine clear-span dining halls with kitchen-ready utility zones, built with hygienic, easy-to-clean surfaces that meet food-safety and site-welfare requirements.",
    benefits: [
      { title: "Large Clear-Span Seating", desc: "Open-plan dining halls that scale to your workforce size." },
      { title: "Hygienic Finishes", desc: "Washable wall and floor surfaces built for daily food-service use." },
      { title: "Kitchen-Ready Utilities", desc: "Pre-planned zones for cooking equipment, water, and drainage lines." },
      { title: "Ventilated Design", desc: "Exhaust and airflow planning keeps kitchen zones comfortable and compliant." }
    ]
  },
  "security-block": {
    title: "Prefabricated Security Blocks",
    heroText: "Rugged guard rooms and cabins for site entry and perimeter control.",
    image: "https://images.unsplash.com/photo-1517488629731-e229e4f65b26?q=80&w=1200",
    whatIsIt: "Positioned at gates, checkpoints, and perimeter zones, our prefabricated security blocks give personnel a weatherproof, all-visibility post for round-the-clock site monitoring. Units are built for durability and can be fitted with communication and surveillance equipment.",
    benefits: [
      { title: "360° Visibility", desc: "Multi-window configurations for clear sightlines over entry points." },
      { title: "Weatherproof Shell", desc: "Insulated panels keep personnel comfortable in all conditions." },
      { title: "Quick Placement", desc: "Delivered ready to position at any checkpoint or perimeter zone." },
      { title: "Equipment-Ready", desc: "Pre-wired for CCTV, communication, and access-control systems." }
    ]
  },
  "prefab-toilet": {
    title: "Prefabricated Toilet Blocks",
    heroText: "Hygienic, plug-and-play sanitation blocks built for heavy daily use.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200",
    whatIsIt: "Maintain high welfare standards on your site with our prefabricated ablution blocks. Fully plumbed, wired, and finished at the factory, these durable units range from single VIP stalls to massive multi-user workforce washrooms. Just connect them to your site's water and waste lines.",
    benefits: [
      { title: "Plug-and-Play", desc: "Pre-plumbed for immediate connection to site utilities." },
      { title: "Ultra-Hygienic", desc: "Finished with waterproof, easily sanitized industrial materials." },
      { title: "Heavy-Duty Fixtures", desc: "Fitted with vandal-resistant steel or commercial-grade ceramics." },
      { title: "Proper Ventilation", desc: "Built-in exhaust systems maintain a clean, odor-free environment." }
    ]
  },
  "storage-warehouse-block": {
    title: "Prefabricated Storage & Warehouse Blocks",
    heroText: "Clear-span steel structures for material storage and light warehousing.",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200",
    whatIsIt: "Our prefabricated storage and warehouse blocks provide secure, weatherproof cover for materials, tools, and inventory. Configurable spans and heights make them suitable for anything from a site tool store to a full bulk-material warehouse, with layouts ready for racking and load-in/load-out access.",
    benefits: [
      { title: "Large Clear-Span Capacity", desc: "Unobstructed floor area for flexible storage and racking layouts." },
      { title: "Weatherproof Roofing", desc: "Sealed roof and wall systems protect materials from the elements." },
      { title: "Racking-Ready Layout", desc: "Designed to accommodate standard shelving and pallet systems." },
      { title: "Fast Erection", desc: "Bolted steel assembly gets storage capacity online in days." }
    ]
  },
  "ppgi-shed": {
    title: "PPGI Sheds",
    heroText: "Pre-painted galvanized iron sheds for durable industrial cover.",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?q=80&w=1200",
    whatIsIt: "Built with pre-painted galvanized iron (PPGI) roofing and cladding, our sheds provide long-lasting, corrosion-resistant cover for workshops, parking, loading bays, and general industrial use. The steel frame and sheeting combination is engineered for harsh outdoor exposure with minimal upkeep.",
    benefits: [
      { title: "Corrosion-Resistant Sheeting", desc: "PPGI cladding withstands humidity, rain, and coastal exposure." },
      { title: "Long-Span Steel Frames", desc: "Wide clear spans suit workshops, parking, and loading areas." },
      { title: "Low Maintenance", desc: "Pre-finished coating means no repainting or rust treatment cycles." },
      { title: "Fast Installation", desc: "Prefabricated trusses and sheeting bolt together on-site quickly." }
    ]
  },
  "gi-sheet-barricading": {
    title: "GI Sheet Site Barricading",
    heroText: "Galvanized iron perimeter barricading for site safety and security.",
    image: "https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=1200",
    whatIsIt: "Our GI sheet barricading systems secure construction site perimeters, keeping the public safe and unauthorized entry out. Panels are galvanized for rust resistance and can be rapidly deployed and reconfigured as site boundaries change through project phases.",
    benefits: [
      { title: "Meets Safety Compliance", desc: "Built to satisfy statutory site-safety and public-protection norms." },
      { title: "Fast Perimeter Coverage", desc: "Modular panels cover large boundaries quickly." },
      { title: "Rust Resistant", desc: "Galvanized coating holds up through multi-year project durations." },
      { title: "Reusable Panels", desc: "Panels can be relocated and reconfigured as the site evolves." }
    ]
  },
  "prefab-school": {
    title: "Prefabricated School Buildings",
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
  "fire-exit-ramp": {
    title: "Fire Exit Ramps & Access Structures",
    heroText: "Code-compliant, rapid-install emergency egress and access systems.",
    image: "https://images.unsplash.com/photo-1520625447781-6f4614a51187?q=80&w=1200",
    whatIsIt: "Safety cannot wait. Our prefabricated steel fire exit ramps, stairways, and access structures are designed to meet all national safety and accessibility codes. Manufactured off-site and bolted into place, they provide immediate, secure evacuation and access routes for multi-story site offices or permanent buildings.",
    benefits: [
      { title: "Code Compliant", desc: "Engineered to strict safety, load, and accessibility standards." },
      { title: "Anti-Slip Surfaces", desc: "Tread patterns designed for maximum grip in all weather conditions." },
      { title: "Fast Installation", desc: "Bolted assembly prevents hot-works (welding) hazards on site." },
      { title: "Corrosion Resistant", desc: "Hot-dip galvanized steel ensures decades of rust-free safety." }
    ]
  },
  "mezzanine-flooring": {
    title: "Mezzanine Flooring Systems",
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
  "resort-block": {
    title: "Prefabricated Resort Blocks",
    heroText: "Modular guest cottages and villas for hospitality developments.",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200",
    whatIsIt: "Designed for hospitality projects, our prefabricated resort blocks combine fast, factory-led construction with premium architectural finishes. Ideal for guest cottages, villas, and staff accommodation, these units let resort operators scale up room inventory without long conventional build timelines.",
    benefits: [
      { title: "Premium Aesthetic Finishes", desc: "Architectural detailing suited to guest-facing hospitality spaces." },
      { title: "Fast Multi-Unit Rollout", desc: "Deploy an entire block of guest units in a fraction of conventional build time." },
      { title: "Customizable Layouts", desc: "Configure room sizes, verandas, and interiors to your brand standard." },
      { title: "Weather-Sealed Build", desc: "Engineered for coastal, hill, and outdoor resort environments." }
    ]
  },
  "farmhouse": {
    title: "Prefabricated Farmhouses",
    heroText: "Durable standalone modular homes for rural and agricultural plots.",
    image: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?q=80&w=1200",
    whatIsIt: "Our prefabricated farmhouses bring fast, factory-built construction to rural and agricultural land. Engineered to handle remote-site logistics and variable terrain, these standalone homes are built for durability while offering the customization of a conventional house.",
    benefits: [
      { title: "Remote-Site Deployable", desc: "Engineered for delivery and assembly on rural and hard-to-access plots." },
      { title: "Durable Steel-Frame Build", desc: "Structural framing designed to withstand rural weather conditions." },
      { title: "Customizable Interiors", desc: "Layouts and finishes adaptable to family or farm-operation needs." },
      { title: "Low-Maintenance Exterior", desc: "Weather-resistant cladding reduces long-term upkeep." }
    ]
  },
  "kerala-manduva-penthouse": {
    title: "Kerala Manduva-Style Prefabricated Pent Houses",
    heroText: "Traditional courtyard-inspired pent houses, built with modern prefab speed.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200",
    whatIsIt: "Inspired by Kerala's traditional Nalukettu/Manduva courtyard architecture, these prefabricated pent houses bring a regional heritage aesthetic to modern modular construction. Sloped roofs, courtyard-style layouts, and natural detailing are reimagined in a fast-build prefab system.",
    benefits: [
      { title: "Courtyard-Inspired Design", desc: "Traditional Manduva layout principles adapted to a modular build." },
      { title: "Sloped Roof Detailing", desc: "Authentic regional roofline finished with modern weatherproofing." },
      { title: "Fast Prefab Assembly", desc: "Heritage-style architecture delivered in a fraction of traditional build time." },
      { title: "Regional Aesthetic Appeal", desc: "A distinctive look for clients wanting traditional Kerala character." }
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