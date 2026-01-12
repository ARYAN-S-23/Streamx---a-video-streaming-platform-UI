const KEY = "streamx_watch_later";

export function getWatchLater() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function toggleWatchLater(video) {
  const list = getWatchLater();
  const exists = list.find(v => v.id === video.id);

  const updated = exists
    ? list.filter(v => v.id !== video.id)
    : [...list, video];

  localStorage.setItem(KEY, JSON.stringify(updated));
  return updated;
}

export function isInWatchLater(id) {
  return getWatchLater().some(v => v.id === id);
}
