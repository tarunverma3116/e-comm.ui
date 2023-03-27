import * as React from "react";
import LargeNavbar from "./LargeNavbar";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  return (
    <>
      <LargeNavbar className="invisible xl:visible" />
    </>
  );
};

export default Navbar;
