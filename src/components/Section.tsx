import type { ReactNode } from 'react';

interface SectionProps {
  title: string;
  className?: string;
  children: ReactNode;
}

export const Section = ({ title, className = '', children }: SectionProps) => (
  <section className={`cv-section ${className}`}>
    <div className="content">
      <h2 className="section-title">{title}</h2>
      {children}
    </div>
  </section>
);
