import { ReactNode } from 'react';

interface CultureCardProps {
  icon: ReactNode;
  title: string;
  text: string;
}

export const CultureCard = ({ icon, title, text }: CultureCardProps) => (
  <div className="culture-card">
    {icon}
    <h3 className="culture-title">{title}</h3>
    <p className="culture-text">{text}</p>
  </div>
);
