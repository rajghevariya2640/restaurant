import { Outlet } from "react-router-dom";
import Header from "../shared/Header";
import Footer from "../shared/Footer";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
