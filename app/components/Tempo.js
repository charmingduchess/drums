import React from "react";
import { connect } from "react-redux";
import { makeItChange } from "../store";
import { Range } from "react-range";

class Tempo extends React.Component {
  constructor(){
    super()
    this.state = {inputBPM: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e){
    e.preventDefault();
    console.log('submit')
    this.props.changeBPM(parseInt(this.state.inputBPM, 10), this.props.refs)
  }
  handleChange(e){
    console.log('input', e)
    this.setState({inputBPM: e.target.value}) 
  }
  render() {
    return (<form onSubmit = {this.handleSubmit}id ='tempo'>
    <input type ="number" 
            value = {this.state.inputBPM} 
            onChange = {this.handleChange}
            placeholder="BPM" ></input>
    </form>)
  }
}

const mapDispatch = (dispatch) => {
  return {
    changeBPM: (BPM, refs) => dispatch(makeItChange(BPM, refs)),
  };
};
const mapState = (state)=>{
  return{
    BPM: state.BPM
  }
}

export default connect(mapState, mapDispatch)(Tempo);

// <select onChange={(e)=>props.changeBPM(e.target.value, props.refs)}>
//     <option>Select a Tempo</option>
//     <option value = {60}> Andante</option>
//     <option value = {100}> ElectroPop</option>
//     <option value = {128}> House</option>
//     <option value = {180}>Gabber</option>
// </select>
