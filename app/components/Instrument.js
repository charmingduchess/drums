 import React from "react";
import { connect } from "react-redux";
import {selectInstrument} from '../store'

const Instrument = (props) => {
  const thisInstrument = props.thisInstrument.name;
  const isItSelected =
    props.selectedInstrument.name === thisInstrument ? " selected" : "";
  return (
    <div 
    id = {thisInstrument}
      className={'instrument' + isItSelected}
      onClick={() => props.selectInstrument(props.thisInstrument)}
    >
      {thisInstrument}
    </div>
  );
};

const mapStateToProps = (state)=>{
  return{
    selectedInstrument: state.selectedInstrument
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    selectInstrument : (i)=>dispatch(selectInstrument(i))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Instrument);
