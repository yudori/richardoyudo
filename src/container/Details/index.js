import React from 'react';
import './index.css';
import { About, Portfolio, Contact } from '../../components';


class Details extends React.Component{

    render(){
        return (
            <div>
                <span className="main-nav">
                    <a href="#about" className="smooth"> About </a>//
                    <a href="#portfolio" className="smooth"> Portfolio </a>//
                    <a href="#contact" className="smooth"> Contact </a>
                </span>
                <About />
                <Portfolio />
                <Contact />
            </div>
        )
    }
}

export default Details;