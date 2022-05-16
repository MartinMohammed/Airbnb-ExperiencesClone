import "./Card.css";

const Card = ({ id, image, rating, reviewCount, title, cost }) => {
  return (
    <div className="card">
      <div className="card-stats">
        <img
          className="card-image"
          src={require(`../../../Images/${image}`)}
          alt={title}
        />
        <div className="card-review">
          <i className="card-review-icon"></i>
          <span>{rating}</span>
          <span className="text--gray">({reviewCount}) ·</span>
          <span className="text--gray"> USA</span>
        </div>
        <p className="card-title">{title}</p>
        <p className="card-price">
          <span className="text--bold">From ${cost}</span> / person
        </p>
      </div>
    </div>
  );
};

export default Card;
