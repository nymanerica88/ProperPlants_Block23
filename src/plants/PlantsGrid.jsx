import Plants from "./Plants";
import "./Plants.css";

function PlantsGrid({ plants, addToCart }) {
  console.log("plants", plants);
  return (
    <section className="plants-grid">
      <h2>Plants</h2>
      <ul>
        {plants.map((plantItem) => {
          return (
            <Plants
              key={plantItem.id}
              plantItem={plantItem}
              addToCart={addToCart}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default PlantsGrid;
