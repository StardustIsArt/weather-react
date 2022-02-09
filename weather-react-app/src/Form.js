import React from "react";

export default function Form() {
  return (
    <div className="form">
      <form id="search-form">
        <div className="row search">
          <div className="col-8">
            <input
              type="search"
              placeholder="Enter a city"
              className="form-control search-input"
              id="cityInput"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              className="btn btn-primary w-40"
              value="Search"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
