import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component{
    render(){
        return(
           <div className="nav-bar">
            <div className="nav-container">
                <li className="nav-list"><a><Link to='/'>BIO</Link></a></li>
                <li className="nav-list"><a><Link to='/projects'>PROJECTS</Link></a></li>
                <li className="nav-list"><a><Link to='/skills'>SKILLS</Link></a></li>
                <li className="nav-list"><a><Link to='/hobbies'>HOBBIES</Link></a></li>
                <li className="nav-list"><a><Link to='/contact'>CONTACT</Link></a></li>
            </div>
           </div>
        )
    }
}

export default Nav;