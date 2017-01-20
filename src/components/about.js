import React from 'react';
import { Col } from 'react-bootstrap';

class About extends React.Component{

    render(){
        const style = {
            'main':{
                minHeight: this.props.pageHeight,
                backgroundColor: this.props.colours.bg,
                color: this.props.colours.fg
            },
            'tag':{
                backgroundColor: this.props.colours.accent,
                color: this.props.colours.bg
            }
        }
        return(
            <div id='about' className="page" style={style.main}>
                <div className="tag" style={style.tag}>About Me</div>
                <div className="content">
                    <p>
                        I'm a software developer based in Lagos, Nigeria. I've worked with quite a bunch of technologies but
                        I am most proficient in <b>Java</b> and <b>Python</b> (for desktop apps and web backend) and have emerging competence in <b>React</b> (for web frontend) and <b>React-Native</b> (for mobile apps).
                        I love learning & teaching.
                    </p>
                    <hr/>
                    <div className="space-top">
                        <span><strong>Other Interests</strong></span>
                        <div className="space-top">
                            <Col sm={6} md={4}>
                                <em><strong>Robotics</strong></em><br/>IoT, AI and Computer Vision turn me on. I dabble with some of these from time to time
                            </Col>
                            <Col sm={6} md={4}>
                                <em><strong>Travelling</strong></em><br/>I love adventure. I've been to two other countries outside Nigeria, I hope to count a lot more in the future.
                            </Col>
                            <Col sm={6} md={4}>
                                <em><strong>Football</strong></em><br/>Manchester United Fan. I watch and play football whenever I have the chance.
                            </Col>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;