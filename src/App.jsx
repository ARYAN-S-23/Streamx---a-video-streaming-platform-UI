import { BrowserRouter, Routes, Route } from "react-router-dom";
import Playlists from "./pages/Playlists";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Player from "./pages/Player";
import Category from "./pages/Category";
import MyList from "./pages/MyList";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video/:id" element={<Player />} />
        <Route path="/category/:type" element={<Category />} />
        <Route path="/my-list" element={<MyList />} />
        <Route path="/playlists" element={<Playlists />} />
      </Routes>
    </BrowserRouter>
  );
}

