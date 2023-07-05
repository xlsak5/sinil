import React from "react";

import Modal from "./component/Modal.jsx";
import Header from "./component/Header.jsx";
import Slider from "./component/Slider.jsx";
import Step1 from "./component/Step1.jsx";
import Step2 from "./component/Step2.jsx";
import Step3 from "./component/Step3.jsx";
import Step4 from "./component/Step4.jsx";
import Footer from "./component/Footer.jsx";

import "./style.scss";
import "./script/javascript.js";

function App() {
  return (
    <>
      <Modal />
      <Header />
      <Slider />
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Footer />
    </>
  )
}

export default App;