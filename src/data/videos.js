const videos = [
// EDUCATION (1–12)
{
  id: 1,
  title: "Interstellar",
  category: "Education",
  thumbnail: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  url: "https://www.youtube.com/watch?v=2LqzF5WauAw",
  type: "youtube"
},
{
  id: 2,
  title: "Oppenheimer",
  category: "Education",
  thumbnail: "https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg",
  url: "https://www.youtube.com/watch?v=F3OxA9Cz17A",
  type: "youtube"
},
{
  id: 3,
  title: "The Imitation Game",
  category: "Education",
  thumbnail: "https://image.tmdb.org/t/p/w500/zSqJ1qFq8NXFfi7JeIYMlzyR0dx.jpg",
  url: "https://www.youtube.com/watch?v=nuPZUUED5uk",
  type: "youtube"
},
{
  id: 4,
  title: "A Beautiful Mind",
  category: "Education",
  thumbnail: "https://image.tmdb.org/t/p/w500/zwzWCmH72OSC9NA0ipoqw5Zjya8.jpg",
  url: "https://www.youtube.com/watch?v=WFJgUm7iOKw",
  type: "youtube"
},
{
  id: 5,
  title: "The Theory of Everything",
  category: "Education",
  thumbnail: "https://image.tmdb.org/t/p/w500/rjQ3hYxK0Sx1L0jAYmtn8Z6S4Jc.jpg",
  url: "https://www.youtube.com/watch?v=GihpU0G5pEw",
  type: "youtube"
},
{
  id: 6,
  title: "Hidden Figures",
  category: "Education",
  thumbnail: "https://image.tmdb.org/t/p/w500/9lfz2W2uGjyow3am00rsPJ8iOyq.jpg",
  url: "https://www.youtube.com/watch?v=5wfrDhgUMGI",
  type: "youtube"
},
{
  id: 7,
  title: "Apollo 13",
  category: "Education",
  thumbnail: "https://image.tmdb.org/t/p/w500/7O3F3bM4R3qNN0eZZuG5R9ZmYfE.jpg",
  url: "https://www.youtube.com/watch?v=KtEIMC58sZo",
  type: "youtube"
},
{
  id: 8,
  title: "The Social Network",
  category: "Education",
  thumbnail: "https://image.tmdb.org/t/p/w500/ok5Wh8385Kgblq9MSU4VGvazeMH.jpg",
  url: "https://www.youtube.com/watch?v=lB95KLmpLR4",
  type: "youtube"
},
{
  id: 9,
  title: "Jobs",
  category: "Education",
  thumbnail: "https://image.tmdb.org/t/p/w500/6p0iYQkX0qPwrn9NnU1N9Z1Wn0P.jpg",
  url: "https://www.youtube.com/watch?v=aEr6K1bwIVs",
  type: "youtube"
},
{
  id: 10,
  title: "The Martian",
  category: "Education",
  thumbnail: "https://image.tmdb.org/t/p/w500/5aGhaIHYuQbqlHWvWYqMCnj40y2.jpg",
  url: "https://www.youtube.com/watch?v=ej3ioOneTy8",
  type: "youtube"
},
{
  id: 11,
  title: "Arrival",
  category: "Education",
  thumbnail: "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg",
  url: "https://www.youtube.com/watch?v=tFMo3UJ4B4g",
  type: "youtube"
},
{
  id: 12,
  title: "Gravity",
  category: "Education",
  thumbnail: "https://image.tmdb.org/t/p/w500/uPxtxhB2Fy9ihVqtBtNGHmknJqV.jpg",
  url: "https://www.youtube.com/watch?v=OiTiKOy59o4",
  type: "youtube"
},
{
  id: 13,
  title: "Manjummel Boys",
  category: "Education",
  thumbnail: "https://image.tmdb.org/t/p/w500/7cZ3D8jJpN96CBvs1BgqsSVqSdz.jpg",
  url: "https://www.youtube.com/watch?v=YfF0ZP9W4p0",
  type: "youtube"
},
{
  id: 14,
  title: "Drishyam",
  category: "Education",
  thumbnail: "https://image.tmdb.org/t/p/w500/2hXW0zC2X0mTzZzD8fRr7XJ5v9K.jpg",
  url: "https://www.youtube.com/watch?v=0pU6j4K9zWQ",
  type: "youtube"
},
{
  id: 15,
  title: "Take Off",
  category: "Education",
  thumbnail: "https://image.tmdb.org/t/p/w500/6Ck0ZkE1wC5v7TnE2S6r2pYqQ2P.jpg",
  url: "https://www.youtube.com/watch?v=Qv6X5QpG5dM",
  type: "youtube"
},
{
  id: 16,
  title: "12 Years a Slave",
  category: "Education",
  thumbnail: "https://image.tmdb.org/t/p/w500/kb3X943WMIJYVg4SOAyK0pmWL5D.jpg",
  url: "https://www.youtube.com/watch?v=z02Ie8wKKRg",
  type: "youtube"
},
{
  id: 17,
  title: "Schindler's List",
  category: "Education",
  thumbnail: "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
  url: "https://www.youtube.com/watch?v=gG22XNhtnoY",
  type: "youtube"
},
{
  id: 18,
  title: "The Pursuit of Happiness",
  category: "Education",
  thumbnail: "https://image.tmdb.org/t/p/w500/f6l9rghSHORkWLurUGJhaKAiyjY.jpg",
  url: "https://www.youtube.com/watch?v=89Kq8SDyvfg",
  type: "youtube"
},
{
  id: 19,
  title: "Hacksaw Ridge",
  category: "Education",
  thumbnail: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
  url: "https://www.youtube.com/watch?v=43bFm9T-9tQ",
  type: "youtube"
},
{
  id: 20,
  title: "The Pianist",
  category: "Education",
  thumbnail: "https://image.tmdb.org/t/p/w500/2hFvxCCWrTmCYwfy7yum0GKRi3Y.jpg",
  url: "https://www.youtube.com/watch?v=BFwGqLa_oAo",
  type: "youtube"
},
{
  id: 21,
  title: "October Sky",
  category: "Education",
  thumbnail: "https://image.tmdb.org/t/p/w500/6o9zFzQO1n8H0N6H8tYy7uF3k3F.jpg",
  url: "https://www.youtube.com/watch?v=zxJQgYPXjNw",
  type: "youtube"
},
{
  id: 22,
  title: "Airlift",
  category: "Education",
  thumbnail: "https://image.tmdb.org/t/p/w500/9z7rF6Zz9w8d1R7v5HnK0Vt8B7A.jpg",
  url: "https://www.youtube.com/watch?v=2x2Z3F8v7GQ",
  type: "youtube"
},
{
  id: 23,
  title: "Rocketry: The Nambi Effect",
  category: "Education",
  thumbnail: "https://image.tmdb.org/t/p/w500/4rS7GZ3nM2JZx2wZ3zZ5L5h7p8F.jpg",
  url: "https://www.youtube.com/watch?v=HGp2f3c6LxY",
  type: "youtube"
},
{
  id: 24,
  title: "Pad Man",
  category: "Education",
  thumbnail: "https://image.tmdb.org/t/p/w500/2xvP2QGZ5nE1N1Y1KQ4F3s6S4J.jpg",
  url: "https://www.youtube.com/watch?v=Kp1sW0Z2yq0",
  type: "youtube"
},



];

export default videos;
