import "./global.css";
import "./pages/home/home.css";
import "./pages/about/about.css";
import "./pages/appointment/appointment.css";
import "./components/common/footer.css";
import Header from "./components/common/Header";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Appointment from "./pages/appointment/Appointment";
import Blog from "./pages/blog/Blog";
import Footer from "./components/common/Footer";
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
          {/* <Route path="service" element={<Service />} /> */}
          <Route path="appointment" element={<Appointment />} />
          <Route path="blog" element={<Blog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
