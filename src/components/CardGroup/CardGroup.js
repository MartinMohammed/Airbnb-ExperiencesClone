import Card from "./Card/Card";
import "./CardGroup.css";

const CardGroup = (props) => {
  const cardList = props.cards.map((card) => {
    // spread operator takes the properties of card and create a seperate
    // prop for each prop - like passing indvidually.
    return <Card {...card} key={card.id} />;
  });

  return <section className="card-list">{cardList}</section>;
};

export default CardGroup;
