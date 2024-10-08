import React from "react";
import { AboutUs, Chef, Hero, Intro, Menu, Navbar } from "./components";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <AboutUs/>
      <Menu/>
      <Chef/>
      <Intro/>
    </main>
  );
};

export default App;
