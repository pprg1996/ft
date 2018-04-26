import React from "react";
import "./loginRegister.css";
import { Input } from "reactstrap";

class LoginRegister extends React.Component {
    render() {
        return (
            <div id="loginRegisterScreen">
                <div id="loginRegField">
                    <label htmlFor="">Login</label>
                    <Input type="text" placeholder="Email" />
                    <Input type="password" placeholder="Password" />
                    <label htmlFor="">Register</label>
                    <Input type="text" placeholder="Email" />
                    <Input type="password" placeholder="Password" />
                    <Input type="password" placeholder="Repeat Password" />
                </div>
                </div>
        )
    }
}

export default LoginRegister;