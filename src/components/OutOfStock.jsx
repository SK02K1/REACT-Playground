const items = [
  {
    title: "Tanay Ki Shakti",
    img: "https://c.tenor.com/7qM3ctLvxQAAAAAd/omg-omgtanay.gif",
    outOfStock: true
  },
  {
    title: "Tanay Ki Shakti",
    img: "https://c.tenor.com/guxyYW8OazAAAAAC/tanay-tanay-pratap.gif",
    outOfStock: false
  },
  {
    title: "Tanay Ki Shakti",
    img: "https://c.tenor.com/7qM3ctLvxQAAAAAd/omg-omgtanay.gif",
    outOfStock: true
  }
];

export const OutOfStock = () => {
  return (
    <div className="container">
      <h2>13. Out of stock (grey)</h2>
      <div className="items-container">
        {items.map(({ title, img, outOfStock }, i) => {
          return (
            <div className="item-card" key={i}>
              {!outOfStock && (
                <div className="overlay">
                  <h3>Out of stock</h3>
                </div>
              )}
              <img src={img} alt={title} />
              <h3>{title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};
