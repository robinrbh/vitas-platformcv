interface ComparisonItemProps {
  title: string;
  text: string;
}

interface ComparisonBoxProps {
  type: 'negative' | 'positive';
  title: string;
  items: ComparisonItemProps[];
}

export const ComparisonBox = ({ type, title, items }: ComparisonBoxProps) => (
  <div className={`comparison-box ${type}`}>
    <h3 className="comparison-title">{title}</h3>
    {items.map((item, index) => (
      <div key={index} className="comparison-item">
        <div className="comparison-item-title">{item.title}</div>
        <p className="comparison-item-text">{item.text}</p>
      </div>
    ))}
  </div>
);
