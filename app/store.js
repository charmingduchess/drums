import { createStore, applyMiddleware } from "redux";
import {createLogger} from "redux-logger";
import instruments from "./instruments";
import thunkMiddleware from "redux-thunk";
import playFunc from './playFunc'

const initialState = {
  interval: 0,
  BPM: 128,
  selectedInstrument: {},
  instruments: instruments,
  beat: 0,
};

const SELECT_INSTRUMENT = "select instrument";
export const selectInstrument = (instrument) => {
  return {
    type: SELECT_INSTRUMENT,
    instrument: instrument,
  };
};

const TOGGLE_BEAT = 'toggle beat';
export const toggleBeat = (beatToChange) => {
  return {
    type: TOGGLE_BEAT,
    beatToChange: beatToChange,
  };
};

const STOP = 'stop';
const stop = () => {
  return {
    type: STOP,
  };
};

export const makeItStop = () => {
  return (dispatch, getState) => {
    const state = getState();
    clearInterval(state.interval);
    dispatch(stop());
  };
};

const GO = 'go';
const go = (interval, beat = 1) => {
  return {
    type: GO,
    interval,
    beat,
  };
};

export const makeItGo = (refs) => {
  return (dispatch, getState) => {
    const state = getState();
    let beat = state.beat;
    const int = setInterval(() => {
      playFunc(beat, state, refs);
      dispatch(updateBeat(beat));
      beat === 15 ? (beat = 0) : beat++;
    }, 15000 / state.BPM);
    dispatch(go(int, beat));
  };
};

const UPDATEBEAT = 'update beat';
const updateBeat = (beat) => {
  return {
    type: UPDATEBEAT,
    beat,
  };
};

const CHANGEBPM = 'changebpm';
const changeBPM = (BPM) => {
  return {
    type: CHANGEBPM,
    BPM,
  };
};
export const makeItChange = (bpm) => {
  return (dispatch, getState) => {
    const state = getState();
    if (state.interval !== 0) {
      dispatch(makeItStop());
      dispatch(changeBPM(bpm));
      dispatch(updateBeat(state.beat+1))
      dispatch(makeItGo());
    } else dispatch(changeBPM(bpm));
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATEBEAT:
      return {
        ...state,
        beat: action.beat,
      };
    case CHANGEBPM:
      return {
        ...state,
        BPM: action.BPM,
      };
    case GO:
      return {
        ...state,
        interval: action.interval,
      };

    case STOP:
      return {
        ...state,
        interval: 0,
      };
    case SELECT_INSTRUMENT:
      return { ...state, selectedInstrument: action.instrument };
    case TOGGLE_BEAT:
      const updatedInstrument = state.selectedInstrument;
      const newBeats = updatedInstrument.beats.map((beat, i) => {
        if (action.beatToChange === i) return !beat;
        return beat;
      });
      updatedInstrument.beats = newBeats;
      const updatedInstrumentsArray = state.instruments.map((i) => {
        if (i.name === updatedInstrument.name) return updatedInstrument;
        else return i;
      });
      return { ...state, instruments: updatedInstrumentsArray };
    default:
      return state;
  }
};

const logger = createLogger({predicate: (state,action)=>action.type !== UPDATEBEAT,
  level:'info', collapsed: true})

export const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware
    , logger
  )
);
