import React from "react";

const Container = ({ children,className }) => {
  return (
    <section className={`section__padding container mx-auto ${className}`}>{children}</section>
  );
};

export default Container;
