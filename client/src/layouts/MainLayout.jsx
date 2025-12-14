import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main className="flex-1 w-full flex justify-center">
        <div className="w-full max-w-[1199px] px-6 sm:px-8 py-10">
          <Outlet />
        </div>
      </main>

      <Footer />

    </div>
  );
}
