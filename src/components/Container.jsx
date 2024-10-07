import React from "react";

const Container = ({ children,className }) => {
  return (
    <section className={`px-5 py-10 container mx-auto ${className}`}>{children}</section>
  );
};

export default Container;
