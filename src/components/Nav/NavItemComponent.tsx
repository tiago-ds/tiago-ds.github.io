import { NavLink } from "react-router-dom";

interface INavItem {
	name: string;
	path: string;
}

const NavItemComponent: React.FC<INavItem> = ({ name, path }) => {
	return (
		<li>
			{/*
			 * NavLink sets aria-current="page" on the active route only.
			 * `end` stops "/" from matching every nested path.
			 */}
			<NavLink to={path} end={path === "/"}>
				{name}
			</NavLink>
		</li>
	);
};

export default NavItemComponent;
