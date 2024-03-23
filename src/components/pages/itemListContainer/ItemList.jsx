import { ProductCard } from "../../common/ProductCard";
import "./ItemListContainer.css"
const ItemList = ({ products }) => {
  return (
    <div className="cards-container">
      {products.map(({id, img, name, description, price}) => {
        return (
          <ProductCard
            key={id}
            img={img}
            name={name}
            description={description}
            price={price}
            id={id}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
