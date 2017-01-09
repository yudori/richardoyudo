import React from 'react';
import './index.css';

class Home extends React.Component{

    render(){
        const Greeting = (<p className="home-text">
                            Hi There,
                        </p>);
        const SummaryText = (<p className="home-text">
                                I'm <span className="fa-lg"><b>Richard Oyudo.</b></span><br/> I write code :)
                            </p>);
        const Socials = (<div className="socials">
                            <a href="https://twitter.com/RichardOyudo" ><i className="fa fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/in/richard-oyudo-97283a101" ><i className="fa fa-linkedin"></i></a>
                            <a href="https://github.com/yudori/" ><i className="fa fa-github"></i></a>
                            <a href="https://bitbucket.org/yudori/" ><i className="fa fa-bitbucket"></i></a>
                        </div>);

        return (
            <div className="home">
                <div className="center-page contrast-theme-no-bg">
                    {Greeting} <br/>
                    {SummaryText}
                    {Socials}
                </div>
            </div>
        )
    }
}

export default Home;