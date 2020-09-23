import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <React.Fragment>
        <header className={this.props.hero}>{this.props.children}</header>
      </React.Fragment>
    );
  }
}
Hero.defaultProps = {
  hero: "defaultHero"
};
export default Hero;
