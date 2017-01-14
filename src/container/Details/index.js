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
                <About pageHeight={this.props.pageHeight}/>
                <Portfolio pageHeight={this.props.pageHeight}/>
                <Contact pageHeight={this.props.pageHeight}/>
            </div>
        )
    }
}

export default Details;