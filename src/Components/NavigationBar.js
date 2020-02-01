import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class NavigationBar extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="col-3">
                        <div className="sidebar">
                            <NavLink className="mt-5 pt-3" to="/Home">หน้าหลัก</NavLink>
                            <NavLink className="mt-5 pt-3 " to="/Tutorial">วีดีโอสอน</NavLink>
                            <NavLink className="mt-5 pt-3 " to="/About">เกี่ยวกับเรา</NavLink>
                            <NavLink className="mt-5 pt-3 " to="/History">ประวัติความเป็นมา</NavLink>
                        </div>
                    </div>
            </React.Fragment>
        )
    }
}
export default (NavigationBar);
