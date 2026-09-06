import NavItemComponent from "./NavItemComponent";

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
			<ul className="font-title flex min-h-[90px] list-none items-center justify-center gap-0 bg-[#ab85bf] pl-0 text-[13px] font-bold uppercase shadow-[0px_4px_4px_0px_rgba(0,0,0,0.19)] sm:gap-4 sm:text-base lg:gap-12">
				{NAV.map(({ name, path }) => (
					<NavItemComponent key={path} name={name} path={path} />
				))}
			</ul>
		</nav>
	);
}
