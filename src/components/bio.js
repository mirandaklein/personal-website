import React, {Component} from 'react';

class Bio extends Component{
    render(){
        return(
            <div className="bio">
                <div className="photo-container">
                    <img src={this.props.photo} alt="Miranda" className="miranda-photo"></img>
                </div> 
                <div className="bio-container">
                {this.props.name} is a Front End Web Developer living in the Denver Metro since 2015.
                </div>
            </div>
        );
    }
}

export default Bio;