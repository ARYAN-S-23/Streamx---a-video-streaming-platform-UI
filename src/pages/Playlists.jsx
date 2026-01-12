import { useState } from "react";
import {
  getPlaylists,
  createPlaylist,
  removeFromPlaylist,
} from "../utils/Playlists";
import VideoCard from "../components/VideoCard";

export default function Playlists() {
  const [name, setName] = useState("");
  const [playlists, setPlaylists] = useState(getPlaylists());

  function handleCreate() {
    if (!name.trim()) return;
    createPlaylist(name);
    setPlaylists(getPlaylists());
    setName("");
  }

  function handleRemove(playlistId, videoId) {
    removeFromPlaylist(playlistId, videoId);
    setPlaylists(getPlaylists());
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>My Playlists</h2>

      <div style={{ marginBottom: 20 }}>
        <input
          placeholder="New playlist name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleCreate} style={{ marginLeft: 8 }}>
          Create Playlist
        </button>
      </div>

      {playlists.length === 0 && <p>No playlists created yet.</p>}

      {playlists.map((playlist) => (
        <div key={playlist.id} style={{ marginBottom: 30 }}>
          <h3>{playlist.name}</h3>

          {playlist.videos.length === 0 && <p>No videos in this playlist.</p>}

          <div style={{ display: "flex", overflowX: "auto" }}>
            {playlist.videos.map((video) => (
              <div key={video.id} style={{ marginRight: 16 }}>
                <VideoCard video={video} />
                <button
                  onClick={() =>
                    handleRemove(playlist.id, video.id)
                  }
                  style={{ marginTop: 4 }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
