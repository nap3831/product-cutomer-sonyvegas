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
            <React.Fragment>
                <div className="container mb-5">
                    <div className="topMargin row container-home">
                        <div className="col-12">
                            <h1 style={{ borderBottom: '2px solid orange' }}>
                                หน้าแรก
                        </h1>
                            <h5 className="my-5">
                                ยินดีต้อนรับเข้าสู่เว็ปไซต์<span style={{ borderBottom: '3px solid red', width: '20px' }}>สอนการตัดต่อคลิปวีดีโอ </span>
                            </h5>
                            <img className="img-responsive my-5" src={Logo} alt="photome" width="100%" />
                            <p className="lead">ตัดต่อวีดีโอได้สุดเเสนง่ายดาย ทำได้ด้วย Sony Vegas</p>
                        </div >
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;
