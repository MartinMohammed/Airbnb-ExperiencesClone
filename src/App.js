import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardGroup from "./components/CardGroup";

const App = () => {
  const cards = [
    {
      id: 1,
      image: "swimming.svg",
      rating: "5.0",
      reviewCount: 6,
      title: "Life lessons with Katie Zaferes",
      cost: 136,
    },
    {
      id: 2,
      image: "wedding.svg",
      rating: "5.0",
      reviewCount: 30,
      title: "Learn wedding photography",
      cost: 125,
    },
    {
      id: 3,
      image: "biking.svg",
      rating: "5.0",
      reviewCount: 2,
      title: "Group Mountain Biking",
      cost: 50,
    },
  ];

  return (
    <div className="container">
      <Navbar />
      <Hero />
      <CardGroup cards={cards} />
    </div>
  );
};

export default App;
