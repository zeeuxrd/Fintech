import React from 'react';
import cubeImage from '../images/assets/cube-helix 2.png';

// Custom inline SVG icons for professional branding
const SynergyIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 12h7v10h6V12h7L12 2z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
  </svg>
);

const LogoIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {/* Clean four-quadrant diamond shape matching the Synergy mockup */}
    <path d="M12 2L22 12L12 22L2 12L12 2Z" fill="none" stroke="currentColor" strokeWidth="2.5"/>
    <path d="M12 2L12 12L2 12" fill="currentColor"/>
    <path d="M12 22L12 12L22 12" fill="currentColor"/>
  </svg>
);

const HorizonIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 17h18v-2H3v2zm0-4h18v-2H3v2zm0-6v2h18V7H3z" />
  </svg>
);

const CatalystIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 22h20L12 2zm0 4.8L18.5 19H5.5L12 6.8z" />
  </svg>
);

const PhoenixIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 10l8 12 8-12-8-8zm0 4.5l4.5 4.5H7.5L12 6.5z" />
  </svg>
);

const PulseIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 14h-2v-4h2v4zm-4 0H9v-8h2v8zm-4 0H5v-4h2v4z" />
  </svg>
);

const SolarisIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2.5"/>
    <circle cx="12" cy="12" r="4" fill="currentColor"/>
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const AuroraIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L2 12l10 9 10-9-10-9zm0 4.2l6.2 4.8-6.2 4.8-6.2-4.8 6.2-4.8z" />
  </svg>
);

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px', verticalAlign: 'middle' }}>
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

const ChevronDown = () => (
  <svg viewBox="0 0 24 24" width="10" height="10" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '4px', verticalAlign: 'middle' }}>
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

function App() {
  return (
    <div className="app-container">
      {/* Visual background atmospheric lights */}
      <div className="glow-effect"></div>
      <div className="glow-effect-left"></div>

      {/* Navigation Header */}
      <header className="navbar">
        <div className="nav-logo">
          <LogoIcon />
          <span>Synergy™</span>
        </div>

        <nav>
          <ul className="nav-links">
            <li><a href="#products" className="nav-link">Products</a></li>
            <li>
              <a href="#services" className="nav-link">
                Services <span className="new-badge">New</span>
              </a>
            </li>
            <li>
              <a href="#solutions" className="nav-link">
                Solutions <ChevronDown />
              </a>
            </li>
            <li><a href="#pricing" className="nav-link">Pricing</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>

        <div>
          <button className="btn-primary">Get started</button>
          <button className="menu-btn">MENU</button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="hero">
        <section className="hero-content">
          <h1 className="hero-title">Secure your crypto. Anytime, Anywhere.</h1>
          <p className="hero-description">
            From wireframes to polished interfaces — get instant feedback, 
            fresh ideas, and clean code. Our tool works alongside you, 
            so you spend less time stuck and more time shipping.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">
              Get started free <ArrowUpRight />
            </button>
            <button className="btn-secondary">Talk to sales</button>
          </div>
        </section>

        <section className="hero-artwork">
          <div className="cube-wrapper">
            <img 
              src={cubeImage} 
              alt="3D Holographic Cube Art" 
              className="cube-image" 
              draggable="false"
            />
          </div>
        </section>
      </main>

      {/* Partners/Clients Band */}
      <footer className="partners-band">
        <div className="ticker-track">
          <div className="ticker-group">
            <a href="#synergy" className="partner-logo">
              <LogoIcon />
              <span>Synergy™</span>
            </a>
            <a href="#horizon" className="partner-logo">
              <HorizonIcon />
              <span>Horizon™</span>
            </a>
            <a href="#catalyst" className="partner-logo">
              <CatalystIcon />
              <span>Catalyst™</span>
            </a>
            <a href="#phoenix" className="partner-logo">
              <PhoenixIcon />
              <span>Phoenix™</span>
            </a>
            <a href="#pulse" className="partner-logo">
              <PulseIcon />
              <span>Pulse™</span>
            </a>
            <a href="#solaris" className="partner-logo">
              <SolarisIcon />
              <span>Solaris™</span>
            </a>
            <a href="#aurora" className="partner-logo">
              <AuroraIcon />
              <span>Aurora™</span>
            </a>
          </div>
          {/* Duplicated group for seamless loop */}
          <div className="ticker-group" aria-hidden="true">
            <a href="#synergy" className="partner-logo">
              <LogoIcon />
              <span>Synergy™</span>
            </a>
            <a href="#horizon" className="partner-logo">
              <HorizonIcon />
              <span>Horizon™</span>
            </a>
            <a href="#catalyst" className="partner-logo">
              <CatalystIcon />
              <span>Catalyst™</span>
            </a>
            <a href="#phoenix" className="partner-logo">
              <PhoenixIcon />
              <span>Phoenix™</span>
            </a>
            <a href="#pulse" className="partner-logo">
              <PulseIcon />
              <span>Pulse™</span>
            </a>
            <a href="#solaris" className="partner-logo">
              <SolarisIcon />
              <span>Solaris™</span>
            </a>
            <a href="#aurora" className="partner-logo">
              <AuroraIcon />
              <span>Aurora™</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
