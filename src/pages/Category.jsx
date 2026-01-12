import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchCategory } from "../services/tmdb";
import VideoCard from "../components/VideoCard";

const GENRES = {
  education: 99,
  music: 10402,
  comedy: 35,
  sports: 10770,
};

export default function Category() {
  const { type } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const genreId = GENRES[type];
    if (!genreId) return;

    fetchCategory(genreId).then(setVideos);
  }, [type]);

  return (
    <div>
      <h2 style={{ padding: "20px", textTransform: "uppercase" }}>
        {type} Movies
      </h2>

      <div className="grid">
        {videos.map((movie) => (
          <VideoCard key={movie.id} video={movie} />
        ))}
      </div>
    </div>
  );
}
