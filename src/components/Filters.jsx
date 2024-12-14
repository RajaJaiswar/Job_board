import React from "react";
import "../App.css";  


function Filters() {
  return (
    <section className="filters">
      <div className="filters-group">
        <label htmlFor="job-role">Job Role:</label>
        <select id="job-role" name="job-role">
          <option value="all">All</option>
          <option value="frontend">Frontend Developer</option>
          <option value="backend">Backend Developer</option>
          <option value="designer">Designer</option>
        </select>
      </div>

      <div className="filters-group">
        <label htmlFor="job-type">Job Type:</label>
        <select id="job-type" name="job-type">
          <option value="all">All</option>
          <option value="full-time">Full-Time</option>
          <option value="part-time">Part-Time</option>
          <option value="internship">Internship</option>
        </select>
      </div>

      <div className="filters-group">
        <label htmlFor="experience">Experience:</label>
        <select id="experience" name="experience">
          <option value="all">All</option>
          <option value="0-1">Beginner</option>
          <option value="2-3">Mid-Level</option>
          <option value="4+">Advanced</option>
        </select>
      </div>

      
    </section>
  );
}

export default Filters