import { useEffect, useState } from "react";
import { fetchTrending } from "../services/tmdb";
import { Link } from "react-router-dom";

export default function HeroBanner() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchTrending().then((data) => {
      setMovie(data[Math.floor(Math.random() * data.length)]);
    });
  }, []);

  if (!movie) return null;

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url(${movie.backdrop})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "40px",
      }}
    >
      <h1 style={{ fontSize: "3rem", maxWidth: "600px" }}>{movie.title}</h1>
      <p style={{ maxWidth: "600px", marginTop: "10px" }}>{movie.description}</p>

      <div style={{ marginTop: "20px" }}>
        <Link to={`/video/${movie.id}`}>
          <button
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              background: "#e50914",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            ▶ Play Trailer
          </button>
        </Link>
      </div>
    </div>
  );
}
