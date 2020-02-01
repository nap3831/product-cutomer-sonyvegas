import React, { Component } from 'react'
import CardContent from '../Components/CardContent';
import Logo from '../assets/images/logo.jpg';
class Tutorial extends Component {
    constructor(props) {
        super(props)
        this.state = {
            score: 0,
            counter: 0
        }
        this.handdleChoice = this.handdleChoice.bind(this);
    }
    handdleChoice = (isTrue) => () => {
        if (isTrue) {
            this.setState({
                score: this.state.score + 1
            })
        }
        alert('คุณตอบข้อนี้เเล้ว');
        this.setState({
            counter: this.state.counter + 1
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
                <div className="container my-5">
                    <div className="row my-5 ">
                        <div className="col-12 text-center">
                            <h3 style={{borderBottom:'2px solid #ff0000'}}>แบบทดสอบหลังการดูวีดีโอ</h3>
                            </div>
                        <div className="lead col-12">
                            1.) Sony Vegas วางตลาดครั้งแรกในวันที่เท่าไหร่ ?
                            <div>
                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(true)}>
                                    12 กันยายน ค.ศ.2006
                            </button>
                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(false)}>
                                    11 กันยายน ค.ศ.2006
                            </button>

                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(false)}>
                                    10 กันยายน ค.ศ.2006
                            </button>
                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(false)}>
                                    09 กันยายน ค.ศ.2006
                            </button>
                            </div>
                        </div>
                        <div className="lead col-12">
                            2.) Menu Bar คืออะไร?
                            <div>
                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(false)}>
                                    เครื่องมือชนิดหนึ่ง
                            </button>
                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(false)}>
                                    เครื่องมือใช้จัดการเฟรม
                            </button>

                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(true)}>
                                    แถบเมนูสำหรับรวบรวมคำสั่งที่ใช้ในโปรแกรม
                            </button>
                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(false)}>
                                    เครื่องมือใช้เซฟไฟล์โปรเจ็ค
                            </button>
                            </div>
                        </div>
                        <div className="lead col-12">
                            3.)	Tool Bar คืออะไร?
                            <div>
                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(false)}>
                                    เครื่องมือชนิดหนึ่ง
                            </button>
                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(false)}>
                                    เครื่องมือใช้จัดการเฟรม
                            </button>

                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(false)}>
                                    แถบเมนูสำหรับรวบรวมคำสั่งที่ใช้ในโปรแกรม

                            </button>
                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(true)}>
                                    แถบเครื่องมือที่ใช้ในการทำงานบ่อยๆ เช่น New, Open , Save , Cut , Copy เป็นต้น
                            </button>
                            </div>
                        </div>
                        <div className="lead col-12">
                            4.) Support Windows ใช้ทำอะไร ?
                            <div>
                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(true)}>
                                    หน้าต่างที่ใช้สำหรับรวบรวมฟังก์ชั่นต่างๆ ของโปรแกรม รวมถึง การเข้าถึงไฟล์ในเครื่องคอมพิวเตอร์ด้วย
                            </button>
                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(false)}>
                                    เครื่องมือใช้จัดการเฟรม
                            </button>

                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(false)}>
                                    แถบเมนูสำหรับรวบรวมคำสั่งที่ใช้ในโปรแกรม

                            </button>
                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(false)}>
                                    แถบเครื่องมือที่ใช้ในการทำงานบ่อยๆ เช่น New, Open , Save , Cut , Copy เป็นต้น
                            </button>
                            </div>
                        </div>
                        <div className="lead col-12">
                            5.) การสร้าง Title ในโปรแกรมสามารถทำได้กี่วิธี ?
                            <div>
                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(false)}>
                                    1 วิธี
                            </button>
                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(true)}>
                                    2 วิธี
                            </button>

                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(false)}>
                                    3 วิธี
                            </button>
                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(false)}>
                                    4 วิธี
                            </button>
                            </div>
                        </div>
                        <div className="lead col-12">
                            6.) จากข้อ 5.) มีอะไรบ้าง ?
                            <div>
                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(true)}>
                                    คลิกที่เมนู Insert แล้วเลือกคาสั่ง Text Media ,  คลิกขวาที่ Video track แล้วเลือกคาสั่ง Text Media
                            </button>
                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(false)}>
                                    คลิกที่เมนู Insert แล้วเลือกคาสั่ง Text  ,  คลิกขวาที่ Video track แล้วเลือกคาสั่ง  Media
                            </button>

                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(false)}>
                                    คลิกที่เมนู Insert แล้วเลือกคาสั่ง Text Media
                            </button>
                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(false)}>
                                    คลิกขวาที่ Video track แล้วเลือกคาสั่ง Text Media

                            </button>
                            </div>
                        </div>
                        <div className="lead col-12">
                            7.) Layer คืออะไร ?
                            <div>
                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(true)}>
                                    ส่วนที่ใช้สำหรับ ซ้อนวีดีโอ เสียง หรือวัตถุอื่นๆ โดยแยกเป็นชั้นๆ ไป
                            </button>
                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(false)}>
                                    ส่วนที่ใช้สำหรับ ซ้อนวีดีโอ
                            </button>

                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(false)}>
                                    ส่วนที่ใช้สำหรับ แยกสิ่งต่างๆ เป็นชั้นๆ
                            </button>
                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(false)}>
                                    ส่วนที่ใช้สำหรับ แยกชั้น Text Media เป็นชั้นๆ
                            </button>
                            </div>
                        </div>
                        <div className="lead col-12">
                            8.) Mixer คืออะไร ?
                            <div>
                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(false)}>
                                    ส่วนที่ใช้สำหรับปรับระดับขนาดของภาพให้กับงาน
                            </button>
                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(false)}>
                                    ส่วนที่ใช้สำหรับปรับระดับความชัดให้กับงาน
                            </button>

                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(false)}>
                                    ส่วนที่ใช้สำหรับปรับระดับแสงให้กับงาน
                            </button>
                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(true)}>
                                    ส่วนที่ใช้สำหรับปรับระดับเสียงให้กับงาน
                            </button>
                            </div>
                        </div>
                        <div className="lead col-12">
                            9.) Status Bar  คืออะไร ?
                            <div>
                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(false)}>
                                    แถบแสดงข้อมูล frame rate
                            </button>
                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(false)}>
                                    แถบแสดงข้อมูล แสง
                            </button>

                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(true)}>
                                    แถบแสดงข้อมูลว่าเราสามารถเก็บข้อมูลได้อีกกี่นาที ในเครื่องของเรา
                            </button>
                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(false)}>
                                    แถบแสดงข้อมูล เสียง
                            </button>
                            </div>
                        </div>
                        <div className="lead col-12">
                            10.) การสร้างวีดิทัศน์ประกอบด้วยอะไรบ้าง
                            <div>
                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(false)}>
                                    Production การเตรียมการก่อนการผลิต ,
                                    Predetor การดำเนินการถ่ายทำ ,
                                    Poster ขั้นตอนสุดท้ายของการผลิต นั่นคือการตัดต่อก่อนนำไปเผยแพร่
                                    </button>
                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(false)}>
                                    Production  ,
                                    Predetor ,
                                    Poster
                            </button>

                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(true)}>
                                    Pre-Production การเตรียมการก่อนการผลิต
                                    Production การดำเนินการถ่ายทำ
                                    Post-Production ขั้นตอนสุดท้ายของการผลิต นั่นคือการตัดต่อก่อนนำไปเผยแพร่
                            </button>
                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(false)}>
                                    การเตรียมการก่อนการผลิต ,   การดำเนินการทั่วไป  , ขั้นตอนสุดท้ายของการผลิต
                            </button>
                            </div>
                        </div>
                        <div className="lead col-12">
                            11.) ชนิดของวิดีโอที่ใช้งานอยู่ในปัจจุบันสามารถแบ่งได้เป็นกี่ชนิด อะไรบ้าง
                        <div>
                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(true)}>
                                    1. วิดีโออะนาลอก (Analog Video) ,
                                    2. วีดีโอดิจิตอล (Digital Video)
                                    </button>
                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(false)}>
                                    1. วิดีโออาลอก ,
                                    2. วีดีโอดิกิต
                            </button>

                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(false)}>
                                    1. Analog World
                                    2. Digital World
                                                        </button>
                                <button className="btn btn-success m-2" style={{ fontSize: '12px' }} onClick={this.handdleChoice(false)}>
                                    ถูกทั้งหมดที่กล่าวมา
                            </button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-right lead">
                            <h5 className="text-danger"><span className="text-success">คุณได้คะแนนทั้งหมด</span> : {this.state.counter === 11 ?  this.state.score : 'คะแนนจะไม่ปรากฎจนกว่าจะทำครบทุกข้อ'} / 11</h5>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Tutorial
