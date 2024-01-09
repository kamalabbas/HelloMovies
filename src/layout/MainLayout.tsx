import { Outlet } from "react-router-dom";
import NavbarComponent from "../component/NavBarComponent";
import { Container } from "react-bootstrap";

export const MainLayout = () => {
  return (
    <>
      <NavbarComponent />

      <Container className="my-4">
        <Outlet />
      </Container>
    </>
  );
};
