const KEY = "streamx_playlists";

export function getPlaylists() {
  return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function createPlaylist(name) {
  const playlists = getPlaylists();

  const newPlaylist = {
    id: Date.now().toString(),
    name,
    videos: [],
  };

  localStorage.setItem(KEY, JSON.stringify([...playlists, newPlaylist]));
}

export function addToPlaylist(playlistId, video) {
  const playlists = getPlaylists().map((playlist) => {
    if (playlist.id === playlistId) {
      const exists = playlist.videos.find((v) => v.id === video.id);
      if (exists) return playlist;

      return {
        ...playlist,
        videos: [...playlist.videos, video],
      };
    }
    return playlist;
  });

  localStorage.setItem(KEY, JSON.stringify(playlists));
}

export function removeFromPlaylist(playlistId, videoId) {
  const playlists = getPlaylists().map((playlist) => {
    if (playlist.id === playlistId) {
      return {
        ...playlist,
        videos: playlist.videos.filter((v) => v.id !== videoId),
      };
    }
    return playlist;
  });

  localStorage.setItem(KEY, JSON.stringify(playlists));
}

