import { Outlet } from "react-router";
import Navbar from "../navigation/Navbar";
import Footer from "../layout/Footer";

export default function MainLayout() {
  return (
    <div className="site">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}