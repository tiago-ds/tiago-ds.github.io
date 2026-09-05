import NavItemComponent from "./NavItemComponent";
import "./nav.css";

const NAV = [
	{
		name: "Home",
		path: "/",
	},
	{
		name: "About Me",
		path: "/about-me",
	},
	{
		name: "Projects",
		path: "/projects",
	},
	{
		name: "Contact",
		path: "/contact",
	},
];

export default function NavComponent() {
	return (
		<nav>
			<ul className="nav-bar d-flex justify-content-center align-items-center gap-3 gap-lg-5">
				{NAV.map(({ name, path }) => (
					<NavItemComponent key={path} name={name} path={path} />
				))}
			</ul>
		</nav>
	);
}
