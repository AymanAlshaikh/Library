const SearchBar = (props) => {
  return (
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">
        SEARCH
      </span>
      <input
        onChange={(e) => props.setQuery(e.target.value)}
        type="text"
        class="form-control"
        placeholder="Book title/genre"
        aria-label="Search"
        aria-describedby="basic-addon1"
      />
    </div>
  );
};
export default SearchBar;
