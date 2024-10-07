import React from "react";
import { AboutUs, Hero, Menu, Navbar } from "./components";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <AboutUs/>
      <Menu/>
    </main>
  );
};

export default App;
