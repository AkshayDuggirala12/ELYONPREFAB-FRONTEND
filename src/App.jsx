import { useEffect, useState } from 'react'
import AdminDashboard from './AdminDashboard'
import elyonLogo from './assets/elyon-logo.png'
import './index.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Home from './Home';
import ProductPage from './ProductPage';
import AboutUs from './AboutUs';
import Careers from './Careers';
import Footer from './components/Footer';



const services = [
  {
    title: 'Prefabricated Buildings',
    description:
      'Modular building systems designed for fast installation, reliable durability, and clean site execution.',
  },
  {
    title: 'Prefabricated Site Offices',
    description:
      'Professional office facilities for project teams, site management, and client-facing operations.',
  },
  {
    title: 'Labour Accommodation Blocks',
    description:
      'Workforce housing blocks with supporting washrooms and kitchen facilities built for demanding project conditions.',
  },
  {
    title: 'Steel Structure Fabrication',
    description:
      'Custom structural fabrication and installation for industrial, commercial, and institutional applications.',
  },
  {
    title: 'Turnkey Prefab Construction',
    description:
      'Coordinated delivery from planning and fabrication through assembly, inspection, and handover.',
  },
  {
    title: 'Pan India Execution',
    description:
      'Scalable deployment capability for infrastructure projects that need disciplined delivery across multiple states.',
  },
]

const stories = [
  {
    category: 'Project Story',
    title: 'Fast-track labour accommodation for major infrastructure work.',
    description:
      'Elyon coordinated modular accommodation blocks, washrooms, and kitchen support to help large project teams mobilize faster.',
  },
  {
    category: 'Execution Story',
    title: 'Site offices delivered with cleaner sequencing and faster setup.',
    description:
      'Prefabricated office facilities reduced site disruption and gave project teams a ready operating base within tight timelines.',
  },
  {
    category: 'Capability Story',
    title: 'Turnkey prefab delivery shaped around control from fabrication to handover.',
    description:
      'Our model combines fabrication planning, steel works, on-site assembly, and final handover under one execution rhythm.',
  },
]

const sustainabilityPillars = [
  {
    title: 'Lower site disruption',
    description:
      'Factory-led preparation shortens high-friction site activity and helps teams maintain cleaner execution zones.',
  },
  {
    title: 'Controlled material use',
    description:
      'Measured fabrication and coordinated procurement reduce waste and support more predictable material planning.',
  },
  {
    title: 'Faster project readiness',
    description:
      'Prefab systems help clients activate offices, housing blocks, and support facilities without waiting on long conventional build cycles.',
  },
]

const projects = [
  {
    name: 'HOD Tower No. 5 - Labour Accommodation',
    location: 'Amaravathi, Andhra Pradesh',
    badge: 'Labour infrastructure',
    client: 'SICSOL Projects and Shapoorji Pallonji',
    executedUnder: 'Sreecore Building Solutions Pvt Ltd',
    area: '11,384 SFT',
    scope: [
      'Block A labour accommodation - 4,800 SFT',
      'Block B labour accommodation - 4,800 SFT',
      '24 washrooms - 384 SFT',
      'Kitchen block - 1,400 SFT',
    ],
  },
  {
    name: 'HOD Tower No. 2 - Office Block',
    location: 'Amaravathi, Andhra Pradesh',
    badge: 'Office infrastructure',
    client: 'Coilers International',
    executedUnder: 'Sai Associates',
    area: '4,544 SFT',
    scope: [
      'Prefabricated office block construction - 4,544 SFT',
      'Full structural assembly and installation',
      'Interior finishing and handover',
    ],
  },
  {
    name: 'Amaravathi Development Project - MADP Zone-7',
    location: 'Mandadam, Amaravathi',
    badge: 'Site office facility',
    client: 'CRDA and Larsen and Toubro Infrastructure Projects',
    executedUnder: 'Raghu Rama Industries (NKI Site Office)',
    area: '1,700 SFT',
    scope: [
      '1,700 SFT modular site office facility',
      'Delivered for the CRDA Amaravathi development project',
      'Completed within the L&T infrastructure framework',
    ],
  },
  {
    name: 'Government Court Buildings (Lease)',
    location: 'Parchoor, Andhra Pradesh',
    badge: 'Institutional infrastructure',
    client: 'Government of Andhra Pradesh',
    executedUnder: 'Sri Siva Rama Krishna Cotton and Ginning Mills Pvt Ltd',
    area: '15,901 SFT',
    scope: [
      'Criminal Court Building - 9,616.75 SFT',
      'Civil Court Building - 6,284.85 SFT',
      'Government-grade institutional construction delivery',
    ],
  },
]

const strengths = [
  {
    title: 'Experienced project execution team',
    description:
      'Seasoned professionals with hands-on expertise in prefabricated and modular construction across industrial and government sectors.',
  },
  {
    title: 'Fast-track project delivery',
    description:
      'Prefabricated systems reduce on-site construction time and help clients move with sharper commercial certainty.',
  },
  {
    title: 'Multi-block infrastructure capability',
    description:
      'Proven ability to coordinate and deliver complex infrastructure packages with parallel scopes and clean sequencing.',
  },
  {
    title: 'Safety and quality standards',
    description:
      'Every project is executed with strict site discipline, quality checks, and milestone-by-milestone accountability.',
  },
  {
    title: 'Cost-efficient construction methods',
    description:
      'Optimized materials, efficient workforce deployment, and prefab-led planning keep projects commercially controlled.',
  },
  {
    title: 'Government project experience',
    description:
      'Demonstrated delivery on institutional infrastructure with the process rigor expected in public-sector work.',
  },
]

const executionSteps = [
  {
    title: 'Planning and design coordination',
    description:
      'We define scope, align drawings, and sequence fabrication around site realities before execution starts.',
  },
  {
    title: 'Fabrication and procurement',
    description:
      'Materials are coordinated early and components are fabricated with quality-led production controls.',
  },
  {
    title: 'On-site installation',
    description:
      'Experienced teams handle assembly, fit-out, and installation with close attention to safety and speed.',
  },
  {
    title: 'Inspection and handover',
    description:
      'Each milestone is reviewed carefully so the finished structure is ready for confident client handover.',
  },
]

const sectors = [
  'Infrastructure developers',
  'EPC contractors',
  'Industrial manufacturers',
  'Government departments',
  'Construction contractors',
]

const credentials = [
  'Incorporation certificate',
  'GST registration',
  'PAN card',
  'Tax invoices',
  'Project portfolio',
  'Technical and financial credentials',
]

const primaryNavLinks = [
  { label: 'Home', href: '/' },

  // Products keeps its mega-menu because you actually have 15 different product pages!
  { label: 'Products', href: '#contact', menuId: 'products' },

  { label: 'Projects', href: '/#projects' },

  // Removed the menuId! Now it's just a direct link.
  { label: 'Careers', href: '/careers' },

  // Removed the menuId! Now it's just a direct link.
  { label: 'About Us', href: '/about' },
]

const utilityNavLinks = [
  { label: 'Contact Us', href: '#contact' },
]

const defaultAccessibilitySettings = {
  largerText: false,
  biggerCursor: false,
  tooltips: false,
  lineSpacing: false,
  hideMedia: false,
  readableFont: false,
  dyslexicFont: false,
  bionicReading: false,
  stopAnimations: false,
  invertColors: false,
  brightness: false,
  highContrast: false,
  saturation: false,
  readingLine: false,
  highlightLinks: false,
  readPage: false,
  readingMask: false,
  pageStructure: false,
}

const accessibilitySections = [
  {
    title: 'Content',
    options: [
      {
        key: 'largerText',
        label: 'Bigger Text',
        icon: 'largerText',
      },
      {
        key: 'biggerCursor',
        label: 'Bigger Cursor',
        icon: 'biggerCursor',
      },
      {
        key: 'tooltips',
        label: 'Tooltips',
        icon: 'tooltips',
      },
      {
        key: 'lineSpacing',
        label: 'Line Height',
        icon: 'lineSpacing',
      },
      {
        key: 'hideMedia',
        label: 'Hide Images',
        icon: 'hideMedia',
      },
      {
        key: 'readableFont',
        label: 'Readable Fonts',
        icon: 'readableFont',
      },
      {
        key: 'dyslexicFont',
        label: 'Dyslexic Font',
        icon: 'dyslexicFont',
      },
      {
        key: 'bionicReading',
        label: 'Bionic Reading',
        icon: 'bionicReading',
        disabled: true,
      },
      {
        key: 'stopAnimations',
        label: 'Stop Animations',
        icon: 'stopAnimations',
      },
    ],
  },
  {
    title: 'Colors',
    options: [
      {
        key: 'invertColors',
        label: 'Invert Colors',
        icon: 'invertColors',
      },
      {
        key: 'brightness',
        label: 'Brightness',
        icon: 'brightness',
      },
      {
        key: 'highContrast',
        label: 'Contrast',
        icon: 'highContrast',
      },
      {
        key: 'saturation',
        label: 'Saturation',
        icon: 'saturation',
      },
    ],
  },
  {
    title: 'Navigation',
    options: [
      {
        key: 'readingLine',
        label: 'Reading Line',
        icon: 'readingLine',
      },
      {
        key: 'highlightLinks',
        label: 'Highlight Links',
        icon: 'highlightLinks',
      },
      {
        key: 'readPage',
        label: 'Read Page',
        icon: 'readPage',
      },
      {
        key: 'readingMask',
        label: 'Reading Mask',
        icon: 'readingMask',
      },
      {
        key: 'pageStructure',
        label: 'Page Structure',
        icon: 'pageStructure',
      },
    ],
  },
]

const accessibilityColorFilters = [
  {
    key: 'grayscale',
    label: 'Grayscale',
    swatch: 'grayscale',
  },
  {
    key: 'redGreen',
    label: 'Red/Green',
    swatch: 'redGreen',
  },
  {
    key: 'blueYellow',
    label: 'Blue/Yellow',
    swatch: 'blueYellow',
  },
  {
    key: 'greenRed',
    label: 'Green/Red',
    swatch: 'greenRed',
  },
]

const pageStructureLinks = [
  {
    href: '#top',
    label: 'Top of page',
  },
  {
    href: '#about',
    label: 'Corporate Overview',
  },
  {
    href: '#businesses',
    label: 'Businesses',
  },
  {
    href: '#sustainability',
    label: 'Sustainability',
  },
  {
    href: '#projects',
    label: 'Projects',
  },
  {
    href: '#stories',
    label: 'News & Stories',
  },
  {
    href: '#investors',
    label: 'Investors & Credentials',
  },
  {
    href: '#contact',
    label: 'Get In Touch',
  },
  {
    href: '#accessibility-statement',
    label: 'Accessibility Statement',
  },
]

const megaMenus = {
  products: {
    groups: [
      {
        title: 'Living & Workspaces',
        columns: [
          [
            { label: 'Labour Accommodation', href: '/products/labour-accommodation' },
            { label: 'Site Offices', href: '/products/site-office' },
          ],
          [
            { label: "Officers' Quarters", href: '/products/officers-quarters' },
            { label: 'School Buildings', href: '/products/prefab-school' },
          ],
        ],
      },
      {
        title: 'Site Support Blocks',
        columns: [
          [
            { label: 'Mess Blocks', href: '/products/mess-block' },
            { label: 'Security Blocks', href: '/products/security-block' },
          ],
          [
            { label: 'Toilet Blocks', href: '/products/prefab-toilet' },
            { label: 'Storage & Warehouse Blocks', href: '/products/storage-warehouse-block' },
          ],
        ],
      },
      {
        title: 'Structural & Utility Components',
        columns: [
          [
            { label: 'PPGI Sheds', href: '/products/ppgi-shed' },
            { label: 'GI Sheet Site Barricading', href: '/products/gi-sheet-barricading' },
          ],
          [
            { label: 'Mezzanine Flooring Systems', href: '/products/mezzanine-flooring' },
            { label: 'Fire Exit Ramps & Access Structures', href: '/products/fire-exit-ramp' },
          ],
        ],
      },
      {
        title: 'Residential & Hospitality',
        columns: [
          [
            { label: 'Resort Blocks', href: '/products/resort-block' },
            { label: 'Farmhouses', href: '/products/farmhouse' },
          ],
          [
            { label: 'Kerala Manduva Pent Houses', href: '/products/kerala-manduva-penthouse' },
          ],
        ],
      },
    ],
  },
  about: {
    groups: [
      {
        title: 'The Elyon Group',
        columns: [
          [
            { label: 'Overview', href: '/about' },
            { label: 'Company Profile', href: '/about' },
            { label: 'Corporate Policies', href: '/about' },
          ],
          [
            { label: 'Businesses', href: '/about' },
            { label: 'Projects', href: '/#projects' },
          ],
          [
            { label: 'Sustainability', href: '/about' },
            { label: 'Contact Directory', href: '/#contact' },
          ],
        ],
      },
      {
        title: 'Leadership',
        columns: [
          [{ label: 'Director Profile', href: '/about' }],
          [{ label: 'Execution Highlights', href: '/about' }],
          [{ label: 'Business Enquiries', href: '/#contact' }],
        ],
      },
    ],
  },
  careers: {
    groups: [
      {
        title: 'Careers',
        columns: [
          [
            { label: 'Why Elyon', href: '/careers' },
            { label: 'Project Roles', href: '/careers' },
          ],
          [
            { label: 'Training & Growth', href: '/careers' },
            { label: 'Vendor Partnerships', href: '/careers' },
          ],
          [
            { label: 'Apply by Email', href: 'mailto:elyonprefab@gmail.com' },
            { label: 'Recruitment Note', href: '/careers' },
          ],
        ],
      },
    ],
  },
}

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || ''

function trackEvent(name, params = {}) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', name, params)
  }
}

function createId(prefix) {
  const randomPart =
    typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`

  return `${prefix}-${randomPart}`
}

function getOrCreateStorageValue(storageType, key, prefix) {
  if (typeof window === 'undefined') {
    return createId(prefix)
  }

  try {
    const storage = window[storageType]
    const existingValue = storage.getItem(key)

    if (existingValue) {
      return existingValue
    }

    const nextValue = createId(prefix)
    storage.setItem(key, nextValue)
    return nextValue
  } catch {
    return createId(prefix)
  }
}

function getTooltipText(element) {
  const explicitLabel = element.getAttribute('aria-label')?.trim()
  if (explicitLabel) {
    return explicitLabel
  }

  const title = element.getAttribute('title')?.trim()
  if (title) {
    return title
  }

  const altText = element.getAttribute('alt')?.trim()
  if (altText) {
    return altText
  }

  const placeholder = element.getAttribute('placeholder')?.trim()
  if (placeholder) {
    return placeholder
  }

  const id = element.getAttribute('id')
  if (id) {
    const matchingLabel = document.querySelector(`label[for="${id}"]`)?.textContent?.trim()
    if (matchingLabel) {
      return matchingLabel
    }
  }

  const wrappedLabel = element.closest('label')?.textContent?.trim()
  if (wrappedLabel) {
    return wrappedLabel
  }

  const text = element.textContent?.replace(/\s+/g, ' ').trim()
  if (text) {
    return text.slice(0, 120)
  }

  return ''
}

function AccessibilityIcon({ name }) {
  if (name === 'readableFont') {
    return <span className="a11y-card-lettermark">Aa</span>
  }

  if (name === 'dyslexicFont') {
    return <span className="a11y-card-lettermark a11y-card-lettermark-dyslexic">Aa</span>
  }

  if (name === 'bionicReading') {
    return (
      <span className="a11y-card-lettermark a11y-card-lettermark-bionic">
        <strong>A</strong>
        <span>A</span>
      </span>
    )
  }

  switch (name) {
    case 'largerText':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="10.5"
            cy="10.5"
            fill="none"
            r="5.9"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="m15.2 15.2 4.4 4.4M10.5 7.4v6.2M7.4 10.5h6.2"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
        </svg>
      )
    case 'biggerCursor':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 4.5 17.6 14l-4 1.1 1.4 4.4-2.1.7-1.4-4.4L7.8 18 7 4.5Z"
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
        </svg>
      )
    case 'tooltips':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 6.5h10a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-4.6L8 20.5v-3H7a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3Z"
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
          <path
            d="M12 10h.01M11.3 13h1.4"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.6"
          />
        </svg>
      )
    case 'lineSpacing':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7.2 6.2v11.6M5 8.5l2.2-2.3 2.2 2.3M5 15.5l2.2 2.3 2.2-2.3M12 8h7M12 12h7M12 16h7"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
        </svg>
      )
    case 'hideMedia':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect
            height="12"
            rx="2.2"
            width="14"
            x="5"
            y="6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="m7.5 15 3.2-3.2 2.4 2.4 1.8-1.8 1.6 2M8 9.5h.01"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
        </svg>
      )
    case 'stopAnimations':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="12"
            cy="12"
            fill="none"
            r="7.5"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M10 9v6M14 9v6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.8"
          />
        </svg>
      )
    case 'invertColors':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="12"
            cy="12"
            fill="none"
            r="7.3"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M12 4.7a7.3 7.3 0 0 1 0 14.6Z"
            fill="currentColor"
            opacity="0.22"
          />
          <path
            d="M12 4.7a7.3 7.3 0 0 1 0 14.6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      )
    case 'brightness':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="12"
            cy="12"
            fill="none"
            r="3.3"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M12 4.5v2.1M12 17.4v2.1M19.5 12h-2.1M6.6 12H4.5M17.3 6.7l-1.5 1.5M8.2 15.8l-1.5 1.5M17.3 17.3l-1.5-1.5M8.2 8.2 6.7 6.7"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.6"
          />
        </svg>
      )
    case 'highContrast':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 4.5a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path d="M12 4.5v15" fill="none" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      )
    case 'saturation':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 4.3c3.6 4.4 5.4 7.4 5.4 9.4a5.4 5.4 0 1 1-10.8 0c0-2 1.8-5 5.4-9.4Z"
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
        </svg>
      )
    case 'readingLine':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect
            height="2.8"
            rx="1.4"
            width="12"
            x="6"
            y="10.6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      )
    case 'highlightLinks':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.3 14.7 7.1 17a3.2 3.2 0 1 1-4.5-4.5l3.1-3.1a3.2 3.2 0 0 1 4.5 0M14.7 9.3 16.9 7a3.2 3.2 0 1 1 4.5 4.5l-3.1 3.1a3.2 3.2 0 0 1-4.5 0M8.4 15.6l7.2-7.2"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
        </svg>
      )
    case 'readPage':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 15.5V8.5l6 3.5-6 3.5Z"
            fill="none"
            stroke="currentColor"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
          <path
            d="M15 9.4a3.8 3.8 0 0 1 0 5.2M17.6 7.2a6.8 6.8 0 0 1 0 9.6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.6"
          />
        </svg>
      )
    case 'readingMask':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <rect
            height="10.5"
            rx="1.7"
            width="14"
            x="5"
            y="6.8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M6.8 11.1h10.4"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
          />
        </svg>
      )
    case 'pageStructure':
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 7h.01M11 7h6M7 12h.01M11 12h6M7 17h.01M11 17h6"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.8"
          />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="12"
            cy="12"
            fill="none"
            r="7.5"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
      )
  }
}

function getTrackingContext() {
  if (typeof window === 'undefined') {
    return {
      visitorId: '',
      sessionId: '',
    }
  }

  const url = new URL(window.location.href)

  return {
    visitorId: getOrCreateStorageValue('localStorage', 'elyon_visitor_id', 'visitor'),
    sessionId: getOrCreateStorageValue('sessionStorage', 'elyon_session_id', 'session'),
    path: `${url.pathname}${url.hash || ''}`,
    queryString: url.search,
    referrer: document.referrer || '',
    pageTitle: document.title,
    language: window.navigator.language || '',
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || '',
    screenWidth: window.screen?.width || null,
    screenHeight: window.screen?.height || null,
    utmSource: url.searchParams.get('utm_source') || '',
    utmMedium: url.searchParams.get('utm_medium') || '',
    utmCampaign: url.searchParams.get('utm_campaign') || '',
    utmTerm: url.searchParams.get('utm_term') || '',
    utmContent: url.searchParams.get('utm_content') || '',
  }
}

async function postJson(endpoint, payload, options = {}) {
  const response = await fetch(`${apiBaseUrl}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
    keepalive: options.keepalive || false,
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    const message =
      typeof data.error === 'string' && data.error
        ? data.error
        : `Request failed with status ${response.status}`

    throw new Error(message)
  }

  return data
}

function appendScript({ id, src, innerHTML }) {
  if (document.getElementById(id)) {
    return
  }

  const script = document.createElement('script')
  script.id = id

  if (src) {
    script.src = src
    script.async = true
  }

  if (innerHTML) {
    script.innerHTML = innerHTML
  }

  document.head.appendChild(script)
}

function App() {
  const [activeMegaMenu, setActiveMegaMenu] = useState(null)
  const [activeProductCategory, setActiveProductCategory] = useState(0)
  const [siteQuery, setSiteQuery] = useState('')
  const [accessibilityOpen, setAccessibilityOpen] = useState(false)
  const [accessibilitySettings, setAccessibilitySettings] = useState(
    defaultAccessibilitySettings,
  )
  const [accessibilityColorFilter, setAccessibilityColorFilter] = useState('none')

  useEffect(() => {
    document.title = 'Elyon Prefab Pvt Ltd | Prefabricated Infrastructure'

    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID
    const clarityId = import.meta.env.VITE_CLARITY_PROJECT_ID

    if (gaId) {
      appendScript({
        id: 'ga-loader',
        src: `https://www.googletagmanager.com/gtag/js?id=${gaId}`,
      })

      appendScript({
        id: 'ga-inline',
        innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `,
      })
    }

    if (clarityId) {
      appendScript({
        id: 'clarity-inline',
        innerHTML: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${clarityId}");
        `,
      })
    }

    trackEvent('page_ready', { page_name: 'home' })
  }, [])

  useEffect(() => {
    const trackingContext = getTrackingContext()

    postJson(
      '/api/track/visit',
      {
        ...trackingContext,
      },
      { keepalive: true },
    ).catch(() => {})
  }, [])

  useEffect(() => {
    const body = document.body
    const bodyClasses = {
      'a11y-large-text': accessibilitySettings.largerText,
      'a11y-big-cursor': accessibilitySettings.biggerCursor,
      'a11y-tooltips': accessibilitySettings.tooltips,
      'a11y-line-spacing': accessibilitySettings.lineSpacing,
      'a11y-readable-font': accessibilitySettings.readableFont,
      'a11y-dyslexic-font': accessibilitySettings.dyslexicFont,
      'a11y-high-contrast': accessibilitySettings.highContrast,
      'a11y-stop-animations': accessibilitySettings.stopAnimations,
      'a11y-hide-media': accessibilitySettings.hideMedia,
      'a11y-invert-colors': accessibilitySettings.invertColors,
      'a11y-brightness': accessibilitySettings.brightness,
      'a11y-low-saturation': accessibilitySettings.saturation,
      'a11y-highlight-links': accessibilitySettings.highlightLinks,
      'a11y-panel-open': accessibilityOpen,
    }
    const colorFilterClasses = {
      'a11y-filter-grayscale': accessibilityColorFilter === 'grayscale',
      'a11y-filter-red-green': accessibilityColorFilter === 'redGreen',
      'a11y-filter-blue-yellow': accessibilityColorFilter === 'blueYellow',
      'a11y-filter-green-red': accessibilityColorFilter === 'greenRed',
    }

    Object.entries(bodyClasses).forEach(([className, enabled]) => {
      body.classList.toggle(className, enabled)
    })

    Object.entries(colorFilterClasses).forEach(([className, enabled]) => {
      body.classList.toggle(className, enabled)
    })

    return () => {
      Object.keys({ ...bodyClasses, ...colorFilterClasses }).forEach((className) => {
        body.classList.remove(className)
      })
    }
  }, [accessibilityColorFilter, accessibilityOpen, accessibilitySettings])

  useEffect(() => {
    function restoreTooltips() {
      document
        .querySelectorAll('[data-a11y-tooltip-managed="true"]')
        .forEach((element) => {
          if (element.dataset.a11yOriginalTitle !== undefined) {
            element.setAttribute('title', element.dataset.a11yOriginalTitle)
            delete element.dataset.a11yOriginalTitle
          } else {
            element.removeAttribute('title')
          }

          delete element.dataset.a11yTooltipManaged
        })
    }

    if (!accessibilitySettings.tooltips) {
      restoreTooltips()
      return
    }

    document.querySelectorAll('a, button, input, textarea, select, img').forEach((element) => {
      if (element.closest('.a11y-panel, .a11y-launcher')) {
        return
      }

      const tooltipText = getTooltipText(element)
      if (!tooltipText) {
        return
      }

      if (element.hasAttribute('title')) {
        element.dataset.a11yOriginalTitle = element.getAttribute('title') || ''
      }

      element.setAttribute('title', tooltipText)
      element.dataset.a11yTooltipManaged = 'true'
    })

    return restoreTooltips
  }, [accessibilitySettings.tooltips])

  useEffect(() => {
    const root = document.documentElement

    if (!accessibilitySettings.readingLine && !accessibilitySettings.readingMask) {
      root.style.setProperty('--a11y-guide-y', '50vh')
      return
    }

    const updateGuidePosition = (position) => {
      root.style.setProperty('--a11y-guide-y', `${position}px`)
    }

    updateGuidePosition(window.innerHeight / 2)

    const handleMouseMove = (event) => {
      updateGuidePosition(event.clientY)
    }

    const handleTouchMove = (event) => {
      const touch = event.touches[0]
      if (touch) {
        updateGuidePosition(touch.clientY)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
      root.style.setProperty('--a11y-guide-y', '50vh')
    }
  }, [accessibilitySettings.readingLine, accessibilitySettings.readingMask])

  useEffect(() => {
    if (!accessibilityOpen) {
      return
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setAccessibilityOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [accessibilityOpen])

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      return
    }

    const synth = window.speechSynthesis

    if (!accessibilitySettings.readPage) {
      synth.cancel()
      return
    }

    const pageText = document.querySelector('main')?.innerText?.replace(/\s+/g, ' ').trim()
    if (!pageText) {
      return
    }

    synth.cancel()

    const utterance = new SpeechSynthesisUtterance(pageText)
    utterance.rate = 0.96
    utterance.pitch = 1
    utterance.onend = () => {
      setAccessibilitySettings((current) =>
        current.readPage
          ? {
              ...current,
              readPage: false,
            }
          : current,
      )
    }
    utterance.onerror = () => {
      setAccessibilitySettings((current) =>
        current.readPage
          ? {
              ...current,
              readPage: false,
            }
          : current,
      )
    }

    synth.speak(utterance)

    return () => {
      utterance.onend = null
      utterance.onerror = null
      synth.cancel()
    }
  }, [accessibilitySettings.readPage])

  function toggleAccessibilityOption(key) {
    if (key === 'bionicReading') {
      return
    }

    setAccessibilitySettings((current) => {
      if (key === 'readPage' && (typeof window === 'undefined' || !('speechSynthesis' in window))) {
        return current
      }

      const nextValue = !current[key]
      trackEvent('accessibility_toggle', {
        option: key,
        enabled: nextValue,
      })

      return {
        ...current,
        [key]: nextValue,
      }
    })
  }

  function toggleColorFilter(key) {
    setAccessibilityColorFilter((current) => {
      const nextValue = current === key ? 'none' : key

      trackEvent('accessibility_color_filter_toggle', {
        option: nextValue,
      })

      return nextValue
    })
  }

  function resetAccessibilitySettings() {
    setAccessibilitySettings(defaultAccessibilitySettings)
    setAccessibilityColorFilter('none')
    trackEvent('accessibility_reset', { page_name: 'home' })
  }

  function handleSiteSearch(event) {
    event.preventDefault()

    const query = siteQuery.trim().toLowerCase()
    if (!query) {
      return
    }

    let selector = '#top'

    if (['about', 'company', 'profile'].some((term) => query.includes(term))) {
      selector = '#about'
    } else if (
      ['business', 'service', 'services', 'solution', 'prefab', 'building'].some((term) =>
        query.includes(term),
      )
    ) {
      selector = '#businesses'
    } else if (
      ['sustainability', 'esg', 'environment', 'water', 'climate'].some((term) =>
        query.includes(term),
      )
    ) {
      selector = '#sustainability'
    } else if (
      ['project', 'projects', 'portfolio', 'work'].some((term) =>
        query.includes(term),
      )
    ) {
      selector = '#projects'
    } else if (
      ['story', 'stories', 'news', 'article'].some((term) =>
        query.includes(term),
      )
    ) {
      selector = '#stories'
    } else if (
      ['investor', 'credential', 'vendor', 'document', 'capability'].some((term) =>
        query.includes(term),
      )
    ) {
      selector = '#investors'
    } else if (
      ['contact', 'quote', 'enquiry', 'phone', 'email'].some((term) =>
        query.includes(term),
      )
    ) {
      selector = '#contact'
    } else if (
      ['accessibility', 'statement', 'readable', 'contrast'].some((term) =>
        query.includes(term),
      )
    ) {
      selector = '#accessibility-statement'
      setAccessibilityOpen(true)
    }

    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
    trackEvent('site_search', {
      query,
      destination: selector,
    })
  }

  const activeMegaMenuData = activeMegaMenu ? megaMenus[activeMegaMenu] : null

  return (
    <Router>
    <div className="site-shell">
      <header
        className={`site-header${activeMegaMenu ? ' has-mega-menu' : ''}`}
        onMouseLeave={() => {
          setActiveMegaMenu(null)
          setActiveProductCategory(0)
        }}
      >
        <div className="frame site-header-inner">
          {/* Changed <a> to <Link> and href to to="/" */}
          <Link className="brand" to="/">
            <img
              alt="Elyon Prefab Private Limited"
              className="brand-logo"
              src={elyonLogo}
            />
          </Link>

          <nav className="site-nav site-nav-primary" aria-label="Primary">
            {primaryNavLinks.map((link) => (
              link.menuId ? (
                <button
                  key={link.label}
                  className={`site-nav-trigger${activeMegaMenu === link.menuId ? ' is-active' : ''}`}
                  onClick={() => {
                    setActiveMegaMenu((current) =>
                      current === link.menuId ? null : link.menuId,
                    )
                    setActiveProductCategory(0)
                  }}
                  onFocus={() => {
                    setActiveMegaMenu(link.menuId)
                    setActiveProductCategory(0)
                  }}
                  onMouseEnter={() => {
                    setActiveMegaMenu(link.menuId)
                    setActiveProductCategory(0)
                  }}
                  type="button"
                >
                  <span>{link.label}</span>
                  <span className="nav-caret" aria-hidden="true">
                    <svg viewBox="0 0 10 7" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1 1.25 5 5.25 9 1.25"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.2"
                      />
                    </svg>
                  </span>
                </button>
              ) : (
                <a key={link.label} href={link.href}>
                  <span>{link.label}</span>
                </a>
              )
            ))}
          </nav>

          <div className="site-header-tools">
            <nav className="site-nav site-nav-utility" aria-label="Utility">
              {utilityNavLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}

              <button
                aria-label="Open accessibility options"
                className="utility-icon-button"
                onClick={() => setAccessibilityOpen(true)}
                type="button"
              >
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19Zm0 0c2.6 2.6 4 6.02 4 9.5s-1.4 6.9-4 9.5m0-19c-2.6 2.6-4 6.02-4 9.5s1.4 6.9 4 9.5m-8.25-9.5h16.5M4.8 6.5h14.4M4.8 17.5h14.4"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.2"
                  />
                </svg>
              </button>
            </nav>

          </div>
        </div>

        <div
          className={`mega-menu${activeMegaMenuData ? ' is-open' : ''}${
            activeMegaMenu === 'products' ? ' mega-menu-flyout' : ''
          }`}
        >
          {activeMegaMenuData ? (
            activeMegaMenu === 'products' ? (
              <div className="frame mega-menu-inner mega-menu-inner-flyout">
                <div className="mega-menu-categories">
                  {activeMegaMenuData.groups.map((group, index) => (
                    <button
                      key={group.title}
                      type="button"
                      className={`mega-menu-category${
                        activeProductCategory === index ? ' is-active' : ''
                      }`}
                      onMouseEnter={() => setActiveProductCategory(index)}
                      onFocus={() => setActiveProductCategory(index)}
                    >
                      <span>{group.title}</span>
                      <span className="mega-menu-category-caret" aria-hidden="true">
                        &rsaquo;
                      </span>
                    </button>
                  ))}
                </div>

                <div className="mega-menu-flyout-items">
                  {activeMegaMenuData.groups[activeProductCategory].columns
                    .flat()
                    .map((item) => (
                      <a
                        href={item.href}
                        key={item.label}
                        onClick={() => {
                          setActiveMegaMenu(null)
                          setActiveProductCategory(0)
                        }}
                      >
                        {item.label}
                      </a>
                    ))}
                </div>
              </div>
            ) : (
              <div className="frame mega-menu-inner">
                {activeMegaMenuData.groups.map((group) => (
                  <section className="mega-menu-group" key={group.title}>
                    <h3>{group.title}</h3>
                    <div className="mega-menu-divider"></div>
                    <div className="mega-menu-columns">
                      {group.columns.map((column, index) => (
                        <div className="mega-menu-column" key={`${group.title}-${index}`}>
                          {column.map((item) => (
                            <a
                              href={item.href}
                              key={item.label}
                              onClick={() => setActiveMegaMenu(null)}
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            )
          ) : null}
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home stopAnimations={accessibilitySettings.stopAnimations} />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/products/:productId" element={<ProductPage />} />

        {/* NEW ROUTES ADDED HERE */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />

        {/* If they go to exactly /products, redirect them Home */}
        <Route path="/products" element={<Navigate to="/" />} />
        {/* If they type a totally random URL, redirect them Home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* NEW FOOTER GOES HERE, RIGHT BELOW THE ROUTES! */}
      <Footer />

      <svg
        aria-hidden="true"
        className="a11y-filter-defs"
        focusable="false"
      >
        <defs>
          <filter id="a11y-filter-identity">
            <feColorMatrix
              type="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 1 0
              "
            />
          </filter>
          <filter id="a11y-filter-protanopia">
            <feColorMatrix
              type="matrix"
              values="
                0.567 0.433 0 0 0
                0.558 0.442 0 0 0
                0 0.242 0.758 0 0
                0 0 0 1 0
              "
            />
          </filter>
          <filter id="a11y-filter-deuteranopia">
            <feColorMatrix
              type="matrix"
              values="
                0.625 0.375 0 0 0
                0.7 0.3 0 0 0
                0 0.3 0.7 0 0
                0 0 0 1 0
              "
            />
          </filter>
          <filter id="a11y-filter-tritanopia">
            <feColorMatrix
              type="matrix"
              values="
                0.95 0.05 0 0 0
                0 0.433 0.567 0 0
                0 0.475 0.525 0 0
                0 0 0 1 0
              "
            />
          </filter>
        </defs>
      </svg>

      {accessibilitySettings.readingLine ? (
        <div aria-hidden="true" className="a11y-reading-line"></div>
      ) : null}

      {accessibilitySettings.readingMask ? (
        <div aria-hidden="true" className="a11y-reading-mask"></div>
      ) : null}

      <button
        aria-controls="accessibility-panel"
        aria-expanded={accessibilityOpen}
        className="a11y-launcher"
        onClick={() => setAccessibilityOpen(true)}
        type="button"
      >
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="5" fill="currentColor" r="1.8" />
          <path
            d="M4 8.5h16M12 8.5v10.8m0 0-3.4-3.1m3.4 3.1 3.4-3.1m-5.9-4.8 2.5 2.4 2.5-2.4"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.6"
          />
        </svg>
        <span>Accessibility</span>
      </button>

      <div
        aria-hidden={!accessibilityOpen}
        className={`a11y-backdrop${accessibilityOpen ? ' is-open' : ''}`}
        onClick={() => setAccessibilityOpen(false)}
      ></div>

      <aside
        aria-hidden={!accessibilityOpen}
        className={`a11y-panel${accessibilityOpen ? ' is-open' : ''}`}
        id="accessibility-panel"
      >
        <div className="a11y-panel-head">
          <div>
            <p className="a11y-panel-label">Accessibility Options</p>
            <h2>Accessibility Options</h2>
          </div>

          <div className="a11y-panel-actions">
            <div className="a11y-language" aria-label="Language">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19Zm0 0c2.6 2.6 4 6.02 4 9.5s-1.4 6.9-4 9.5m0-19c-2.6 2.6-4 6.02-4 9.5s1.4 6.9 4 9.5m-8.25-9.5h16.5M4.8 6.5h14.4M4.8 17.5h14.4"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.2"
                />
              </svg>
              <span>EN</span>
            </div>

            <button
              aria-label="Close accessibility options"
              className="a11y-close"
              onClick={() => setAccessibilityOpen(false)}
              type="button"
            >
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="m6 6 12 12M18 6 6 18"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.8"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="a11y-panel-body">
          {accessibilitySections.map((section) => (
            <section className="a11y-panel-section" key={section.title}>
              <p className="a11y-section-title">{section.title}</p>

              <div
                className={`a11y-grid${section.title === 'Colors' ? ' a11y-grid-colors' : ''}`}
              >
                {section.options.map((option) => {
                  const isActive = Boolean(accessibilitySettings[option.key])

                  return (
                    <button
                      aria-pressed={isActive}
                      className={`a11y-card${isActive ? ' is-active' : ''}${option.disabled ? ' is-disabled' : ''}`}
                      disabled={option.disabled}
                      key={option.key}
                      onClick={() => toggleAccessibilityOption(option.key)}
                      type="button"
                    >
                      <span className="a11y-card-icon">
                        <AccessibilityIcon name={option.icon} />
                      </span>
                      <span className="a11y-card-title">{option.label}</span>
                      {option.disabled ? (
                        <small className="a11y-card-note">Preview only</small>
                      ) : (
                        <span className="a11y-card-bars" aria-hidden="true">
                          <span></span>
                          <span></span>
                          <span></span>
                        </span>
                      )}
                    </button>
                  )
                })}

                {section.title === 'Colors' ? (
                  <div className="a11y-color-filter-card">
                    <p>Color Filters</p>

                    <div className="a11y-color-filter-grid">
                      {accessibilityColorFilters.map((filter) => (
                        <button
                          aria-pressed={accessibilityColorFilter === filter.key}
                          className={`a11y-filter-pill${accessibilityColorFilter === filter.key ? ' is-active' : ''}`}
                          key={filter.key}
                          onClick={() => toggleColorFilter(filter.key)}
                          type="button"
                        >
                          <span
                            className={`a11y-filter-swatch a11y-filter-swatch-${filter.swatch}`}
                          ></span>
                          <span>{filter.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>

              {section.title === 'Navigation' && accessibilitySettings.pageStructure ? (
                <div className="a11y-structure-panel">
                  <p>Page Structure</p>

                  <div className="a11y-structure-list">
                    {pageStructureLinks.map((item) => (
                      <a
                        href={item.href}
                        key={item.href}
                        onClick={() => setAccessibilityOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </section>
          ))}

          <button className="a11y-reset" onClick={resetAccessibilitySettings} type="button">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 5.2A6.8 6.8 0 1 1 5.7 9M5.7 9V4.8M5.7 9h4.2"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.9"
              />
            </svg>
            <span>Reset Settings</span>
          </button>

          <div className="a11y-panel-foot">
            <a
              className="a11y-statement-link"
              href="#accessibility-statement"
              onClick={() => setAccessibilityOpen(false)}
            >
              Accessibility Statement
            </a>

            <div className="a11y-powered-by" aria-hidden="true">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="12"
                  cy="12"
                  fill="none"
                  r="9"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle cx="12" cy="7" fill="currentColor" r="1.2" />
                <path
                  d="M7.6 10.1h8.8M12 10.1v7.4m0 0-2.7-2.5m2.7 2.5 2.7-2.5"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                />
              </svg>
              <span>Accessibly</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
    </Router>
  )
}

export default App