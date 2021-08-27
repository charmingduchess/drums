import React from "react";
import { connect } from "react-redux";
import { makeItChange } from "../store";
import { Range } from "react-range";

const Tempo = (props) => {
  return (
    <select onChange={(e)=>props.changeBPM(e.target.value)}>
        <option>Select a Tempo</option>
        <option value = {60}> Andante</option>
        <option value = {100}> ElectroPop</option>
        <option value = {128}> House</option>
        <option value = {180}>Gabber</option>
    </select>
  );
};

const mapDispatch = (dispatch) => {
  return {
    changeBPM: (BPM) => dispatch(makeItChange(BPM)),
  };
};

export default connect(null, mapDispatch)(Tempo);
