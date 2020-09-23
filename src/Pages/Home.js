import React from "react";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Services from "../components/Services";
import { Link } from "react-router-dom";
import FeatureRooms from "../components/FeatureRooms";
const Home = () => {
  return (
    <React.Fragment>
      <Hero>
        <Banner title="luxurious rooms" subtitle="deluxe room starting ar $299">
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeatureRooms />
    </React.Fragment>
  );
};

export default Home;
