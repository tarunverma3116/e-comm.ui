import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import NavbarLink from "../Navbar/NavbarLink";
import { useLocation } from "react-router-dom";
import { BiMessageSquareAdd } from "react-icons/bi";
import { CgFeed } from "react-icons/cg";
import { TfiArrowCircleRight, TfiArrowCircleLeft } from "react-icons/tfi";
import { GoHome } from "react-icons/go";

interface ISideNavProps {}

const SideNav: React.FunctionComponent<ISideNavProps> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isCollapsed, setIsCollapsed] = useState(true);
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
  ];

  return (
    <div
      className={twMerge(
        "overflow-hidden transition-all border-t-5 z-100 border-indigo-400 rounded hidden lg:flex",
        isCollapsed ? "w-18" : "w-40"
      )}
    >
      <div
        className={twMerge(
          "w-40  flex flex-col text-white fixed inset-y-0 left-0 rounded",
          isCollapsed ? "w-18" : "w-40"
        )}
      >
        <nav className="flex-col flex px-2 pt-14 mt-12">
          <ul className="flex flex-col gap-2">
            {mainNavSettings.map((navItem, key: any) => (
              <SideNavListItem
                label={isCollapsed ? "" : navItem.label}
                active={navItem.active}
                icon={navItem.icon}
                link={navItem.link}
                key={key}
              />
            ))}
          </ul>
        </nav>
        <ul className="flex flex-col gap-2 mt-auto ml-1 mb-2">
          <button
            className="text-white dark:text-black font-black px-5 py-2 items-center"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? <TfiArrowCircleRight /> : <TfiArrowCircleLeft />}
          </button>
        </ul>
      </div>
    </div>
  );
};

interface ISideNavListItemProps {
  label: React.ReactNode;
  icon: React.ReactElement;
  active?: boolean;
  link: string;
}

const SideNavListItem: React.FunctionComponent<ISideNavListItemProps> = ({
  label,
  icon,
  active,
  link,
}) => {
  return (
    <NavbarLink
      to={link}
      isActive={window.location && window.location.pathname === "/marketplace"}
    >
      <li
        className={twMerge(
          "flex px-3 gap-2 py-2 items-center text-white dark:text-black",
          active &&
            "bg-[#562ebb] rounded-xl py-3 dark:text-white text-white font-bold"
        )}
      >
        {React.cloneElement(icon, {
          className: twMerge("w-5 h-auto", icon.props.className),
        })}
        {label}
      </li>
    </NavbarLink>
  );
};

export default SideNav;
