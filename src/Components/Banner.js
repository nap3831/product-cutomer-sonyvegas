import React, { Component } from 'react';
import '../assets/css/Banner.css';
import Music from '../Components/Music';
import sound from '../assets/music/sound-bg.mp3';
import { withRouter } from 'react-router-dom';
class Banner extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        let isTrue = false;
        let pathIdVideo = [
            "/VideoDetail/1",
            "/VideoDetail/2",
            "/VideoDetail/3",
            "/VideoDetail/4",
            "/VideoDetail/5",
            "/VideoDetail/6",
            "/VideoDetail/7",
        ];
        pathIdVideo.map(path => {
            if (path === window.location.pathname) {
                isTrue = true;
            }
        });
        let styleBG = {
            backgroundImage: `url(${this.props.images})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }
        return (
            <React.Fragment>
                <div className="col-12">
                    <div className="Banner-warrper">
                        <div className="Banner" style={styleBG}>
                        </div>
                    </div >
                </div >
                <div className="col-12 my-5">
                    {!isTrue &&
                    <Music sound={sound} /> 
                    }
                </div >
            </React.Fragment>
        )
    }
}

export default withRouter(Banner);