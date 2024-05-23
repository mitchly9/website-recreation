import "../global_styles.css";

import React, { Component } from "react";

class SongItem extends Component {
  render() {
    return (
      <article className="flex w-full h-16 gap-2 place-items-center">
        <img
          src={require(".././icons/example_album.jpg")}
          className="h-full max-w-full object-contain"
          alt="Search Button"
        />
        <div className="h-fit flex flex-col justify-center">
          <h1 className="small_text">{this.props.title}</h1>
          <h2 className="sub_text">
            {this.props.type} ● {this.props.creator}
          </h2>
        </div>
      </article>
    );
  }
}

export default SongItem;
