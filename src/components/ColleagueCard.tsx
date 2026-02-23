interface ColleagueCardProps {
  initial: string;
  name: string;
  description: string;
  avatarUrl?: string;
  secondAvatarUrl?: string;
  secondInitial?: string;
}

export const ColleagueCard = ({ initial, name, description, avatarUrl, secondAvatarUrl, secondInitial }: ColleagueCardProps) => (
  <div className="colleague-card">
    {avatarUrl || secondAvatarUrl ? (
      <div className="colleague-avatars">
        {avatarUrl && <img src={avatarUrl} alt={name} className="colleague-avatar" loading="lazy" />}
        {secondAvatarUrl && <img src={secondAvatarUrl} alt={name} className="colleague-avatar" loading="lazy" />}
      </div>
    ) : secondInitial ? (
      <div className="colleague-avatars">
        <div className="colleague-avatar-placeholder">{initial}</div>
        <div className="colleague-avatar-placeholder">{secondInitial}</div>
      </div>
    ) : (
      <div className="colleague-avatar-placeholder">{initial}</div>
    )}
    <h3 className="colleague-name">{name}</h3>
    <p className="colleague-description">{description}</p>
  </div>
);
