import "../global_styles.css";
import React, { Component } from "react";

class FilterButton extends Component {
  render() {
    return (
      <button className="tiny_text bg-buttonBackground px-3 py-1 rounded-[25px]">
        {this.props.text}
      </button>
    );
  }
}

export default FilterButton;
