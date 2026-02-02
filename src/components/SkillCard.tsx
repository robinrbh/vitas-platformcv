interface SkillCardProps {
  skill: string;
}

export const SkillCard = ({ skill }: SkillCardProps) => (
  <div className="skill-card">
    <p className="skill-name">{skill}</p>
  </div>
);
