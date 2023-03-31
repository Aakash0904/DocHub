import "./global.css";
import "./components/common/footer.css";
import "./pages/home/home.css";
import "./pages/about/about.css";
import "./pages/appointment/appointment.css";
import "./pages/services/service.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Appointment from "./pages/appointment/Appointment";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Service from "./pages/services/Service";
import Blog from "./pages/blog/Blog";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="blog" element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
