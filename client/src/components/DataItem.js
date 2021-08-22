import React from "react";
// import Photo from "../images/iphone.jpeg";
import { Link } from "react-router-dom";
// import { useDispatch } from 'react-redux'

// import { addTransaction } from "../actions/transaction";



export default function DataItem(props) {
  

  // const dispatch = useDispatch();

  


  const detailItem = (event) => {
    event.preventDefault();
 
    
    // window.location = "/DetailProduct"
 
    localStorage.setItem("title", props.title);
    localStorage.setItem("price", props.price);
    localStorage.setItem("detail", props.detail);
    localStorage.setItem("brand", props.brand);
    localStorage.setItem("image", props.image);
    console.log(props.image)
  };

  const rate = [];
  

  for (let i = 0; i < props.rate; i++) {
    rate.push(i);
  }

  const renderRate = rate.map((index) => {
    return (
      <i key={index} id="plus" className="fas fa-star"></i>
    );
  });



 
  return (
  
        <div className="col">
          <div id="row" className="col-lg-4 col-12 text-center">
            <div className="box-column">
              <div className="box-top twitter">
                <img src={`https://ecommerce-rubicamp.s3.us-east-2.amazonaws.com/${props.image}`} alt="Photo" id="photo"></img>
              </div>
              <div className="box-bottom">
                <h4 className="box-title twitter-title">{props.title}</h4>
               {renderRate}
                <div id="text-detail" className="box-text">
                {props.description}
                </div>
                <div id="text-detail" className="box-text">
                Rp. {Intl.NumberFormat().format(props.price)}
                </div>
                <button type="submit" onClick={detailItem} id="btn-detail" className="btn btn-success">
                <Link id="text-btn" to="/DetailProduct">Detail Item</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
       
  );
}
