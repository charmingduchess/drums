  export default (beat,state, refs)=>{
    state.instruments.forEach((instrument) => {
      if (instrument.beats[beat]) {
          console.log(beat, instrument.name)
        refs[instrument.name].current.play();
      }
    });
  }