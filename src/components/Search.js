import React, { Component } from "react";

class Search extends React.Component {
  render() {
    return (
      <div>
        <div class="searchform__popup" id="searchForm">
          <a href="#" class="btn-close">
            <i class="la la-remove"></i>
          </a>
          <div class="searchform__body">
            <p>Start typing and press Enter to search</p>
            <form class="searchform">
              <input
                type="text"
                name="popup-search"
                id="popup-search"
                class="searchform__input"
                placeholder="Search Users..."
              />
              <button type="submit" class="searchform__submit">
                <i class="la la-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Search;
