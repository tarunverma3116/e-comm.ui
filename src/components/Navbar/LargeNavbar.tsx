import * as React from "react";
import { useState, useEffect } from "react";
import { DivProps } from "react-html-props";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo/logo.png";
import useDarkMode from "../../hooks/theme/useDarkMode";
import DarkModeToggle from "react-dark-mode-toggle";
import { RiShoppingCartLine } from "react-icons/ri";
import useCart from "store/store";

interface INavbarProps extends DivProps {}

const LargeNavbar: React.FunctionComponent<INavbarProps> = (props) => {
  const [colorTheme, setTheme] = useDarkMode();
  const [lightToggle, setLightToggle] = React.useState(
    colorTheme === "dark" ? true : false
  );

  const toggleDarkMode = (checked: any) => {
    setTheme(colorTheme);
    setLightToggle(checked);
  };

  const total = useCart((state) => state.total);
  const totalqty = useCart((state) => state.totalqty);

  const clearCart = useCart((state) => state.clearCart);
  const [mytotal, setTotal] = useState();
  const [mytotalqty, setTotalqty] = useState();

  useEffect(() => {
    setTotal(total);
    setTotalqty(totalqty);
  }, [total]);

  return (
    <div className="flex flex-shrink-0 h-16 px-5 backdrop-blur fixed inset-x-0 top-0 items-stretch z-50">
      <div className="w-64 flex items-center">
        <Link to="/">
          <img className="w-[30px] lg:w-[40px] h-auto" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="flex items-center gap-2 pl-4"></div>
      <div className="flex items-center justify-end flex-grow gap-6">
        <div className="text-white dark:text-black relative">
          <Link to="/cart">
            <RiShoppingCartLine className="text-2xl" />
          </Link>
          {mytotalqty ? (
            <div className="absolute top-[-5px] right-[-5px] flex">
              <span className="text-xs bg-red-500 rounded-full px-1 text-white">
                {mytotalqty}
              </span>
            </div>
          ) : null}
        </div>
        <DarkModeToggle
          onChange={toggleDarkMode}
          checked={lightToggle}
          size={56}
        />
      </div>
    </div>
  );
};

export default LargeNavbar;
