import React from 'react';

class About extends React.Component{
    render(){
        return(
            <div className="page main-theme">
                <div className="tag-main">About Me</div>
                <div className="content center">
                    <p>
                    I'm a software developer based in Lagos, Nigeria. I've worked with quite a bunch of programming languages and frameworks but
                    I have most competence in Java and Python (for desktop apps and web backend) with emerging proficiency in React (for web frontend) and React-Native (for mobile apps).
                    You could basically call me a full stack web and mobile application developer :)
                    </p>
                    <hr/>
                    <span>Other Interests</span>
                    <p>
                        Robotics - I've always been intrigued by IoT especially fused with Machine Learning, AI and Computer Vision. I have beginner experience in these but you'll definitely find me at least dabbling around these in the future.
                        Travelling - I've been to two other countries apart from Nigeria, I hope to count a lot more in the future. 
                        Football - Manchester United Fan. I watch, play (pyhsically), and play (video games) whenever I have the chance.
                    </p>
                </div>
            </div>
        );
    }
}

export default About;