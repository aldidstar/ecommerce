import React, { useState } from "react";
// import Photo from "../../images/iphone.jpeg";
import { Link } from "react-router-dom";
import { addTransaction } from "../../actions/transaction";
import { useDispatch } from "react-redux";

export default function DetailProduct() {
  const initialUserState = {
    title: localStorage.getItem("title"),
    brand: localStorage.getItem("brand"),
    detail: localStorage.getItem("detail"),
    price: parseInt(localStorage.getItem("price")),
    quantity: 1,
    color: "",
    capacity: "",
  };

  const [detail, setDetail] = useState(initialUserState);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setDetail({ ...detail, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addTransaction(
        detail.title,
        detail.brand,
        detail.detail,
        detail.price,
        detail.quantity,
        detail.color,
        detail.capacity
      )
    );
    setDetail(initialUserState);
    window.location = "/";
  };

  const cancelDetail = (event) => {
    event.preventDefault();
    window.location = "/";
  };

  const addQuantity = (event) => {
    event.preventDefault();
    setDetail({
      title: detail.title,
      detail: detail.detail,
      brand: detail.brand,
      capacity: detail.capacity,
      color: detail.color,
      price: detail.price + detail.price / detail.quantity,
      quantity: detail.quantity + 1,
    });
  };

  const minusQuantity = (event) => {
    if (detail.quantity >= 2) {
      event.preventDefault();
      setDetail({
        title: detail.title,
        brand: detail.brand,
        detail: detail.detail,
        capacity: detail.capacity,
        color: detail.color,
        price: detail.price - detail.price / detail.quantity,
        quantity: detail.quantity - 1,
        
      });
    }
  };

  const addColorBlack = (event) => {
    event.preventDefault();
    setDetail({
      title: detail.title,
      brand: detail.brand,
      detail: detail.detail,
      capacity: detail.capacity,
      color: "Black",
      price: detail.price,
      quantity: detail.quantity,
    });
  };

  const addColorWhite = (event) => {
    event.preventDefault();
    setDetail({
      title: detail.title,
      brand: detail.brand,
      detail: detail.detail,
      capacity: detail.capacity,
      color: "White",
      price: detail.price,
      quantity: detail.quantity,
    });
  };

  const addCapacity32 = (event) => {
    event.preventDefault();
    setDetail({
      title: detail.title,
      brand: detail.brand,
      detail: detail.detail,
      capacity: "32GB",
      color: detail.color,
      price: detail.price,
      quantity: detail.quantity,
    });
  };

  const addCapacity64 = (event) => {
    event.preventDefault();
    setDetail({
      title: detail.title,
      brand: detail.brand,
      detail: detail.detail,
      capacity: "64GB",
      color: detail.color,
      price: detail.price,
      quantity: detail.quantity,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div id="detail-product" className="d-flex">
          <div className="box-top twitter">
            <img
              id="img-detail"
              src={`https://ecommerce-rubicamp.s3.us-east-2.amazonaws.com/${localStorage.getItem(
                "image"
              )}`}
              alt="Photo"
            ></img>
          </div>
          <div id="detail-text" className="row">
            <div className="col-12">
              <h3 className="p-2">{detail.title}</h3>
            </div>
            <div id="brand" className="col-12">
              <p className="p-2">{detail.brand}(5000 vote)</p>
            </div>
            <div id="text-price" className="col-12">
              <p className="p-2">Price</p>
            </div>
            <div id="price-tag" className="col-12">
              <h4 className="p-2">
                Rp. {Intl.NumberFormat().format(detail.price)}
              </h4>
            </div>
            <div id="text-qty" className="col-12">
              <p className="p-2">Color</p>
            </div>
            <div className="row">
              <button
                onClick={addColorBlack}
                name="color"
                id="input-color"
                type="number"
                className={
                  detail.color === "Black"
                    ? "btn btn-primary disabled"
                    : "btn btn-primary"
                }
              >
                Black
              </button>
              <button
                onClick={addColorWhite}
                id="input-color"
                type="number"
                className={
                  detail.color === "White"
                    ? "btn btn-primary disabled"
                    : "btn btn-primary"
                }
              >
                White
              </button>
            </div>
            <div id="text-qty" className="col-12">
              <p className="p-2">Capacity</p>
            </div>
            <div className="row">
              <button
                onClick={addCapacity32}
                id="input-capacity"
                type="number"
                className={
                  detail.capacity === "32GB"
                    ? "btn btn-primary disabled"
                    : "btn btn-primary"
                }
                onChange={handleChange}
              >
                32GB
              </button>
              <button
                onClick={addCapacity64}
                id="input-capacity"
                type="number"
                className={
                  detail.capacity === "64GB"
                    ? "btn btn-primary disabled"
                    : "btn btn-primary"
                }
              >
                64GB
              </button>
            </div>
            <div id="text-qty" className="col-12">
              <p className="p-2">Quantity</p>
            </div>
            <div className="row">
              <div className="col-2">
                <button
                  onClick={minusQuantity}
                  className="btn btn-primary rounded-circle"
                >
                  <i className="fas fa-minus"></i>
                </button>
              </div>
              <div className="col-4">
                <input
                  disabled
                  readOnly
                  min="0"
                  name="quantity"
                  onClick={handleChange}
                  value={detail.quantity}
                  id="input-qty"
                  type="number"
                  className="p-2"
                />
              </div>
              <div className="col-4">
                <button
                  id="input-plus"
                  onClick={addQuantity}
                  className="btn btn-primary rounded-circle"
                >
                  <i className="fas fa-plus"></i>
                </button>
              </div>
            </div>
            <div>
              <button
                id="btn-buy"
                className="w-5 btn btn-lg btn-success"
                type="submit"
                value="save"
              >
                <i className="fas fa-shopping-cart"></i>
                Buy
              </button>
              <button
                onClick={cancelDetail}
                id="btn-cancelBuy"
                className="w-5 btn btn-lg btn-warning"
                type="button"
                value="save"
              >
                <Link id="text-btn" to="/">
                  Cancel
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div id="detail-desc" className="col">
          <p>Product Detail</p>
        </div>
        <div id="desc-detail" className="col">
          <div dangerouslySetInnerHTML={{ __html: detail.detail }}></div>
        </div>
      </form>
    </div>
  );
}
