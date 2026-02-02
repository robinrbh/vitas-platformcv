interface StatCardProps {
  number: string;
  label: string;
}

export const StatCard = ({ number, label }: StatCardProps) => (
  <div className="stat-card">
    <div className="stat-number">{number}</div>
    <div className="stat-label">{label}</div>
  </div>
);
