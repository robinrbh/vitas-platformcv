interface ColleagueCardProps {
  initial: string;
  name: string;
  description: string;
  avatarUrl?: string;
}

export const ColleagueCard = ({ initial, name, description, avatarUrl }: ColleagueCardProps) => (
  <div className="colleague-card">
    {avatarUrl ? (
      <img src={avatarUrl} alt={name} className="colleague-avatar" loading="lazy" />
    ) : (
      <div className="colleague-avatar-placeholder">{initial}</div>
    )}
    <h3 className="colleague-name">{name}</h3>
    <p className="colleague-description">{description}</p>
  </div>
);
