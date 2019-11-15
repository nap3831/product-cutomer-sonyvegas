import React, { Component } from 'react'

import { Link } from 'react-router-dom';
import ReactYoutube from '../Components/ReactYoutube';
class VideoDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    render() {
        let dataVideo = [
            'ok881rk0jrk',
            'qsNDS8cy6W0',
            'eiSCobyULHY',
            'EsDQrCnkY1c',
            'AX71MnD6Cas',
            '_xHSSsvH4Pg',
            'H_oWNDpCum0',
        ]
        return (
            <React.Fragment>
                <div className="container">
                    <div className="topMargin row">
                        <div className="col-md-6">
                            <ReactYoutube videoId={dataVideo[this.props.match.params.id - 1]}
                            />
                        </div>
                        <div className="col-md-6">
                            <div style={{ marginTop: '10px', marginBottom: '20px', marginLeft: '100px', marginRight: '100px' }}>
                                <Link className=" btn btn-primary text-center w-100" to="/Tutorial">
                                    กลับไปที่คอร์ส
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default VideoDetail