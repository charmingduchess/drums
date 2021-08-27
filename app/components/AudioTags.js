import React,{createRef} from 'react'
import instruments from '../instruments'

class AudioTag extends React.Component{
    constructor(){
        super()
        this.audioRefs = instruments.reduce((refs, inst)=>{
            refs[inst.name] = createRef();
            return refs;
        },{})
    }
    
    componentDidMount(){
        this.props.getRefs(this.audioRefs)
    }
    render(){
        return (<div>
            {instruments.map(inst=>{
                return <audio key={inst.src} ref={this.audioRefs[inst.name]} src = {inst.src}></audio>
            })}
        </div>)
    }
}

export default AudioTag