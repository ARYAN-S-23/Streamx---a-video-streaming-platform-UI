import { getWatchLater } from "../utils/watchLater";
import VideoCard from "../components/VideoCard";

export default function MyList() {
  const list = getWatchLater();

  return (
    <div style={{ padding: 20 }}>
      <h2>My List</h2>

      {list.length === 0 && <p>No videos added yet.</p>}

      <div style={{ display: "flex", overflowX: "auto" }}>
        {list.map(v => (
          <VideoCard key={v.id} video={v} />
        ))}
      </div>
    </div>
  );
}
