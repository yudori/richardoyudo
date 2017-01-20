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
                        I'm a software developer based in Lagos, Nigeria. I've worked with quite a bunch of technologies but
                        I am most proficient in <b>Java</b> and <b>Python</b> (for desktop apps and web backend) and have emerging competence in <b>React</b> (for web frontend) and <b>React-Native</b> (for mobile apps).
                        I love learning & teaching.
                    </p>
                    <hr/>
                    <span><strong>Other Interests</strong></span>
                    <div>
                        <ul>
                            <li><em><strong>Robotics</strong></em> - IoT especially fused with Machine Learning, AI and Computer Vision absolutely intrigues me. I dabble with some of these from time to time</li>
                            <li><em><strong>Travelling</strong></em> - I love adventure. I've been to two other countries outside Nigeria, I hope to count a lot more in the future.</li>
                            <li><em><strong>Football</strong></em> - Manchester United Fan. I watch and play football (physical & video games) whenever I have the chance.</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;