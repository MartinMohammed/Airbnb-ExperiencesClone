import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardGroup from "./components/CardGroup";
import experiences from "./Data/experiences";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <CardGroup cards={experiences} />
    </div>
  );
};

export default App;
