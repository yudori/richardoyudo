import React from 'react';
import { IndexLink, Link } from 'react-router';
import Scroll from 'react-scroll';
import './index.css';
import { About, Portfolio, Contact } from '../../components';

const ScrollLink = Scroll.Link;
const Element = Scroll.Element;
const Events = Scroll.Events;

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