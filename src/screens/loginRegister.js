import React from "react";
import "./loginRegister.css";
import { Input } from "reactstrap";

class LoginRegister extends React.Component {

    constructor() {
        super();
        this.change = this.change.bind(this);
        this.click = this.click.bind(this);
        this.state = { name: "" };
    }

    click() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                console.log(this.responseText);
            }
        };
        xhttp.open("GET", this.state.name, true);
        xhttp.send();
        console.log(this.state.name);
    }

    change(e) {
        this.setState({ name: e.target.value });
    }

    render() {
        return (
            <div id="loginRegisterScreen">
                <div id="loginRegField">
                    <form action="q" method="get">
                        <label htmlFor="">Login</label>
                        <Input type="text" onChange={e => this.change(e)} name="name" placeholder="Email" />
                        <Input type="password" placeholder="Password" />
                        <label htmlFor="">Register</label>
                        <Input type="text" placeholder="Email" />
                        <Input type="password" placeholder="Password" />
                        <Input type="password" placeholder="Repeat Password" />
                        <input type="submit" value="Submit" />
                    </form>
                    <button onClick={this.click}>qweewq</button>
                </div>
            </div>
        )
    }
}

export default LoginRegister;