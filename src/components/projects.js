import React, { Component } from 'react'

class Projects extends Component{
    render(){
        return(
            <div className="projects-container">
                <li className="project a"><a href="https://mirandaklein.github.io/neighborhood-maps/">Knoxville Bars</a></li>
                <li className="project b"><a href="https://mirandaklein.github.io/ArcadeGame/">Arcade Game</a></li>
                <div className="project c">A</div>
                <div className="project d">A</div>
                <div className="project e">A</div>
                <div className="project f">A</div>
            </div>
        )
    }
}

export default Projects;