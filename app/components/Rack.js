import React from "react";
import { connect } from "react-redux";
import Instrument from "./Instrument";


const Rack = (props) => {
  return (
    <div id="rack">
      {props.instruments.map((inst) => 
       <Instrument key = {inst.id} thisInstrument = {inst}/>
      )}
    </div>
  );
};

const mapStateToProps = (state)=>{
  return {instruments : state.instruments,}
}



export default connect(mapStateToProps,null)(Rack)
