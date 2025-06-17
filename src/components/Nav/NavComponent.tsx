import NavItemComponent from "./NavItemComponent";
import "./nav.css";

export default function NavComponent() {
  const NAV = [
    {
      name: "Home",
      path: "/",
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

  return (
    <ul className="nav-bar d-flex justify-content-center align-items-center gap-3 gap-lg-5">
      {NAV.map(({ name, path }) => {
        return <NavItemComponent name={name} path={path} />;
      })}
    </ul>
  );
}
