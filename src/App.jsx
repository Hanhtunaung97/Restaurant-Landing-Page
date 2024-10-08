import React from "react";
import { AboutUs, Awards, Chef, Gallery, Hero, Intro, Menu, Navbar } from "./components";

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
      <Gallery/>
    </main>
  );
};

export default App;
