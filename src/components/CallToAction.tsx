export const CallToAction = () => {
  return (
    <section className="cta-section">
      {/* Decorative SVG lines */}
      <div className="cta-svg-line cta-svg-line-left">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="176.05999755859375 76.51000213623047 58.01054382324219 246.97998046875">
          <path fill="currentColor" d="M176.06,322.38c.33-.21.65-.42.98-.63,8.05-5.2,15.59-11.23,22.44-17.93,6-5.91,11.38-12.48,15.99-19.53,8.12-12.47,13.5-26.22,15.99-40.88,1.12-6.54,1.67-13.23,1.65-19.88-.02-6.19-.52-12.42-1.48-18.52-1.78-11.26-6.04-25.29-12.67-41.7-6.13-15.18-14.36-32.57-24.45-51.68-5.56-10.53-11.77-21.74-18.45-33.3v-1.82s.82,1.35.82,1.35c6.69,11.57,12.9,22.79,18.47,33.33,10.1,19.14,18.34,36.55,24.49,51.76,6.66,16.48,10.94,30.58,12.73,41.91.97,6.15,1.47,12.43,1.5,18.66.02,6.7-.54,13.45-1.66,20.05-2.52,14.79-7.94,28.67-16.13,41.24-4.65,7.11-10.07,13.73-16.12,19.69-6.89,6.75-14.49,12.82-22.59,18.05-.49.32-.98.63-1.48.94v-1.11Z"/>
        </svg>
      </div>
      
      <div className="cta-svg-line cta-svg-line-right">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="142.4555206298828 97.17998504638672 82.4844970703125 194.07998657226562">
          <path fill="currentColor" d="M224.93,98.25c-8.04,3.11-15.59,6.24-22.5,9.33-9.36,4.11-18.57,8.82-27.37,14.03-8.06,4.88-14.2,9.58-18.23,13.98-4.64,5.05-8.13,10.9-10.4,17.37-2.68,7.84-3.57,16.33-2.59,24.55.58,5.07,1.67,10.11,3.26,14.96,1.89,5.76,4.31,11.38,7.18,16.72,3.45,6.41,7.41,12.62,11.76,18.46,5.23,7.03,10.95,13.82,16.99,20.19,10.45,11.09,24.47,25.17,41.85,42.05l-.03,1.37c-17.71-17.18-31.96-31.49-42.55-42.73-6.06-6.39-11.81-13.21-17.06-20.28-4.38-5.88-8.36-12.13-11.83-18.59-2.9-5.39-5.34-11.07-7.25-16.88-1.61-4.92-2.72-10.01-3.31-15.15-1-8.37-.09-17.01,2.63-25,2.31-6.6,5.88-12.56,10.61-17.72,4.1-4.47,10.31-9.24,18.46-14.16,8.84-5.23,18.08-9.96,27.48-14.08,7.03-3.15,14.71-6.33,22.91-9.49v1.08Z"/>
        </svg>
      </div>

      <div className="cta-content">
        <div className="cta-text">
          <h2 className="cta-title">Kennismaken met Vitas</h2>
          <h3 className="cta-subtitle">De koffie staat voor je klaar.</h3>
          <p className="cta-description">
            Heb jij vragen voor ons? Neem dan contact op.
          </p>
          <p className="cta-description">
            We staan klaar om al je vragen te beantwoorden.
          </p>
        </div>

        <div className="cta-actions">
          <div className="cta-social-links">
            <a href="https://www.linkedin.com/company/vitas-b-v/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="cta-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="190.36000061035156 190.50999450683594 19.689987182617188 19.660003662109375">
                <path fill="currentColor" d="M194.78,210.17h-4.08v-13.13h4.08v13.13ZM192.74,195.25c-1.31,0-2.38-1.05-2.38-2.36,0-1.31,1.05-2.38,2.36-2.38,1.31,0,2.38,1.05,2.38,2.36,0,1.31-1.05,2.37-2.36,2.38ZM210.04,210.17h-4.07v-6.39c0-1.52-.03-3.48-2.12-3.48s-2.44,1.65-2.44,3.37v6.5h-4.07v-13.13h3.91v1.79h.06c.8-1.36,2.28-2.18,3.86-2.12,4.13,0,4.88,2.72,4.88,6.25v7.21h0Z"/>
              </svg>
            </a>
            <a href="https://maps.app.goo.gl/wi1CF51cZkijpBNb6" target="_blank" rel="noopener noreferrer" aria-label="Vitas Locatie Joure" className="cta-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="192.1300048828125 190.4798126220703 15.994125366210938 19.667678833007812">
                <path fill="currentColor" d="M200.13,190.48c-4.39-.03-7.97,3.51-8,7.9,0,.1,0,.2,0,.3,0,3.18,2.44,6.92,7.34,11.22.38.33.95.33,1.33,0,4.88-4.31,7.32-8.05,7.32-11.22.14-4.39-3.31-8.06-7.7-8.19-.1,0-.2,0-.29,0ZM200.13,200.47c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2Z"/>
              </svg>
            </a>
            <a href="tel:+31853033712" aria-label="Bellen" className="cta-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="188.00999450683594 187.9931182861328 23.996871948242188 24.006881713867188">
                <path fill="currentColor" d="M195.73,189.15c-.36-.87-1.31-1.34-2.22-1.09l-4.12,1.13c-.82.22-1.38.96-1.38,1.81,0,11.6,9.4,21,21,21h0c.85,0,1.59-.57,1.81-1.38l1.12-4.12c.25-.91-.22-1.86-1.09-2.22l-4.5-1.88c-.76-.32-1.65-.1-2.17.54l-1.89,2.31c-3.3-1.56-5.97-4.22-7.53-7.53l2.31-1.89c.64-.52.86-1.41.54-2.17l-1.88-4.5h0Z"/>
              </svg>
            </a>
            <a href="mailto:info@vitas.nl" aria-label="Email versturen" className="cta-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="190.9099884033203 192.89999389648438 18.57000732421875 14.8699951171875">
                <path fill="currentColor" d="M207.62,192.9h-14.86c-1.02,0-1.85.83-1.85,1.86v11.15c0,1.03.82,1.86,1.85,1.86h14.86c1.03,0,1.86-.83,1.86-1.86v-11.15c0-1.03-.83-1.86-1.86-1.86ZM207.62,196.62l-7.43,4.65-7.43-4.65v-1.86l7.43,4.64,7.43-4.64v1.86Z"/>
              </svg>
            </a>
          </div>

          <div className="cta-button-wrapper">
            <a href="mailto:info@vitas.nl" className="cta-button-link">
              <div className="cta-button-main">
                <span>Contact opnemen</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="cta-button-arrow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
              <div className="cta-button-svg">
                <svg xmlns="http://www.w3.org/2000/svg" height="42px" strokeWidth="1" viewBox="169 182 169 36">
                  <path fill="currentColor" stroke="white" d="M270.46,182.13H119.72c-2.31-.05-4.23,1.78-4.28,4.1v27.53c.05,2.31,1.97,4.15,4.28,4.1l151.94.02c13.02,0,13.02-6.93,12.87-10.45-.17-3.78-9.12-20.25-10.24-22.46-.9-1.78-1.66-2.84-3.83-2.84"/>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
