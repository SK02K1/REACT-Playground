import { useState } from "react";

const items = ["Eggs", "Bread", "Vada Pav", "Milk", "Paneer"];

export const AddToCart = () => {
  const [cartItems, setCartItems] = useState({});

  const btnClickHandler = (selectedItem) => {
    setCartItems(
      cartItems[selectedItem] === undefined
        ? { ...cartItems, [selectedItem]: { qty: 1 } }
        : {
            ...cartItems,
            [selectedItem]: {
              ...cartItems[selectedItem],
              qty: cartItems[selectedItem].qty + 1
            }
          }
    );
  };

  return (
    <div className="container">
      <h2>07. Add To Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <span>{item}</span>
            <button onClick={() => btnClickHandler(item)}>add to cart</button>
          </li>
        ))}
      </ul>
      <h3>
        Cart Items{" "}
        <span role="img" aria-label="cart emmoji">
          🛒
        </span>
      </h3>
      <ul>
        {Object.keys(cartItems).length === 0 ? (
          <h4>Cart is empty</h4>
        ) : (
          Object.keys(cartItems).map((item) => (
            <li key={item}>
              <span>{item}</span>
              <span>qty: {cartItems[item].qty}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
