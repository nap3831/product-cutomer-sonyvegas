import React, { Component } from 'react';
class Music extends Component {
    componentDidMount() {
        var audio = document.getElementById("myaudio");
        audio.volume = 0.17;
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
                                    volume="0.2"
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

