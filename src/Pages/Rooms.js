import React from "react";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import RoomContainer from "../components/Roomcontainer";
const Rooms = () => {
  return (
    <React.Fragment>
      <Hero hero={"roomsHero"}>
        <Banner title="our rooms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomContainer />
    </React.Fragment>
  );
};

export default Rooms;
