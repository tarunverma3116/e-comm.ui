import { NavLink, useLocation } from "react-router-dom";
import { BiMessageSquareAdd } from "react-icons/bi";
import { CgFeed } from "react-icons/cg";
import { GoHome } from "react-icons/go";
import { MdOutlineCalculate } from "react-icons/md";

type Props = {};

const MobileNav = (props: Props) => {
  const { pathname } = useLocation();

  const mainNavSettings = [
    {
      label: "Home",
      link: "/",
      icon: <GoHome />,
      active: pathname === "/" || pathname === "/",
    },
    {
      label: "Products",
      link: "/products",
      icon: <CgFeed />,
      active: pathname === "/products" || pathname === "/products",
    },
    {
      label: "Create",
      link: "/create",
      icon: <BiMessageSquareAdd />,
      active: pathname === "/create" || pathname === "/create",
    },
    {
      label: "Calculate",
      link: "/test",
      icon: <MdOutlineCalculate />,
      active: pathname === "/test" || pathname === "/test",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-14 backdrop-blur-xl rounded-md">
      <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
        {mainNavSettings.map((navItem, key: any) => (
          <NavLink
            to={navItem.link}
            type="button"
            key={key}
            className="inline-flex flex-col cursor-pointer text-white dark:text-black rounded-md items-center justify-center px-5 hover:text-primary dark:hover:text-primary group"
          >
            {navItem.icon}
            <span className="text-sm">{navItem.label}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MobileNav;
