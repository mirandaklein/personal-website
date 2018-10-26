import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component{
    render(){
        return(
           <div className="nav-bar">
            <div className="nav-container">
                <li className="nav-list"><Link to='/'>BIO</Link></li>
                <li className="nav-list"><Link to='/projects'>PROJECTS</Link></li>
                <li className="nav-list"><Link to='/skills'>SKILLS</Link></li>
                <li className="nav-list"><Link to='/contact'>CONTACT</Link></li>
            </div>
           </div>
        )
    }
}

export default Nav;