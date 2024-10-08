import React from "react";
import { AboutUs, Awards, Chef, FindUs, Gallery, Hero, Intro, Menu, Navbar } from "./components";

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
      <FindUs/>
    </main>
  );
};

export default App;
