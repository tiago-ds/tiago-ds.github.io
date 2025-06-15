import "./projects.css";

interface IProjectCard {
  description: string;
  icon: string;
  name: string;
  url: string;
  year: string;
}

const NavItemComponent: React.FC<IProjectCard> = ({
  description,
  icon,
  name,
  url,
  year,
}) => {
  return (
    <div className="project-card d-flex flex-row">
      <a href={url} target="_blank">
        <img src={icon} alt="" />
      </a>
      <div className="text-content d-flex flex-column">
        <div className="header d-flex flex-row">
          <a href={url} target="_blank">
            <h3 className="title">
              {name} <span className="year text">{`(${year})`}</span>
            </h3>
          </a>
        </div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default NavItemComponent;
