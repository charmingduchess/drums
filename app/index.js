// Your code here!
import React, { createRef } from "react";
import ReactDOM from "react-dom";
import ConMachine from './components/Machine'
import {Provider,connect} from 'react-redux'
import {store} from './store.js'



ReactDOM.render(<Provider store ={store}><ConMachine /></Provider>, document.querySelector("#app"));
