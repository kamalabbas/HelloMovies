import { Outlet } from "react-router-dom";
import NavbarComponent from "../component/NavBarComponent";

export const MainLayout = () => {
  return (
    <>  
    <div className="container">
        <NavbarComponent />

        <div className="my-4">
          <Outlet />
        </div>
    </div>
    </>
  );
};
