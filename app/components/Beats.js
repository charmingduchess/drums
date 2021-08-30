import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleBeat } from "../store";

class Beats extends Component {
  constructor() {
    super();
    this.state = { className: "off" };
  }
  render() {
    if (!this.props.selectedBeats) return <h1>Loading...</h1>
      const row1 = this.props.selectedBeats.slice(0, 4);
      const row2 = this.props.selectedBeats.slice(4, 8);
      const row3 = this.props.selectedBeats.slice(8, 12);
      const row4 = this.props.selectedBeats.slice(12);
    const gridArray = [row1, row2, row3, row4];
    
    return (
      <div className="beat-container">
        {gridArray.map((row, rowIndex) => {
          return (
            <div key={rowIndex} className={`beat-row ${rowIndex}`}>
              {row.map((beat, i) => {
                const sixteenthValue = rowIndex * 4 + i;
                return (
                  <div
                    key={sixteenthValue}
                    className={
                      (beat ? "on" : "off") +
                      (this.props.currentBeat === sixteenthValue &&
                      this.props.interval !== 0
                        ? " current"
                        : "")
                    }
                    onClick={() => this.props.toggleBeat(sixteenthValue)}
                  >
                    {i === 0
                      ? rowIndex + 1
                      : i === 1
                      ? "e"
                      : i === 2
                      ? "&"
                      : "a"}
                  </div>
                );
              })}
            </div>
          );
        })}
        {/* // this.props.selectedBeats.map((beat, i) => {
        //  return (
        //     <div
        //       key={i + 1}
        //       className={`${i} ${beat ? "on" : "off"}`}
        //       onClick={() => this.props.toggleBeat(i)}
        //     >
        //       {i + 1}
        //     </div>
        //   );
        // }) */}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    selectedBeats: state.selectedInstrument.beats,
    currentBeat: state.beat,
    interval: state.interval,
  };
};

const mapDispatch = (dispatch) => {
  return {
    toggleBeat: (i) => dispatch(toggleBeat(i)),
  };
};
export default connect(mapState, mapDispatch)(Beats);
