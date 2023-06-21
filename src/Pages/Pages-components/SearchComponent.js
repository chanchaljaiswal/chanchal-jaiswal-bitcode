import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";


/**
 * SearchComponent to handle searching functionality.
 * 
 * @param {Array} userData - Array of user data.
 * @param {function} setSearchResults - Callback function to set the search results.
 * @param {string} searchText - Text input for search.
 * @param {function} setSearchText - Callback function to set the search text.
 */
const SearchComponent = ({ userData,setSearchResults,searchText, setSearchText}) => {
  const [originalArray, setoriginalArray] = useState([...userData])

  useEffect(() => {
    if (searchText.trim() === "") {
      // If search text is empty, show all the user data
      setSearchResults(userData);
    } else {
       // Filter the user data based on search text
      const filteredResults = userData.filter((user) =>
      user.name.toLowerCase().includes(searchText.toLowerCase()) ||
      user.number.includes(searchText)
      );
      setSearchResults(filteredResults);
    }
  }, [searchText, userData]);

  return (
    <div className="searchContainer">
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Control
          type="text"
          placeholder="Search Contact"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </Form.Group>
    </div>
  );
};

export default SearchComponent;
