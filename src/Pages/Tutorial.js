import React, { Component } from 'react'
import CardContent from '../Components/CardContent';
import Logo from '../assets/images/logo.jpg';
class Tutorial extends Component {
    componentWillMount() {
        window.scrollTo({
            top: 400,
            behavior: 'smooth',
        })
    }
    render() {
        let videoList = [
            {
                id: 1,
                img: Logo,
                subtitle: 'ขั้นตอนการติดตั้งโปรแกรม',
                title: 'ตอนที่ 1',
            },
            {
                id: 2,
                img: Logo,
                subtitle: 'การตั้งค่า Project',
                title: 'ตอนที่ 2',
            },
            {
                id: 3,
                img: Logo,
                subtitle: 'การ render วีดีโอ',
                title: 'ตอนที่ 3',
            },
            {
                id: 4,
                img: Logo,
                subtitle: 'การทำภาพนิ่งให้เคลื่อนไหวได้',
                title: 'ตอนที่ 4',
            },
            {
                id: 5,
                img: Logo,
                subtitle: 'พื้นฐานการใส่ข้อความ',
                title: 'ตอนที่ 5',
            },
            {
                id: 6,
                img: Logo,
                subtitle: 'ตัวหนังสือแบบพิมพ์ดีด',
                title: 'ตอนที่ 6',
            },
            {
                id: 7,
                img: Logo,
                subtitle: 'การตัดเสียงและเพิ่มเสียง',
                title: 'ตอนที่ 7',
            },
        ];
        return (
            <React.Fragment>

                <div className="container ">
                    <div className="topMargin row">
                        <div className="col-12">
                            <h1 style={{ borderBottom: '2px solid orange' }}>
                                คอร์สเรียน
                        </h1>
                        </div>
                    </div>
                    <div className="row  mb-5 container-tutorial">
                        {videoList.map((list, i) => {
                            return (
                                <CardContent key={i} title={list.title} sTitle={list.subtitle} imgSrc={list.img} id_detial={list.id} />
                            )
                        })}
                    </div>
                </div >
                
            </React.Fragment>
        )
    }
}

export default Tutorial
