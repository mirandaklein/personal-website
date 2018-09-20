import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component{
    constructor(){
        super()
        this.state = {
            isHidden: true
        }
    }
    toggleHidden(){
        this.setState({
            isHidden: !this.state.isHidden
        })
    }
    render(
    ){
        return(
            <div className="nav-bar">
            <div className="nav-list link-toggle">
            <i class="fas fa-bars"></i>
            </div>
            <nav className="nav">
                <li className="nav-list"><a><Link to='/'>Biography</Link></a></li>
                <li className="nav-list"><a><Link to='/projects'>Projects</Link></a></li>
                <li className="nav-list"><a><Link to='/skills'>Skills</Link></a></li>
                <li className="nav-list"><a><Link to='/hobbies'>Hobbies</Link></a></li>
                <li className="nav-list"><a><Link to='/contact'>Contact</Link></a></li>
            </nav>
            </div>
        )
    }
}

export default Nav;