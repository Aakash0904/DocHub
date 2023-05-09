import React, { useEffect, useState } from "react";
import axios from "axios";
import "./global.css";
import ConList from "./pages/list/ConList";
import "./pages/list/ConList.css";
import "./components/common/footer.css";
import "./pages/home/home.css";
import "./pages/about/about.css";
import "./pages/appointment/appointment.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Appointment from "./pages/appointment/Appointment";
import Home from "./pages/home/home";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  // const [data, setData] =useState({});

  // const getApi=()=>{
  //   axios.get('http://localhost:3004/doctors')
  //   .then((result)=>{
  //     console.log("result bht khrab aa bhaya", result)
  //     setData(result.data);
  //   })
  // };

  // useEffect( ()=>{

  //   console.log('ram ram bhaya');
  //   getApi();
  // }, []);

  return (
  <>

{/* <ConList/> */}
  <BrowserRouter>
  <Header/>
  <Routes>
          {/* <Route exact path="/" element={<Home />} /> */}
          <Route path="" element={<Navigate to="home" />}/>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="appointment" element={<Appointment />} />
          <Route path="blog" element={<Blog />} />
          <Route path="conList" element={<ConList />} />
        </Routes>
      
  <Footer/>
  </BrowserRouter>
  </>
  );
}

export default App;
