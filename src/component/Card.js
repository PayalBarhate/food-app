import React, { useState, useRef, useEffect } from "react";
import "../index.css";
import { useDispatchCart, useCart } from "./ContextReducer";

export default function Card(props) {
  let dispatch = useDispatchCart();
  let data = useCart();
  let options = props.options;
  let priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const priceRef = useRef();

  const handleAddToCart = async () => {
    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalprice,
      qty: qty,
      size: size,
    });
    console.log(data);
  };

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);
  let finalprice = qty * parseInt(options[size]);
  return (
    <div style={{ margin: "1em", border: "solid" }}>
      <img
        src={props.foodItem.img}
        alt="Avatar"
        style={{ width: "268px", height: "260px" }}
      />
      <h5 className="card-title">{props.foodItem.name}</h5>
      <div className="container ">
        <select
          className="m-2  h-100 bg-success rounded"
          onChange={(e) => setQty(e.target.value)}
        >
          {Array.from(Array(10), (e, iteam) => {
            return (
              <option key={iteam + 1} value={iteam + 1}>
                {iteam + 1}
              </option>
            );
          })}
        </select>
        <select
          className="m-2  h-100 bg-success rounded"
          ref={priceRef}
          onChange={(e) => setSize(e.target.value)}
        >
          {/* map the value in databasename */}

          {priceOptions.map((data) => {
            return (
              <option key={data} value={data}>
                {data}
              </option>
            );
          })}
        </select>
        <div className="d-inline h-100 fs-5">{finalprice}/-</div>
        <hr></hr>
        <button
          className={"btn btn-success justify-center ms-2"}
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
        <hr></hr>
      </div>
    </div>
  );
}
