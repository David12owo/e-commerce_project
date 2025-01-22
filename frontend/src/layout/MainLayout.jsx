import { Outlet } from "react-router";
import Navbar from "../components/ui/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
