import { NavLink } from "react-router-dom";

interface INavItem {
	name: string;
	path: string;
}

const NavItemComponent: React.FC<INavItem> = ({ name, path }) => {
	return (
		<li>
			{/* `end` stops "/" matching every nested path. */}
			<NavLink to={path} end={path === "/"}>
				{name}
			</NavLink>
		</li>
	);
};

export default NavItemComponent;
