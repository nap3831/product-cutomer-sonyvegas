import React, { Component } from 'react';
import Logo from '../assets/images/logo.jpg';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div className="container mb-5">
                <div className="topMargin row">
                    <div className="col-12">
                        <h1 style={{ borderBottom: '2px solid orange' }}>
                            หน้าแรก
                </h1>
                        <img className="img-responsive my-5" src={Logo} alt="photo me" width="100%" />
                    </div >
                </div>
            </div>
        )
    }
}

export default Home;
