import { useContext } from "react";
import MyContext from "./MyContext";
import "./Products.css";

const Snacks = () => {
  const [productCnt, setProductCnt] = useContext(MyContext);
  const addToCart = () => {
    setProductCnt(productCnt + 1);
  };
  const snacks = [
    {
      id: 1,
      name: "Macaron",
      img: "https://images.unsplash.com/photo-1558326567-98ae2405596b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3dlZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "Donut",
      img: "https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHN3ZWV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "Icecream",
      img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHN3ZWV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      name: "Cakes",
      img: "https://images.unsplash.com/photo-1616690710400-a16d146927c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNha2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <div>
      <h1>Snacks</h1>
      <div className="product-container">
        {snacks.map((snack) => {
          return (
            <div className="product" key={snack.id}>
              <img className="product-img" src={snack.img} alt={snack.name} />
              <div className="d-flex s-between">
                <div className="product-name">{snack.name}</div>
                <div className="product-action">
                  <button className="add-btn" onClick={addToCart}>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Snacks;
