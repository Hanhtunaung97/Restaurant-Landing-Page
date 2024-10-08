import React from "react";
import { AboutUs, Awards, Chef, Hero, Intro, Menu, Navbar } from "./components";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <AboutUs/>
      <Menu/>
      <Chef/>
      <Intro/>
      <Awards/>
    </main>
  );
};

export default App;
