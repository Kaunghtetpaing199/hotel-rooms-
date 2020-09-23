import React from "react";

const Banner = ({ title, subtitle, children }) => {
  return (
    <React.Fragment>
      <div className="banner">
        <h1>{title}</h1>
        <div />
        <p>{subtitle}</p>
        {children}
      </div>
    </React.Fragment>
  );
};

export default Banner;
