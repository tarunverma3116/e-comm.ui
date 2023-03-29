import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import SideNav from "../../components/SideNav";
import { useNavigate } from "react-router-dom";
import MobileNav from "components/SideNav/MobileNav";

type Props = {};

const Layout = (props: Props) => {
  return (
    <div className="hero-section flex flex-col flex-grow max-h-full max-w-full min-h-[100vh]">
      <Navbar />
      <div className="flex flex-grow max-h-full min-h-0 relative max-w-full overflow-x-hidden">
        <SideNav />
        <div className="min-h-0 max-h-full max-w-full overflow-y-auto flex-grow scrollbar-hide">
          <div className="outlet relative">
            <Outlet />
            <div className="bottom-0 flex lg:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
