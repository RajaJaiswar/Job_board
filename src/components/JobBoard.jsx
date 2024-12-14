import React from "react";
import "../App.css";  


function JobBoard(props) {
  return (
    <section className="job-board">
      <div>
      <h2 className="job-board-title">Available Jobs</h2>
      </div>
      <div className="job-list">
        <div className="job-card">
          <h3 className="job-title">{props.title}-{props.company}</h3>
          <p className="job-description">Build amazing UIs with React and CSS.</p>
          <p className="job-description">{props.type} &#x2022; {props.experience}</p>
          <a href={props.job_link}> 
          <button className="job-button">Apply</button>
          </a>
          <div>
          <p className="days">posted 2 days ago</p>
          </div>
        </div>
    
        
      </div>
    </section>
  );
}

export default JobBoard;