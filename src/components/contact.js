import React, {Component} from 'react';

class Contact extends Component{
    render(){
        return(
            <div className="contact">
                <div className="photo">
                <img src={this.props.photo} alt="author" className="miranda-photo"></img>
                </div>
                <ul className='contact-info'>
                    <li>Miranda Klein</li>
                    <li>mirandaklein@mac.com</li>
                    <li><a href='https://github.com/mirandaklein'>https://github.com/mirandaklein</a></li>
                </ul>
            </div>
        )
    }
}
export default Contact;