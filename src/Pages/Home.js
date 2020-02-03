import React, { Component } from 'react';
import Logo from '../assets/images/logo.jpg';
class Home extends Component {
    componentWillMount() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="container mb-5">
                    <div className="topMargin row container-home">
                        <div className="col-12">
                            <h1 style={{ borderBottom: '2px solid orange',fontSize:'50px' }}>
                                หน้าแรก
                        </h1>
                            <h5 className="my-5 size-text">
                                ยินดีต้อนรับเข้าสู่เว็ปไซต์<span style={{ borderBottom: '3px solid red', width: '20px',paddingTop:'20px' }}>สอนการตัดต่อคลิปวีดีโอ </span>
                            </h5>
                            <img className="img-responsive my-5" src={Logo} alt="photome" width="100%" />
                            <p className="size-text">ตัดต่อวีดีโอได้สุดเเสนง่ายดาย ทำได้ด้วย Sony Vegas</p>
                        </div >
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;
