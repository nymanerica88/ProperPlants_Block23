// export default function App() {
//   return <></>;
// }
import { PLANTS } from "./data/plants";
import PlantsGrid from "./plants/PlantsGrid";
import Cart from "./cart/Cart";
import { useState } from "react";
function App() {
  const [cart, setCart] = useState([]);
  console.log("cart", cart);
  const addToCart = (plantItem) => {
    const ItemExist = cart.find((item) => item.id === plantItem.id);
    if (ItemExist) {
      setCart(
        cart.map((item) =>
          item.id === plantItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      const item = { ...plantItem, quantity: 1 };
      setCart([...cart, item]);
    }
  };

  const removeFromCart = (itemToRemove) => {
    setCart(
      cart
        .map((item) => {
          if (item.id === itemToRemove.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        })
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <>
      <h1>Proper Plants</h1>
      <main>
        <PlantsGrid plants={PLANTS} addToCart={addToCart} />
        <Cart
          cart={cart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      </main>
    </>
  );
}
export default App;
