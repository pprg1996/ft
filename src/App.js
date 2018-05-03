import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";
import Maxes from "./screens/maxes";

class App extends Component {
    render() {
        return (
            <div id="appDiv">
                <div id="sideBar">
                    <ul id="sideBarList">
                        <li><Link to="/maxes">Maxes</Link></li>
                    </ul>
                </div>

                <div id="content">
                    <Route path="/maxes" component={Maxes} />
                </div>
            </div>
        );
    }
}

export default App;