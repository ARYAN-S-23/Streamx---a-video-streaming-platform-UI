import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_TMDB_KEY;

export default function Player() {
  const { id } = useParams();
  const [videoKey, setVideoKey] = useState(null);
  const [details, setDetails] = useState(null);

  useEffect(() => {
    // Fetch trailer
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        const trailer = data.results.find((v) => v.type === "Trailer");
        if (trailer) setVideoKey(trailer.key);
      });

    // Fetch movie details
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then(setDetails);
  }, [id]);

  if (!videoKey || !details) {
    return <h2 style={{ padding: 20 }}>Loading...</h2>;
  }

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1>{details.title}</h1>
      <p style={{ maxWidth: "800px" }}>{details.overview}</p>

      <div style={{ position: "relative", paddingTop: "56.25%" }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoKey}`}
          title="Movie Trailer"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "10px",
          }}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
