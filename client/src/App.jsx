import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Programs from "./pages/Programs/Programs";
import Events from "./pages/Events/Events";
import GetInvolved from "./pages/GetInvolved/GetInvolved";
import Partners from "./pages/Partners/Partners";
import Donate from "./pages/Donate/Donate";
import Contact from "./pages/Contact/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout route MUST have a path */}
        <Route path="/" element={<MainLayout />}>
          
          {/* Home should be index, not "/" */}
          <Route index element={<Home />} />

          <Route path="about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="events" element={<Events />} />
          <Route path="getinvolved" element={<GetInvolved />} />
          <Route path="partners" element={<Partners />} />
          <Route path="donate" element={<Donate />} />
          <Route path="contact" element={<Contact />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}
