import { Outlet } from "react-router-dom";
import NavbarComponent from "../component/NavBarComponent";
import { Footer } from "../component/Footer";

export const MainLayout = () => {
  return (
    <>
      <NavbarComponent />
      <Outlet />
      <Footer />
    </>
  );
};
