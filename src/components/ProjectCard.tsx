interface ProjectCardProps {
  title: string;
  description: string;
}

export const ProjectCard = ({ title, description }: ProjectCardProps) => (
  <div className="project-card">
    <h3 className="project-title">{title}</h3>
    <p className="project-description">{description}</p>
  </div>
);
