import VideoCard from "./VideoCard";

export default function Row({ title, videos }) {
  return (
    <div style={{ marginBottom: "40px" }}>
      <h2 style={{ color: "white", marginBottom: "10px" }}>{title}</h2>

      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "15px",
          paddingBottom: "10px",
        }}
      >
        {videos.map((video) => (
          <div key={video.id} style={{ minWidth: "180px" }}>
            <VideoCard video={video} />
          </div>
        ))}
      </div>
    </div>
  );
}
