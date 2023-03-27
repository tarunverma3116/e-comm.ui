import * as React from "react";
import { FiBell } from "react-icons/fi";
import { DivProps } from "react-html-props";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
import SearchBox from "./SearchBox";
import useDarkMode from "../../hooks/theme/useDarkMode";
import DarkModeToggle from "react-dark-mode-toggle";

interface INavbarProps extends DivProps {}

const LargeNavbar: React.FunctionComponent<INavbarProps> = (props) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    navigate("/login");
  };

  const [colorTheme, setTheme] = useDarkMode();
  const [lightToggle, setLightToggle] = React.useState(
    colorTheme === "dark" ? true : false
  );

  const toggleDarkMode = (checked: any) => {
    setTheme(colorTheme);
    setLightToggle(checked);
  };

  return (
    <div className="flex flex-shrink-0 h-16 px-5 backdrop-blur fixed inset-x-0 top-0 items-stretch z-50">
      <div className="w-64 flex items-center">
        <Link to="/home">
          <img className="w-[30px] lg:w-[40px] h-auto" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="flex items-center gap-2 pl-4"></div>
      <div className="flex items-center justify-end flex-grow gap-6">
        <DarkModeToggle
          onChange={toggleDarkMode}
          checked={lightToggle}
          size={56}
          // onClick={handleThemeSwitch}
        />
        <SearchBox />
        {/* <button onClick={() => handleLogout()}>
          <FiBell className="text-primary h-5 w-auto" />
        </button> */}
      </div>
    </div>
  );
};

export default LargeNavbar;
