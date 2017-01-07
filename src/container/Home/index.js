import React from 'react';
import './index.css';

class Home extends React.Component{

    render(){
        const Greeting = (<p>
                            Hi There,
                        </p>);
        const SummaryText = (<p>
                                I'm a software developer :)
                            </p>);
        const Socials = (<div>
                            <a href=""><img className="icon-socials twitter" /></a>
                            <a href=""><img className="icon-socials twitter" /></a>
                            <a href=""><img className="icon-socials twitter" /></a>
                        </div>);

        return (
            <div className="home">
                <div className="center contrast-theme-no-bg">
                    {Greeting}
                    {SummaryText}
                    {Socials}
                </div>
            </div>
        )
    }
}

export default Home;