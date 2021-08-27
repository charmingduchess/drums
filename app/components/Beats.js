import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleBeat } from "../store";

class Beats extends Component {
  constructor() {
    super();
    this.state = { className: "off" };
    // this.handleClick = this.handleClick.bind(this)
  }
  // handleClick(i,beat){
  //   this.props.toggleBeat(i)
  //   if(!beat)this.setState({className:'on'})
  //   else this.setState({className:'off'})
  // }
  render() {
    if (!this.props.selectedBeats) return <div></div>;
    return (
      <div id="beat-container">
        {this.props.selectedBeats.map((beat, i) => {
         return (
            <button
              key={i + 1}
              className={beat ? "on" : "off"}
              onClick={() => this.props.toggleBeat(i)}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    selectedBeats: state.selectedInstrument.beats,
  };
};

const mapDispatch = (dispatch) => {
  return {
    toggleBeat: (i) => dispatch(toggleBeat(i)),
  };
};
export default connect(mapState, mapDispatch)(Beats);
