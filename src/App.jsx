import react from "react";
// import Header from './compponents/Header'
import Navbar from "./compponents/Navbar/Navbar";
import Header from "./compponents/Header/Header";
import SearchBar from "./compponents/SearchBar/Searchbar";
import JobList from "./compponents/JobList/JobList";
import jobs from "./JobsDummydata";

function App() {
  // console.log(jobs);
  return (
    <div>
        <Navbar />
        <Header />
     
        <SearchBar />
        <JobList jobs={jobs} />
    </div>
  );
}

export default App;
