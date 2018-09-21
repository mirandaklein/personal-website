import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component{
    render(){
        return(
           <div className="nav-bar">
            <div className="nav-container">
                <li className="nav-list"><a><Link to='/'>Biography</Link></a></li>
                <li className="nav-list"><a><Link to='/projects'>Projects</Link></a></li>
                <li className="nav-list"><a><Link to='/skills'>Skills</Link></a></li>
                <li className="nav-list"><a><Link to='/hobbies'>Hobbies</Link></a></li>
                <li className="nav-list"><a><Link to='/contact'>Contact</Link></a></li>
            </div>
           </div>
        )
    }
}

export default Nav;