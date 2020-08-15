import React from "react";
import "./Products.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () =>
    //Add item to basket
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        price: price,
        rating: rating,
        image: image,
      },
    });
  return (
    <div className="product">
      <div className="product_Info">
        <p className="title">{title}</p>
        <h3 className="product_price"> {price}$</h3>

        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <img
                src="https://cdn.dribbble.com/users/411234/screenshots/2427834/star.png"
                alt=""
                className="star"
              />
            ))}
        </div>
      </div>
      <img src={image} className="product_image" alt="" />

      <button className="btn" onClick={addToBasket}>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
