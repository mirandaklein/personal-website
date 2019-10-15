import React, { Component } from 'react'

class Projects extends Component{
    render(){
        return(
            <div className="projects-container">
                <li className="project a"><a href="https://mirandaklein.github.io/neighborhood-maps/" rel="noopener noreferrer" target="_blank">Knoxville Bars</a></li>
                <li className="project a"><a href="https://mirandaklein.github.io/ArcadeGame/" rel="noopener noreferrer" target="_blank">Arcade Game</a></li>
                <li className="project a"><a href="https://mirandaklein.github.io/Pixel-Art-Maker/" rel="noopener noreferrer" target="_blank">Pixel Art Designer</a></li>
            </div>
        )
    }
}

export default Projects;