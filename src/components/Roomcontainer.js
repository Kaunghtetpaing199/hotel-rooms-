import React, { Component, useContext } from "react";
import { RoomContext } from "../Context";
import Loading from "./Loading";
import Roomfilter from "../components/Roomfilter";
import RoomList from "../components/RoomList";
const RoomContainer = () => {
  let room = useContext(RoomContext);
  let { loading, sortedRooms, rooms } = room;
  if (loading) return <Loading />;
  return (
    <React.Fragment>
      <Roomfilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </React.Fragment>
  );
};

export default RoomContainer;
