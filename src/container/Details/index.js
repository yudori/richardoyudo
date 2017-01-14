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
                <About pageHeight={this.props.pageHeight} colours={{'bg':'#fff','fg':'#000','accent':'#999'}}/>
                <Portfolio pageHeight={this.props.pageHeight} colours={{'bg':'#999','fg':'#fff','accent':'#000'}}/>
                <Contact pageHeight={this.props.pageHeight} colours={{'bg':'#fff','fg':'#000','accent':'#999'}}/>
            </div>
        )
    }
}

export default Details;