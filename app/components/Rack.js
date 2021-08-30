import React from "react";
import { connect } from "react-redux";
import Instrument from "./Instrument";
import Beats from './Beats'


const Rack = (props) => {
  return (
    <div id="rack">
      <div className = 'instruments'>
      {props.instruments.map((inst) => 
       <Instrument key = {inst.id} thisInstrument = {inst}/>
      )}</div>
      <Beats />
    </div>
  );
};

const mapStateToProps = (state)=>{
  return {instruments : state.instruments,}
}



export default connect(mapStateToProps,null)(Rack)
