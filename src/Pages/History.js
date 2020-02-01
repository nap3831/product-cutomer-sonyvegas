import React, { Component } from 'react';
class History extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isClick: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            isClick: !this.state.isClick
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container text-center mb-5">
                    <div className="topMargin row container-history">
                        <div className="col-12">
                            <h1 style={{ borderBottom: '2px solid orange' }}>
                                ประวัติความเป็นมา
                        </h1>
                        <div className="col-12 my-2">
                                <h5 className="my-5 text-left"><u>Vegas หรือ ชื่อเต็ม คือ Sony Vegas คืออะไร ?</u></h5>
                            </div>
                            <span className="lead">
                                โปรแกรมตัดต่อวิดีโอบนระบบปฏิบัติการWindows มีชื่อเสียง ตัวหนึ่ง เนื่องจากมีราคาแพง ประมาณ400-600 USD นับตั้งแต่รุ่น 2มา (ไม่ใช่ vegas movie studio ที่ตัดความสามารถออก <p />
                                <button className="btn btn-primary w-100" onClick={this.handleClick}>อ่านเพิ่มเติม</button>
                                {this.state.isClick &&
                                    <div className="mt-5">
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;เนื่องจาก การใช้งานที่ง่ายแต่มีอะไรที่ซับซ้อนอยู่ลึกๆ มีลูกเล่นมากพอที่สามารถประยุกต์ใช้ได้หลากหลาย ซึ่งแตกต่างจาก โปรแกรมราคาถูกๆ ทั่วไป เช่น Ulead Nero... เป็นต้นที่ทำได้น้อยกว่า และไม่ยืดหยุ่นในการใช้งานเท่า(ความสามารถตามราคา)โดยสามารถคลิ้กลาก แล้ววาง (Drag and Drop)และ คลิ้กขวา โดยใช้ mouse ก็ตัดต่อได้แล้ว ด้วยการทำงานแบบชั้น(layer) คล้ายๆกับโปรแกรม Photoshop และมี Effect และ Transition ที่มากพอเช่นเดียวกับโปรแกรมอื่นๆที่สำเร็จรูปมาให้ใช้ได้ทันที จึงทำความเข้าใจได้ง่าย นอกจากนี้ยัง สามารถในการตัดต่อภาพและเสียงไปพร้อมกันได้เลย ซึ่งเป็นความสามารถอันโดดเด่นสำหรับVegas ซึ่งหาตัวจับได้ยาก ที่จะมีโปรแกรมที่ทำได้แบบนี้
                                        เดิมที โปรแกรมนี้ เป็นของ SonicFoundry ซึ่งแต่เดิม โปรแกรมของบริษัทนี้ เป็นโปรแกรมตัดแต่งเสียงดนตรี ต่อมาจึงพัฒนามีโปรแกรมตัดต่อ วิดีโอ ซึ่งเรื่องเสียงเป็นจุดแข็งของโปรแกรมนี้เลยก็ว่าได้
                                    <p />
                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;เนื่องด้วย จุดเด่นที่มี ในปี ค.ศ. 2003 บริษัท Sony Pictures Digital ได้ซื้อ Sonic Foundry's desktop software ทั้งหมดไป(ตอนนั้น vegas รุ่น4) ทั้ง ACID Sound Forge and Vegas รวมถึงอื่นๆด้วย (ราคาปลีกแต่ละตัวแพงๆทั้งนั้น) และได้ตั้ง sonymediasoftware ขึ้นมาจัดการกับโปรแกรมเหล่านี้
                                        หลังจากที่ Sony ซื้อไป ได้ทำการ พัฒนา โปรแกรมเหล่านี้ ให้มีชื่อเสียงมากขึ้น โดยเพิ่มคุณสมบัติใหม่ๆ เพื่อแข่งขันกับ โปรแกรมประเภทเดียวกันที่มีชื่อเสียงมาก่อน รวมถึง การปรับปรุงตัวโปรแกรมให้ สามารถทำงานร่วมกับ อุปกรณ์ของ Sony หลายตัวได้ โดยเฉพาะรุ่น 7 ที่เพิ่งออกใหม่(Sony Vegas 7 วางตลาดในวันที่ 12 กันยายน ค.ศ.2006)
                            </div>
                                }
                            </span>
                        </div>
                    </div >
                </div >
            </React.Fragment>
        )
    }
}

export default History
