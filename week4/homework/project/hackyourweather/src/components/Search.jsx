import React from "react";

export default function Search(props) {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input
          type="text"
          value={props.cityName}
          onChange={props.onChange}
          className="search-input"
        ></input>

        <input
          type="submit"
          value="Search"
          className="search-btn"
          disabled={props.cityName.length === 0}
        />
      </form>
    </div>
  );
}
