import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';


class Contact extends React.Component{
    constructor(props) {
        super(props);
        this.state = { name: '', _replyto: '', _subject: '', message: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value});
    }

    render(){
        return(
            <div className="page main-theme">
                <div className="tag-main">Contact</div>
                <div className="content center-page">
                    <form  method="POST" action="http://formspree.io/ebube.rc@gmail.com">
                        <FormGroup>
                            <ControlLabel>Name</ControlLabel>
                            <FormControl type="text" name="name" onChange={ this.handleChange }/>
                            <ControlLabel>Email</ControlLabel>
                            <FormControl type="email" name="_replyto" onChange={ this.handleChange }/>
                            <ControlLabel>Subject</ControlLabel>
                            <FormControl type="text" name="_subject" onChange={ this.handleChange }/>
                            <ControlLabel>Message</ControlLabel>
                            <FormControl componentClass="textarea" placeholder="Hi Richard!" rows="8" name="message" onChange={ this.handleChange }/>
                            <input type="text" name="_gotcha" style={{'display':'none'}} />
                        </FormGroup>
                        <Button type="submit"> Send Message</Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;