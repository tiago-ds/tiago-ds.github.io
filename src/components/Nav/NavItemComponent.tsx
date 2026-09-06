import { NavLink } from "react-router-dom";

interface INavItem {
	name: string;
	path: string;
}

const NavItemComponent: React.FC<INavItem> = ({ name, path }) => {
	return (
		<li>
			{/* `end` stops "/" matching every nested path. */}
			<NavLink
				to={path}
				end={path === "/"}
				className="text-title hover:text-[#ceb3db] block whitespace-nowrap rounded-[14px] px-[0.55rem] py-[0.825rem] no-underline hover:bg-[#9e7cb1bf] hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.19)] sm:px-6"
			>
				{name}
			</NavLink>
		</li>
	);
};

export default NavItemComponent;
