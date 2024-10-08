import React from "react";
import { AboutUs, Chef, Hero, Menu, Navbar } from "./components";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <AboutUs/>
      <Menu/>
      <Chef/>
    </main>
  );
};

export default App;
