import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIdCard, faPrint, faPhone } from '@fortawesome/fontawesome-free-solid';
class About extends Component {
    componentWillMount() {
        window.scrollTo({
            top: 800,
            behavior: 'smooth',
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="container mb-5">
                    <div className="topMargin row container-about">
                        <div className="col-12">
                            <h1 style={{ borderBottom: '2px solid orange', fontSize: '50px' }}>
                                เกี่ยวกับฉัน
                        </h1>
                            <img className="img-responsive my-5" src="https://scontent.fbkk13-1.fna.fbcdn.net/v/t1.0-9/s960x960/43734136_1407963592673181_5417067458160754688_o.jpg?_nc_cat=108&_nc_oc=AQlF83n-FlLY0oOeGNzh6xXic_ZczGUy2j66dRuqUC4Bj6y6ZlKy4xB6mcpJTzHYt3E&_nc_ht=scontent.fbkk13-1.fna&oh=2071635d2ac1cd43f7dfb1f86a971615&oe=5E8976D5" alt="photome" width="30%" />
                        </div >
                        <div className="col-md-4  col-12" style={{ width: '100%' }}>
                            <FontAwesomeIcon size="5x"
                                icon={faIdCard} />
                            <div className="mt-3">
                                <span className="lead">นายอธิพัชร์ เตชตุลยทรัพย์</span>
                                <p />
                                <span className="lead">Atiphat Tachatunyasap</span>
                            </div>
                        </div>
                        <div className="col-md-4 col-12" style={{ width: '100%' }}>
                            <FontAwesomeIcon size="5x"
                                icon={faPhone} />
                            <div className="mt-3">
                                <h4 className="size-text">เบอร์โทรศัพท์</h4>
                                <a href="tel:097-069-8028 ">097-069-8028 </a>
                            </div>
                        </div>
                        <div className="col-md-4 col-12" style={{ width: '100%' }}>
                            <FontAwesomeIcon size="5x"
                                icon={faPrint} />
                            <div className="mt-3">
                                <h5 className="size-text">รหัสนักศึกษา</h5>
                                <p>5921414070</p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default About
