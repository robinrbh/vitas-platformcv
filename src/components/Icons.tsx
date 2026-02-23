export const LocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

export const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

export const GlobeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export const MicrosoftIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className}
    width="18" 
    height="18" 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="2" width="20" height="20" fill="#F25022" />
    <rect x="26" y="2" width="20" height="20" fill="#7FBA00" />
    <rect x="2" y="26" width="20" height="20" fill="#00A4EF" />
    <rect x="26" y="26" width="20" height="20" fill="#FFB900" />
  </svg>
);

export const MessageIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

export const ThumbsUpIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
  </svg>
);

export const ZapIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export const CodeIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

export const UsersIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const MinimizeIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="4 14 10 14 10 20" />
    <polyline points="20 10 14 10 14 4" />
    <line x1="14" y1="10" x2="21" y2="3" />
    <line x1="3" y1="21" x2="10" y2="14" />
  </svg>
);

// Programming Language Icons
export const PythonIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.42 3.35-3.42h5.766s3.24.052 3.24-3.148V3.202S18.28 0 11.913 0zm-3.16 1.846a1.02 1.02 0 110 2.04 1.02 1.02 0 010-2.04z" fill="#3776AB"/>
    <path d="M12.087 24c6.092 0 5.712-2.656 5.712-2.656l-.007-2.752h-5.814v-.826h8.123s3.9.445 3.9-5.735c0-6.18-3.403-5.96-3.403-5.96h-2.03v2.867s.109 3.42-3.35 3.42H9.452s-3.24-.052-3.24 3.148v5.292S5.721 24 12.087 24zm3.16-1.846a1.02 1.02 0 110-2.04 1.02 1.02 0 010 2.04z" fill="#FFD43B"/>
  </svg>
);

export const CSharpIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-1.2 6h2.4v2.4h2.4v2.4h-2.4v2.4h-2.4v-2.4H8.4v-2.4h2.4V6z" fill="#239120"/>
    <path d="M14.5 10.5h1.5v1.5h-1.5zm-3 0h1.5v1.5h-1.5zm3-3h1.5v1.5h-1.5zm-3 0h1.5v1.5h-1.5z" fill="#fff"/>
  </svg>
);

export const SQLIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="12" cy="6" rx="8" ry="3" stroke="#00758F" strokeWidth="2" fill="none"/>
    <path d="M4 6v12c0 1.657 3.582 3 8 3s8-1.343 8-3V6" stroke="#00758F" strokeWidth="2" fill="none"/>
    <path d="M4 12c0 1.657 3.582 3 8 3s8-1.343 8-3" stroke="#00758F" strokeWidth="2" fill="none"/>
  </svg>
);

export const JavaScriptIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="3" fill="#F7DF1E"/>
    <path d="M7.5 16.5c0 1.5 1 2 2.5 2s2.5-.5 2.5-2v-6h-2v6c0 .5-.25.75-.5.75s-.5-.25-.5-.75v-6h-2v6zm7-6h2v4.5c0 1.5 1 2 2.5 2s2.5-.5 2.5-2h-2c0 .5-.25.75-.5.75s-.5-.25-.5-.75v-4.5h2v-2h-6v2z" fill="#000"/>
  </svg>
);

export const TypeScriptIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="3" fill="#3178C6"/>
    <path d="M13 12h-2v7h2v-7zm2-2h2v2h-2v-2zm0 2h4v7h-2v-5h-2v-2z" fill="#fff"/>
    <path d="M7 10h6v2h-2v7h-2v-7H7v-2z" fill="#fff"/>
  </svg>
);

export const ScalaIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 6h16c0 2-1 4-4 4H4V6z" fill="#DC322F"/>
    <path d="M4 11h16c0 2-1 4-4 4H4v-4z" fill="#DC322F"/>
    <path d="M4 16h16c0 2-1 4-4 4H4v-4z" fill="#DC322F"/>
  </svg>
);

export const RLanguageIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" fill="#276DC3"/>
    <path d="M8 16V8h4c1.657 0 3 1.343 3 3s-1.343 3-3 3h-2l3 2M10 10h2c.552 0 1 .448 1 1s-.448 1-1 1h-2v-2z" stroke="#fff" strokeWidth="1.5" fill="none"/>
  </svg>
);
