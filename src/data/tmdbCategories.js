import { fetchCategory } from "../services/tmdb";

export const loadAllCategories = async () => {
  const education = await fetchCategory(99);    // Documentary
  const music = await fetchCategory(10402);     // Music
  const comedy = await fetchCategory(35);       // Comedy
  const sports = await fetchCategory(10770);    // TV Movie / Sports style

  return {
    education,
    music,
    comedy,
    sports
  };
};
