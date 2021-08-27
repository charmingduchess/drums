import React from "react";
import Tempo from "./Tempo";
import Play from "./Play";
import Rack from "./Rack";
import Beats from "./Beats";
import AudioTag from "./AudioTags";
import { connect } from "react-redux";
//import {toggleBeat,changeBPM,makeItGo,makeItStop,selectInstrument} from '../store'

class Machine extends React.Component {
  constructor() {
    super();
    this.getRefs = this.getRefs.bind(this);
  }
  getRefs(refs) {
    this.refs = refs; 
  }
  render() {
    return (
      <div id="container">
        <AudioTag getRefs={this.getRefs} />
        <Rack />
        <Beats />
        <Play refs = {this.refs}/>
        <Tempo />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    instruments: state.instruments,
  };
};


export default connect(mapStateToProps)(Machine);
