import React, { Component } from 'react';
class Music extends Component {
    componentDidMount() {
        var audio = document.getElementById("myaudio");
        audio.volume = 0.43;
    }
    render() {
        return (
            <React.Fragment>
                <div className="container text-center">
                    <div className="row">
                        <div className="col-12">
                            <figure>
                                <audio id="myaudio"
                                    autoPlay={"true"}
                                    controls
                                    loop
                                    src={this.props.sound}>
                                </audio>
                            </figure>
                        </div>
                    </div>
                </div>
            </React.Fragment >
        )
    }
}

export default (Music);