import { VitasLogo } from './VitasLogo';
import { LocationIcon, PhoneIcon, EmailIcon, GlobeIcon, MicrosoftIcon } from './Icons';
import { StatCard } from './StatCard';

export const Header = () => (
  <header className="cv-header">
    <div className="header-video">
      <video autoPlay loop muted playsInline>
        <source src="https://cdn.vitas.nl/strapi-uploads/assets/home_9fabcd204e.mp4" type="video/mp4" />
      </video>
    </div>
    <div className="header-content">
      <div className="logo-container">
        <VitasLogo />
      </div>
      <p className="tagline">
        Een hechte club van ruim 70 senior collega's die samen werken aan software, cloud & data vraagstukken.
      </p>
      <div className="contact-row">
        <div className="contact-item">
          <LocationIcon />
          <span>Joure, Hilversum & Groningen</span>
        </div>
        <div className="contact-item">
          <PhoneIcon />
          <a href="tel:+31613064973">+31 (6) 13 06 49 73</a>
        </div>
        <div className="contact-item">
          <EmailIcon />
          <a href="mailto:gnakken@vitas.nl">gnakken@vitas.nl</a>
        </div>
        <div className="contact-item">
          <GlobeIcon />
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MicrosoftIcon />
          </span>
        </div>
      </div>
      <div className="stats-grid">
        <StatCard number="70+" label="Senior Collega's" />
        <StatCard number="3" label="Locaties" />
        <StatCard number="100%" label="Microsoft Focus" />
        <StatCard number="∞" label="Inhoudelijke Diepgang" />
      </div>
    </div>
  </header>
);
