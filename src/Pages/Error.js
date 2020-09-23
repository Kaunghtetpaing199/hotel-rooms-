import React from "react";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <React.Fragment>
      <Hero>
        <Banner title="404" subtitle="page not found">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
    </React.Fragment>
  );
};

export default Error;
