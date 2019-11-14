import React, { Component } from 'react';
import {
    NavItem, Navbar, Nav
} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class NavigationBar extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <Navbar className="text-center navbar-custom fixed-bottom" light expand="lg">
                        <Nav navbar className=" mx-auto">
                            <NavItem className="navbarLink">
                                <NavLink to="/">หน้าหลัก</NavLink>
                            </NavItem>
                            <NavItem className="navbarLink">
                                <NavLink to="/Product">สินค้าทั้งหมด</NavLink>
                            </NavItem>
                            <NavItem className="navbarLink">
                                <NavLink to="/News">สินค้าใหม่</NavLink>
                            </NavItem>
                            <NavItem className="navbarLink">
                                <NavLink to="/Promotion">สินค้าโปรโมชั่น</NavLink>
                            </NavItem>
                        </Nav>

                    </Navbar>
                </div>
            </React.Fragment>
        )
    }
}

export default NavigationBar
