import React from 'react';


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
                        Well, I'm supposed to be a <b>Python</b> developer, and I primarily am, 
                        but you see I've also had years of experience in <b>Javascript, Java, React, React Native, Docker, AWS,</b> and a bunch of other technologies.
                        I like to learn, build and explore.
                        <p><i>I'm also an <s>amateur</s> pianist ¯\_(ツ)_/¯</i></p>
                    </p>
                </div>
            </div>
        );
    }
}

export default About;