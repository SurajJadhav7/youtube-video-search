import React, { useState } from "react";
import "./Search.css";

const Search = (props) => {
  const [term, setTerm] = useState("");
  const onFormSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(term);
  };
  return (
    <div className="form">
      <form onSubmit={onFormSubmit}>
        <div className="search">
          <input
            type="text"
            value={term}
            onChange={(event) => {
              setTerm(event.target.value);
            }}
            placeholder="Search any video here..."
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
