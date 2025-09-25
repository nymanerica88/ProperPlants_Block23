function Plants({ plantItem, addToCart }) {
  return (
    <li className="plants">
      <figure>{plantItem.image}</figure>
      <h3>{plantItem.name}</h3>
      <button onClick={() => addToCart(plantItem)}>Add to Cart</button>
    </li>
  );
}

export default Plants;
