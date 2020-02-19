import React, { Component } from 'react';
class Exam extends Component {
    constructor(props) {
        super(props)
        this.state = {
            score: 0,
            counter: 0,
            currentChoice: []
        }
        this.handdleChoice = this.handdleChoice.bind(this);
        this.handleDisableAfterChooseChoice = this.handleDisableAfterChooseChoice.bind(this);
    }
    handleDisableAfterChooseChoice = (e) => {
        this.setState({
            currentChoice: this.state.currentChoice.concat([e.target.value])
        })

    }
    componentWillMount() {
        window.scrollTo({
            top: 500,
            behavior: 'smooth',
        })
    }
    handdleChoice = (isTrue) => (e) => {
        if (isTrue) {
            this.setState({
                score: this.state.score + 1,
            })
            alert('คำตอบของคุณถูกต้อง');
        }
        this.setState({
            counter: this.state.counter + 1
        })
        this.handleDisableAfterChooseChoice(e);
    }
    render() {
        console.log(this.state.currentChoice);

        return (
            <div className="container  mx-auto my-5">
                <div className="row my-5 ">
                    <div className="col-12">
                        <h3 style={{ borderBottom: '2px solid #ff0000',textAlign:'center' }}>แบบทดสอบหลังการดูวีดีโอ</h3>
                    </div>
                    <div className="col-12">
                        <div className="container">
                            <div className="row text-center">
                                <div className={`lead col-12 pl-auto ${this.state.currentChoice[0] === "1" && "HideExamNumber"}`}>
                                    1.) Sony Vegas วางตลาดครั้งแรกในวันที่เท่าไหร่ ?
                                <div>
                                        <button className="btn btn-success m-2" value="1" style={{ fontSize: '18px' }} onClick={this.handdleChoice(true)}>
                                            12 กันยายน ค.ศ.2006
                                    </button>
                                        <button className="btn btn-success m-2" value="1" style={{ fontSize: '18px' }} onClick={this.handdleChoice(false)}>
                                            11 กันยายน ค.ศ.2006
                                    </button>

                                        <button className="btn btn-success m-2" value="1" style={{ fontSize: '18px' }} onClick={this.handdleChoice(false)}>
                                            10 กันยายน ค.ศ.2006
                                    </button>
                                        <button className="btn btn-success m-2" value="1" style={{ fontSize: '18px' }} onClick={this.handdleChoice(false)}>
                                            09 กันยายน ค.ศ.2006
                                    </button>
                                    </div>
                                </div>
                                <div className={`lead col-12 pl-auto ${this.state.currentChoice[1] === "2" && "HideExamNumber"}`}>
                                    2.) Menu Bar คืออะไร?
                            <div>
                                        <button className="btn btn-success m-2" value="2" style={{ fontSize: '18px' }} onClick={this.handdleChoice(false)}>
                                            เครื่องมือชนิดหนึ่ง
                                    </button>
                                        <button className="btn btn-success m-2" value="2" style={{ fontSize: '18px' }} onClick={this.handdleChoice(false)}>
                                            เครื่องมือใช้จัดการเฟรม
                                    </button>

                                        <button className="btn btn-success m-2" value="2" style={{ fontSize: '18px' }} onClick={this.handdleChoice(true)}>
                                            แถบเมนูสำหรับรวบรวมคำสั่งที่ใช้ในโปรแกรม
                                    </button>
                                        <button className="btn btn-success m-2" value="2" style={{ fontSize: '18px' }} onClick={this.handdleChoice(false)}>
                                            เครื่องมือใช้เซฟไฟล์โปรเจ็ค
                                    </button>
                                    </div>
                                </div>
                                <div className={`lead col-12 pl-auto ${this.state.currentChoice[2] === "3" && "HideExamNumber"}`}>
                                    3.)	Tool Bar คืออะไร?
                            <div>
                                        <button className="btn btn-success m-2" value="3" style={{ fontSize: '18px' }} onClick={this.handdleChoice(false)}>
                                            เครื่องมือชนิดหนึ่ง
                                    </button>
                                        <button className="btn btn-success m-2" value="3" style={{ fontSize: '18px' }} onClick={this.handdleChoice(false)}>
                                            เครื่องมือใช้จัดการเฟรม
                                    </button>

                                        <button className="btn btn-success m-2" value="3" style={{ fontSize: '18px' }} onClick={this.handdleChoice(false)}>
                                            แถบเมนูสำหรับรวบรวมคำสั่งที่ใช้ในโปรแกรม

                                    </button>
                                        <button className="btn btn-success m-2" value="3" style={{ fontSize: '18px' }} onClick={this.handdleChoice(true)}>
                                            แถบเครื่องมือที่ใช้ในการทำงานบ่อยๆ เช่น New, Open , Save , Cut , Copy เป็นต้น
                                    </button>
                                    </div>
                                </div>
                                <div className={`lead col-12 pl-auto ${this.state.currentChoice[3] === "4" && "HideExamNumber"}`}>
                                    4.) Support Windows ใช้ทำอะไร ?
                            <div>
                                        <button className="btn btn-success m-2" value="4" style={{ fontSize: '18px' }} onClick={this.handdleChoice(true)}>
                                            หน้าต่างที่ใช้สำหรับรวบรวมฟังก์ชั่นต่างๆ ของโปรแกรม รวมถึง การเข้าถึงไฟล์ในเครื่องคอมพิวเตอร์ด้วย
                                    </button>
                                        <button className="btn btn-success m-2" value="4" style={{ fontSize: '18px' }} onClick={this.handdleChoice(false)}>
                                            เครื่องมือใช้จัดการเฟรม
                                    </button>

                                        <button className="btn btn-success m-2" value="4" style={{ fontSize: '18px' }} onClick={this.handdleChoice(false)}>
                                            แถบเมนูสำหรับรวบรวมคำสั่งที่ใช้ในโปรแกรม

                                    </button>
                                        <button className="btn btn-success m-2" value="4" style={{ fontSize: '18px' }} onClick={this.handdleChoice(false)}>
                                            แถบเครื่องมือที่ใช้ในการทำงานบ่อยๆ เช่น New, Open , Save , Cut , Copy เป็นต้น
                                    </button>
                                    </div>
                                </div>
                                <div className={`lead col-12 pl-auto ${this.state.currentChoice[4] === "5" && "HideExamNumber"}`}>
                                    5.) การสร้าง Title ในโปรแกรมสามารถทำได้กี่วิธี ?
                            <div>
                                        <button className="btn btn-success m-2" value="5" style={{ fontSize: '18px' }} onClick={this.handdleChoice(false)}>
                                            1 วิธี
                                    </button>
                                        <button className="btn btn-success m-2" value="5" style={{ fontSize: '18px' }} onClick={this.handdleChoice(true)}>
                                            2 วิธี
                                    </button>

                                        <button className="btn btn-success m-2" value="5" style={{ fontSize: '18px' }} onClick={this.handdleChoice(false)}>
                                            3 วิธี
                                    </button>
                                        <button className="btn btn-success m-2" value="5" style={{ fontSize: '18px' }} onClick={this.handdleChoice(false)}>
                                            4 วิธี
                                    </button>
                                    </div>
                                </div>
                                <div className={`lead col-12 pl-auto ${this.state.currentChoice[5] === "6" && "HideExamNumber"}`}>
                                    6.) จากข้อ 5.) มีอะไรบ้าง ?
                            <div>
                                        <button className="btn btn-success m-2" value="6" style={{ fontSize: '18px' }} onClick={this.handdleChoice(true)}>
                                            คลิกที่เมนู Insert แล้วเลือกคาสั่ง Text Media ,  คลิกขวาที่ Video track แล้วเลือกคาสั่ง Text Media
                                    </button>
                                        <button className="btn btn-success m-2" value="6" style={{ fontSize: '18px' }} onClick={this.handdleChoice(false)}>
                                            คลิกที่เมนู Insert แล้วเลือกคาสั่ง Text  ,  คลิกขวาที่ Video track แล้วเลือกคาสั่ง  Media
                                    </button>

                                        <button className="btn btn-success m-2" value="6" style={{ fontSize: '18px' }} onClick={this.handdleChoice(false)}>
                                            คลิกที่เมนู Insert แล้วเลือกคาสั่ง Text Media
                                    </button>
                                        <button className="btn btn-success m-2" value="6" style={{ fontSize: '18px' }} onClick={this.handdleChoice(false)}>
                                            คลิกขวาที่ Video track แล้วเลือกคาสั่ง Text Media

                                    </button>
                                    </div>
                                </div>
                                <div className={`lead col-12 ${this.state.currentChoice[6] === "7" && "HideExamNumber"}`}>
                                    7.) Layer คืออะไร ?
                            <div>
                                        <button className="btn btn-success m-2" value="7" style={{ fontSize: '18px' }} onClick={this.handdleChoice(true)}>
                                            ส่วนที่ใช้สำหรับ ซ้อนวีดีโอ เสียง หรือวัตถุอื่นๆ โดยแยกเป็นชั้นๆ ไป
                                    </button>
                                        <button className="btn btn-success m-2" value="7" style={{ fontSize: '18px' }} onClick={this.handdleChoice(false)}>
                                            ส่วนที่ใช้สำหรับ ซ้อนวีดีโอ
                                    </button>

                                        <button className="btn btn-success m-2" value="7" style={{ fontSize: '18px' }} onClick={this.handdleChoice(false)}>
                                            ส่วนที่ใช้สำหรับ แยกสิ่งต่างๆ เป็นชั้นๆ
                                    </button>
                                        <button className="btn btn-success m-2" value="7" style={{ fontSize: '18px' }} onClick={this.handdleChoice(false)}>
                                            ส่วนที่ใช้สำหรับ แยกชั้น Text Media เป็นชั้นๆ
                                    </button>
                                    </div>
                                </div>
                                <div className={`lead col-12 pl-auto ${this.state.currentChoice[7] === "8" && "HideExamNumber"}`}>
                                    8.) Mixer คืออะไร ?
                            <div>
                                        <button className="btn btn-success m-2" value="8" style={{ fontSize: '18px' }} onClick={this.handdleChoice(false)}>
                                            ส่วนที่ใช้สำหรับปรับระดับขนาดของภาพให้กับงาน
                                    </button>
                                        <button className="btn btn-success m-2" value="8" style={{ fontSize: '18px' }} onClick={this.handdleChoice(false)}>
                                            ส่วนที่ใช้สำหรับปรับระดับความชัดให้กับงาน
                                    </button>

                                        <button className="btn btn-success m-2" value="8" style={{ fontSize: '18px' }} onClick={this.handdleChoice(false)}>
                                            ส่วนที่ใช้สำหรับปรับระดับแสงให้กับงาน
                                    </button>
                                        <button className="btn btn-success m-2" value="8" style={{ fontSize: '18px' }} onClick={this.handdleChoice(true)}>
                                            ส่วนที่ใช้สำหรับปรับระดับเสียงให้กับงาน
                                    </button>
                                    </div>
                                </div>
                                <div className={`lead col-12 pl-auto ${this.state.currentChoice[8] === "9" && "HideExamNumber"}`}>
                                    9.) Status Bar  คืออะไร ?
                            <div>
                                        <button className="btn btn-success m-2" value="9" style={{ fontSize: '18px' }} onClick={this.handdleChoice(false)}>
                                            แถบแสดงข้อมูล frame rate
                                    </button>
                                        <button className="btn btn-success m-2" value="9" style={{ fontSize: '18px' }} onClick={this.handdleChoice(false)}>
                                            แถบแสดงข้อมูล แสง
                                    </button>

                                        <button className="btn btn-success m-2" value="9" style={{ fontSize: '18px' }} onClick={this.handdleChoice(true)}>
                                            แถบแสดงข้อมูลว่าเราสามารถเก็บข้อมูลได้อีกกี่นาที ในเครื่องของเรา
                                    </button>
                                        <button className="btn btn-success m-2" value="9" style={{ fontSize: '18px' }} onClick={this.handdleChoice(false)}>
                                            แถบแสดงข้อมูล เสียง
                                    </button>
                                    </div>
                                </div>
                                <div className={`lead col-12 pl-auto ${this.state.currentChoice[9] === "10" && "HideExamNumber"}`}>
                                    10.) การสร้างวีดิทัศน์ประกอบด้วยอะไรบ้าง
                            <div>
                                        <button className="btn btn-success m-2" value="10" style={{ fontSize: '18px' }} onClick={this.handdleChoice(false)}>
                                            Production การเตรียมการก่อนการผลิต ,
                                            Predetor การดำเนินการถ่ายทำ ,
                                            Poster ขั้นตอนสุดท้ายของการผลิต นั่นคือการตัดต่อก่อนนำไปเผยแพร่
                                            </button>
                                        <button className="btn btn-success m-2" value="10" style={{ fontSize: '18px' }} onClick={this.handdleChoice(false)}>
                                            Production  ,
                                            Predetor ,
                                            Poster
                                    </button>

                                        <button className="btn btn-success m-2" value="10" style={{ fontSize: '18px' }} onClick={this.handdleChoice(true)}>
                                            Pre-Production การเตรียมการก่อนการผลิต
                                            Production การดำเนินการถ่ายทำ
                                            Post-Production ขั้นตอนสุดท้ายของการผลิต นั่นคือการตัดต่อก่อนนำไปเผยแพร่
                                    </button>
                                        <button className="btn btn-success m-2" value="10" style={{ fontSize: '18px' }} onClick={this.handdleChoice(false)}>
                                            การเตรียมการก่อนการผลิต ,   การดำเนินการทั่วไป  , ขั้นตอนสุดท้ายของการผลิต
                                    </button>
                                    </div>
                                </div>
                                <div className={`lead col-12 pl-auto ${this.state.currentChoice[10] === "11" && "HideExamNumber"}`}>
                                    11.) ชนิดของวิดีโอที่ใช้งานอยู่ในปัจจุบันสามารถแบ่งได้เป็นกี่ชนิด อะไรบ้าง
                <div>
                                        <button className="btn btn-success m-2" value="11" style={{ fontSize: '18px' }} onClick={this.handdleChoice(true)}>
                                            1. วิดีโออะนาลอก (Analog Video) ,
                                            2. วีดีโอดิจิตอล (Digital Video)
                                            </button>
                                        <button className="btn btn-success m-2" value="11" style={{ fontSize: '18px' }} onClick={this.handdleChoice(false)}>
                                            1. วิดีโออาลอก ,
                                            2. วีดีโอดิกิต
                                    </button>

                                        <button className="btn btn-success m-2" value="11" style={{ fontSize: '18px' }} onClick={this.handdleChoice(false)}>
                                            1. Analog World
                                            2. Digital World
                                                                </button>
                                        <button className="btn btn-success m-2" value="11" style={{ fontSize: '18px' }} onClick={this.handdleChoice(false)}>
                                            ถูกทั้งหมดที่กล่าวมา
                                    </button>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 text-right lead">
                                    <h5 className="text-danger"><span className="text-success">คุณได้คะแนนทั้งหมด</span> : {this.state.counter === 11 ? this.state.score : 'คะแนนจะไม่ปรากฎจนกว่าจะทำครบทุกข้อ'} / 11</h5>
                                </div>
                                {this.state.counter === 11 &&
                                    <a className="btn btn-primary text-right d-block ml-auto" href="/Exam">เริ่มทำแบบฝึกหัดอีกครั้ง</a>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Exam
