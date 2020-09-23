import React, { Component } from "react";
import items from "./data";

let RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };
  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    let maxPrice = Math.max(...rooms.map((item) => item.price));
    let maxSize = Math.max(...rooms.map((item) => item.size));
    this.setState({
      rooms,
      sortedRooms: rooms,
      featuredRooms,
      loading: false,
      price: maxPrice,
      maxPrice,
      maxSize
    });
  }
  formatData = (items) => {
    let tempsItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempsItems;
  };

  getRoom = (slug) => {
    let tempRooms = [...this.state.rooms];
    let room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  handleChange = (event) => {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    );
  };
  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;
    let tempRooms = [...rooms];
    capacity = parseInt(capacity);
    price = parseInt(price);
    if (type != "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }
    if (capacity !== 1) {
      tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
    }
    tempRooms = tempRooms.filter(
      (room) => room.size >= minSize && room.size <= maxSize
    );
    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }
    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }
    tempRooms = tempRooms.filter((room) => room.price <= price);
    this.setState({
      sortedRooms: tempRooms
    });
  };
  render() {
    return (
      <React.Fragment>
        <RoomContext.Provider
          value={{
            ...this.state,
            getRoom: this.getRoom,
            handleChange: this.handleChange
          }}>
          {this.props.children}
        </RoomContext.Provider>
      </React.Fragment>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;
export { RoomConsumer, RoomProvider, RoomContext };
