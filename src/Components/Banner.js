import React, { Component } from 'react';
import '../assets/css/Banner.css';
class Banner extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        let styleBG = {
            backgroundImage: `url(${this.props.images})`,
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }
        return (
            <div className="col-12">
                <div className="Banner-warrper">
                    <div className="Banner" style={styleBG}>
                    
                    </div>
                </div >
            </div >
        )
    }
}

export default Banner;