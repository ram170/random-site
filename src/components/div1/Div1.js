import React, { Component } from 'react';
import './Div1.css';
import Typewriter from 'typewriter-effect';


export class Div1 extends Component {
    render() {
        return (
            <div class="container-fluid grid">
                    <div class="row">
                        <div class="col-lg-6 grid-element-text">
                            <Typewriter options={{
                                strings: this.props.string,
                                autoStart: true,
                                loop: true,
                                wrapperClassName: 'text',
                                cursorClassName: 'text',
                                pauseFor: 500
                            }}>
                            </Typewriter>
                        </div>
                            <div class="col-lg-6"> <img src={this.props.img}></img> </div>
                    </div>
            </div>
        )
    }
}

export default Div1
