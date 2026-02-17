import { VitasLogo } from './VitasLogo';

export const Footer = () => {
  return (
    <>
      <footer className="cv-footer">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-section">
              <VitasLogo className="vitas-logo" />
              <p className="footer-description">
                Vitas is een toonaangevend bedrijf in data-gedreven oplossingen, 
                gespecialiseerd in het transformeren van complexe data naar waardevolle inzichten.
              </p>
            </div>
            
            <div className="footer-section">
              <h3 className="footer-title">Contact</h3>
              <div className="footer-links">
                <a href="mailto:info@vitas.nl">info@vitas.nl</a>
                <a href="tel:+31853033712">+31 (0)85 303 37 12</a>
                <p className="footer-address">
                  Albert Einsteinweg 2<br />
                  8501 XE, Joure<br />
                  Nederland
                </p>
              </div>
            </div>
            
            <div className="footer-section">
              <h3 className="footer-title">Volg ons</h3>
              <div className="footer-links">
                <a href="https://www.linkedin.com/company/vitas-b-v/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href="https://twitter.com/vitas" target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      <div className="footer-legal-section">
        <div className="footer-legal-content">
          <p className="footer-copyright">© 2026 Vitas Holding B.V. Alle rechten voorbehouden.</p>
          <div className="footer-legal">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Algemene Voorwaarden</a>
          </div>
        </div>
      </div>
    </>
  );
};
