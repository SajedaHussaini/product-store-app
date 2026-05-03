import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <Container sx={{ mt: 3 }}>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
}
