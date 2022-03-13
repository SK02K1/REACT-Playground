import { useState } from "react";

const items = [
  { id: 1, name: "Eggs" },
  { id: 2, name: "Bread" },
  { id: 3, name: "Vada Pav" },
  { id: 4, name: "Milk" },
  { id: 5, name: "Paneer" }
];

export const AddToCart = () => {
  const [cartItems, setCartItems] = useState([]);

  const btnClickHandler = (selectedItem) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.find((itemInfo) => itemInfo.id === selectedItem.id)
        ? prevCartItems.map((itemInfo) =>
            itemInfo.id === selectedItem.id
              ? { ...itemInfo, qty: itemInfo.qty + 1 }
              : itemInfo
          )
        : [...prevCartItems, { ...selectedItem, qty: 1 }];
    });
  };

  return (
    <div className="container">
      <h2>07. Add To Cart</h2>
      <ul>
        {items.map((itemInfo) => (
          <li key={itemInfo.id}>
            <span>{itemInfo.name}</span>
            <button onClick={() => btnClickHandler(itemInfo)}>
              add to cart
            </button>
          </li>
        ))}
      </ul>
      <h3>
        Cart Items{" "}
        <span role="img" aria-label="cart emmoji">
          🛒
        </span>
      </h3>
      <p>
        {cartItems.length === 0
          ? "cart is empty"
          : `items in cart: ${cartItems.length}`}
      </p>
      <ul>
        {cartItems.map(({ id, name, qty }) => {
          return (
            <li key={id}>
              <span>{name}</span>
              <span>{qty}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
