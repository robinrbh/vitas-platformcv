import { VitasLogo } from './VitasLogo';

export const Footer = () => (
  <footer className="cv-footer">
    <div className="footer-content">
      <p className="footer-text">
        Wij willen verwachtingen overtreffen. Die van klanten, maar vooral die van onze eigen mensen.
      </p>
      <p className="footer-location">Joure & Hilversum</p>
      <div className="footer-logo-container">
        <VitasLogo className="footer-logo" />
      </div>
    </div>
  </footer>
);
