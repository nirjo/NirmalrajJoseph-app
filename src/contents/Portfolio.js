import React from 'react';
import project1 from '../img/Maps/pr1.png';
import project2 from '../img/Maps/pr2.png';
import project3 from '../img/Maps/pr3.png';
// import project4 from '../img/project4.png';

const Portfolio =()=>{
        return (
            <div className="condiv">
            <h1 className="subtopic">My Works</h1>
            <div className="hr_line line2"><div className="inner2 inner3"></div></div>
            <div class="port_out port1"><div class="port_in"><a href="https://github.com/nirjo/NS-Portfolio"><img src={project1} className="po1"></img></a></div></div>
            <div class="port_out port2"><div class="port_in"><a href="https://github.com/nirjo/MovieZ.git"><img src={project2} className="po1"></img></a></div></div>
            <div class="port_out port3"><div class="port_in"><a href="https://github.com/nirjo/NJ_TodoList-JS.git"><img src={project3} className="po1"></img></a></div></div>
            
            </div>
            )
        }
    
export default Portfolio
    