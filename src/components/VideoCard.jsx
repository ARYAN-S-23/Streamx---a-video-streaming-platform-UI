import { Link } from "react-router-dom";
import { useState } from "react";
import { toggleWatchLater, isInWatchLater } from "../utils/watchLater";
import { getPlaylists, addToPlaylist } from "../utils/Playlists";

export default function VideoCard({ video }) {
  const [added, setAdded] = useState(isInWatchLater(video.id));

  function handleAdd(e) {
    e.preventDefault();
    toggleWatchLater(video);
    setAdded(!added);
  }

  function handlePlaylistAdd(e) {
    const playlistId = e.target.value;
    if (!playlistId) return;
    addToPlaylist(playlistId, video);
    alert("Added to playlist");
    e.target.value = "";
  }

  return (
    <div className="video-card">
      <Link to={`/video/${video.id}`}>
       <img
  src={video.thumbnail}
  alt={video.title}
  style={{
    width: "100%",
    height: "240px",
    objectFit: "cover",
    borderRadius: "8px"
  }}
/>

      </Link>

      <button
        onClick={handleAdd}
        className="mylist-btn"
        style={{
          background: added ? "#555" : "#e50914",
          color: "white",
          border: "none",
          padding: "6px 10px",
          marginTop: "6px",
          cursor: "pointer",
          borderRadius: "4px",
          width: "100%",
        }}
      >
        {added ? "Remove from My List" : "Add to My List"}
      </button>

      <select
        onChange={handlePlaylistAdd}
        className="playlist-select"
        style={{
          marginTop: "6px",
          width: "100%",
          padding: "6px",
          borderRadius: "4px",
          border: "none",
        }}
      >
        <option value="">Add to Playlist</option>
        {getPlaylists().map((p) => (
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
      </select>
    </div>
  );
}
