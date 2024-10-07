import React from "react";
import { AboutUs, Hero, Navbar } from "./components";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <AboutUs/>
    </main>
  );
};

export default App;
