import { Link } from "react-router-dom";

interface INavItem {
  name: string;
  path: string;
}

const NavItemComponent: React.FC<INavItem> = ({ name, path }) => {
  return (
    <li>
      <Link aria-current="page" to={path}>
        {name}
      </Link>
    </li>
  );
};

export default NavItemComponent;
