import "./Card.css";

const Card = (props) => {
  const {
    coverImg,
    title,
    price,
    location,
    openSpots,
    stats: { rating, reviewCount },
  } = props;

  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <img
        className="card-image"
        src={require(`../../../Images/${coverImg}`)}
        alt={title}
      />
      <div className="card-stats">
        <div className="card-review">
          <i className="card-review-icon"></i>
          <span>{rating}</span>
          <span className="text--gray">({reviewCount}) ·</span>
          <span className="text--gray"> {location}</span>
        </div>
        <p className="card-title">{title}</p>
        <p className="card-price">
          <span className="text--bold">From ${price}</span> / person
        </p>
      </div>
    </div>
  );
};

export default Card;
