import React from "react";
import { connect } from "react-redux";
import { makeItGo, makeItStop } from "../store";

const Play = (props) => {
  return (
    <div
      id="play"
      onClick={() => {
        if(props.BPM===0)return
        if (props.interval === 0) props.go(props.refs);
        else props.stop();
      }}
    >
      play
    </div>
  );
};

const mapState = (state) => {
  return {
    interval: state.interval,
    BPM: state.BPM
  };
};
const mapDispatch = (dispatch) => {
  return {
    go: (refs) => dispatch(makeItGo(refs)),
    stop: () => dispatch(makeItStop()),
  };
};

export default connect(mapState,mapDispatch)(Play);
