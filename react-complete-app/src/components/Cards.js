import cardsStyles from "../styles/cards.module.css";
import mangoImg from "../images/Mango.png";
import bananaImg from "../images/Banana.png";
import vegImg from "../images/Veggies.png";

const Cards = () => {
  return (
    <div className={cardsStyles.cardsContainer}>
      <div className={`${cardsStyles.card} ${cardsStyles.pink}`}>
        <div className={cardsStyles.caption}>
          Season's fresh & crispy, always!
        </div>
        <img className={cardsStyles.mango} src={mangoImg} alt="" />
      </div>
      <div className={`${cardsStyles.card} ${cardsStyles.orange}`}>
        <div className={cardsStyles.caption}>Your daily dose of goodness</div>
        <img className={cardsStyles.veg} src={vegImg} alt="" />
      </div>
      <div className={`${cardsStyles.card} ${cardsStyles.blue}`}>
        <div className={cardsStyles.caption}>Deals on bananas</div>
        <img className={cardsStyles.banana} src={bananaImg} alt="" />
      </div>
    </div>
  );
};
export default Cards;
