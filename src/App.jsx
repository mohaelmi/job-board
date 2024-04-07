import react, { useState } from "react";
// import Header from './compponents/Header'
import Navbar from "./compponents/Navbar/Navbar";
import Header from "./compponents/Header/Header";
import SearchBar from "./compponents/SearchBar/Searchbar";
import JobList from "./compponents/JobList/JobList";
import jobs from "./JobsDummydata";

function App() {
  const [filtered, setFileterd] = useState(jobs)
  // console.log(jobs);
  return (
    <div>
        <Navbar />
        <Header />
     
        <SearchBar jobs={jobs} filtered = {setFileterd}/>
        {filtered ?  <JobList jobs={filtered} /> : <JobList jobs={jobs}  /> }
    </div>
  );
}

export default App;
