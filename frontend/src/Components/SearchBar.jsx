// Importing Styles
import '../Styles/SearchBar.css'

function SearchBar({search, setSearch}) {
    return(
            <div className="search-container">
              <label htmlFor="searchBar">Search by Name or ID</label>
              <input
                type="search"
                id="searchBar"
                name="searchBar"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Enter name or ID"
              />
            </div>
    )
}

export default SearchBar;