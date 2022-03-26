import React, { useState } from "react";
import Navbar from "../components/Navbar/navbar.js";
import Sidebar from "../components/Sidebar/sidebar.js";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </>
  );
};
export default Home;
