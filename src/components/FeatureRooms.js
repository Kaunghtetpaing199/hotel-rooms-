import React, { Component } from "react";
import { RoomContext } from "../Context";
import Title from "./Title";
import Loading from "./Loading";
import Room from "./room";
class FeatureRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map((room) => {
      return <Room key={room.id} room={room} />;
    });
    return (
      <React.Fragment>
        <section className="featured-rooms">
          <Title title="featured rooms" />
          <div className="featured-rooms-center">
            {loading ? <Loading /> : rooms}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default FeatureRooms;
