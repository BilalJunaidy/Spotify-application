import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage"


export default class APP extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <HomePage />
        </div>
        )
        
    }
}   

const APPDIV = document.getElementById("app");
render(<APP />, APPDIV)
