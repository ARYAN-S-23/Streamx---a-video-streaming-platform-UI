import HeroBanner from "../components/HeroBanner";
import { useEffect, useState } from "react";
import { loadAllCategories } from "../data/tmdbCategories";
import Row from "../components/Row";

export default function Home() {
  const [categories, setCategories] = useState({
    education: [],
    music: [],
    comedy: [],
    sports: [],
  });

  useEffect(() => {
    loadAllCategories().then(setCategories);
  }, []);

  return (
  <div>
    <HeroBanner />

    <div style={{ padding: "20px" }}>
      <Row title="Education Movies" videos={categories.education} />
      <Row title="Music Movies" videos={categories.music} />
      <Row title="Comedy Movies" videos={categories.comedy} />
      <Row title="Sports Movies" videos={categories.sports} />
    </div>
  </div>
);

}
