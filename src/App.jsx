import React, { useState } from "react";
import Header from "./components/Header";
import Filters from "./components/Filters";
import JobBoard from "./components/JobBoard";
import SearchBar from "./components/SearchBar";

import "./App.css";
import jobData from "./JobDummydata";

function App() {
  
  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobData);

  
  const handleSearch = () => {
    const filteredData = jobData.filter((job) =>
      job.title.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    setFilteredJobs(filteredData);
  };

  return (
    <div className="app-container">
      <Header />
      <Filters />

      
      <SearchBar
        onSearch={handleSearch}
        searchKeyword={searchKeyword}
        setSearchKeyword={setSearchKeyword}
      />
      

     
      {filteredJobs.map((job) => (
        <JobBoard key={job.id} {...job} />
      ))}
    </div>
  );
}

export default App;