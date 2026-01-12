import { Link } from "react-router-dom";
import { useState } from "react";
import { searchMovies } from "../services/tmdb";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  async function handleSearch(e) {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      const data = await searchMovies(value);
      setResults(data.slice(0, 5));
    } else {
      setResults([]);
    }
  }

  return (
    <nav className="navbar">
      <h2 className="logo">StreamX</h2>

      {/* Search */}
      <div className="search-box">
        <input
          className="search-input"
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={handleSearch}
        />
        {results.length > 0 && (
          <div className="search-results">
            {results.map((movie) => (
              <Link
                key={movie.id}
                to={`/video/${movie.id}`}
                onClick={() => {
                  setResults([]);
                  setQuery("");
                }}
              >
                {movie.title}
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Burger */}
      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* Menu */}
      <div className={`nav-links ${open ? "active" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/category/education">Education</Link>
        <Link to="/category/music">Music</Link>
        <Link to="/category/comedy">Comedy</Link>
        <Link to="/category/sports">Sports</Link>
        <Link to="/my-list">My List</Link>
        <Link to="/playlists">Playlists</Link>
      </div>
    </nav>
  );
}
