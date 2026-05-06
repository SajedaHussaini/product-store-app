import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import HeaderInfo from "../components/HeaderInfo";

export default function Layout() {
  const location= useLocation();

  const isHome= location.pathname === "/";
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 3 }}>
      {isHome && <HeaderInfo />}
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}
