import React from 'react';
import './index.css';
import { About, Portfolio, Contact } from '../../components';
import Scroll from 'react-scroll';

var Link = Scroll.Link;


class Details extends React.Component{

    render(){
        return (
            <div>
                <span className="main-nav">
                    <Link to="about" spy={true} smooth={true} duration={500}> About </Link>//
                    <Link to="portfolio" spy={true} smooth={true} duration={500}> Portfolio </Link>//
                    <Link to="contact" spy={true} smooth={true} duration={500}> Contact </Link>
                </span>
                <About pageHeight={this.props.pageHeight} colours={{'bg':'#fff','fg':'#000','accent':'#999'}}/>
                <Portfolio pageHeight={this.props.pageHeight} colours={{'bg':'#999','fg':'#fff','accent':'#000'}}/>
                <Contact pageHeight={this.props.pageHeight} colours={{'bg':'#fff','fg':'#000','accent':'#999'}}/>
            </div>
        )
    }
}

export default Details;