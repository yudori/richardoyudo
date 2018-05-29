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
                        <h3>Software developer, builder.</h3>
                        I am primarily a <b>Python</b> developer but my love for building stuff has made me competent in technologies including <b>Javascript, Java, React, React Native, Docker, AWS,</b> to name a few.
                        <p><i>If it can be learned, I can learn it.</i></p>
                    </p>
                </div>
            </div>
        );
    }
}

export default About;