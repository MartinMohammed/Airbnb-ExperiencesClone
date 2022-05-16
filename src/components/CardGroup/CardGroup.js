import Card from "./Card/Card";
import "./CardGroup.css";

const CardGroup = (props) => {
  const renderCardList = () => {
    const cardList = props.cards.map((card) => {
      return <Card {...card} key={card.id} />;
    });
    return cardList;
  };

  return <div className="card-group">{renderCardList()}</div>;
};

export default CardGroup;
