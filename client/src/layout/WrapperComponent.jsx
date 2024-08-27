import React from "react";
import Navbar from "./Navbar";

const WrapperComponent = () => (WrappedComponent) => {
  return (props) => {
    return (
      <>
        <Navbar />
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default WrapperComponent;
