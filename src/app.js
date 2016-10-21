import React from 'react';
import ReactDOM from 'react-dom';
import { TrafficMap } from "react-network-diagrams";
import { Request } from "./components.js";
var topology = require("./topology.js");
require('expose?$!expose?jQuery!jquery');
require("bootstrap-webpack");
require("chosen-js");
require("../node_modules/chosen-js/chosen.css");
class App extends React.Component {
    render(){
        return (
            <TrafficMap
                bounds={{x1: 0, y1: 0, x2: 200, y2: 150}}
                topology={topology}
                edgeDrawingMethod="bidirectionalArrow" />
        );
    }
}

ReactDOM.render(<Request />,document.getElementById("body"));
