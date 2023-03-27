import { useContext } from "react";
import MyContext from "./MyContext";
import "./Products.css";
const Fruits = () => {
  const [productCnt, setProductCnt] = useContext(MyContext);
  const addToCart = () => {
    setProductCnt(productCnt + 1);
  };
  const fruits = [
    {
      id: 1,
      name: "Strawberry",
      img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZydWl0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 2,
      name: "Orange",
      img: "https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGZydWl0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 3,
      name: "Cherry",
      img: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZydWl0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: 4,
      name: "Kiwi",
      img: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZnJ1aXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <div>
      <h1>Fruits</h1>
      <div className="product-container">
        {fruits.map((fruit) => {
          return (
            <div className="product" key={fruit.id}>
              <img className="product-img" src={fruit.img} alt={fruit.name} />
              <div className="d-flex s-between">
                <div className="product-name">{fruit.name}</div>
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

export default Fruits;
