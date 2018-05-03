import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import classnames from 'classnames';

class Maxes extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <Link to="/maxes/bench">
                            <NavLink className={classnames({ active: this.state.activeTab === '1' })}
                                onClick={() => { this.toggle('1'); }}>
                                Bench
                        </NavLink>
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/maxes/squat">
                            <NavLink className={classnames({ active: this.state.activeTab === '2' })}
                                onClick={() => { this.toggle('2'); }}>Squat
                        </NavLink>
                        </Link>
                    </NavItem>
                </Nav>
            </div>
        )
    }
}

export default Maxes;