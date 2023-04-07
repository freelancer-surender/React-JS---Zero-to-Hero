import itemsStyles from "../styles/items.module.css";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AppContext from "../services/AppContext";
import AddItem from "./AddItem";

const Items = () => {
  const params = useParams();
  const type = params["type"];
  const [state, setState] = useContext(AppContext);
  const [items, setItems] = useState([]);

  useEffect(() => {
    let tempItems = [];
    for (let product of state.products) {
      if (product.type === type) {
        tempItems.push(product);
      }
    }
    setItems(tempItems);
  }, [type, state.products]);

  return (
    <div className={itemsStyles.itemsContainer}>
      <div className={itemsStyles.heading}>All {type}</div>
      <div className={itemsStyles.items}>
        {items.map((item) => {
          return (
            <div className={itemsStyles.item} key={item.id}>
              <div className={itemsStyles.picContainer}>
                <img src={item.pic} alt="" />
              </div>
              <div className={itemsStyles.dataContainer}>
                <div className={itemsStyles.name}>{item.name}</div>
                <div className={itemsStyles.weight}>{item.weight}</div>
                <div className={itemsStyles.price}>
                  <div className={itemsStyles.current}>₹{item.price}</div>
                  {item.was !== item.price ? (
                    <div className={itemsStyles.was}>₹{item.was}</div>
                  ) : null}
                </div>
                <div className={itemsStyles.cta}>
                  <AddItem item={item} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Items;
