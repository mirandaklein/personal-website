import React, {Component} from 'react';

class Bio extends Component{
    render(){
        return(
            <div className="bio">
                <div className="photo">
                    <img src={this.props.photo} alt='author' className='miranda-photo'></img>
                 </div>
                 <div className="bio-info">
                    Miranda Klein is a Front-End Web Developer living in the Denver Metro
                    since 2015
                 </div>
            </div>
        );
    }
}

export default Bio;