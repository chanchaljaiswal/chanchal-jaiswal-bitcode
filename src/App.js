import "bootstrap/dist/css/bootstrap.min.css";
import AddUser from "./Pages/Pages-components/AddUser";
import SearchComponent from "./Pages/Pages-components/SearchComponent";
import ListComponent from "./Pages/Pages-components/ListComponent";
import { useEffect, useState } from "react";


/**
 * Main component for the application.
 */
function App() {
  const [userData, setuserData] = useState([
  ]);
  const [nextId, setNextId] = useState(1);    
  const [searchText, setSearchText] = useState("");   

  const [searchResults, setSearchResults] = useState([]);  


   /**
   * Renders the main application.
   */
  return (
    <div className="App">
      <div className="mainContainer">
      {/* AddUser component for adding new users */}
        <AddUser  
        userData={userData}
          setUserData={setuserData}
          nextId={nextId}
          setNextId={setNextId}
        />
        {/* SearchComponent for searching users */}
        <SearchComponent
          userData={userData}
          setUserData={setuserData}
          setSearchResults={setSearchResults}
          searchText={searchText}
          setSearchText={setSearchText}
        />
        {/* ListComponent for displaying the list of users */}
        <ListComponent data={searchText.length ? searchResults : userData} setUserData={setuserData} />
      </div>
    </div>
  );
}

export default App;
