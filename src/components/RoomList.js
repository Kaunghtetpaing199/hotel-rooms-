import React, { Component } from "react";
import Room from "./room";
const RoomList = ({ rooms }) => {
  if (rooms === undefined || rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }
  return (
    <React.Fragment>
      <section className="roomslist">
        <div className="roomslist-center">
          {rooms.map((item) => {
            return <Room key={item.id} room={item} />;
          })}
        </div>
      </section>
    </React.Fragment>
  );
};

export default RoomList;
