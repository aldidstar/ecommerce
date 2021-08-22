import React, { useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";


import DataItem from "./DataItem";
import { loadItem } from "../actions/items";
import Navbar from "./Navbar";

export default function UserList(props) {
  const { items } = useSelector(
    (state) => ({
      items: state.items,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  const addData = (event) => {
    event.preventDefault();
  window.location = "/DataAdd"
  };

  useEffect(() => {
    dispatch(loadItem());
  }, [dispatch]);

  let nodeList = items.map((item, index) => <DataItem {...item} key={index} />);

  return (
    <div className="box">
      <Navbar />
      <button onClick={addData} id="btn-add" className="btn btn-primary">
        <Link id="text-btn" to="/DataAdd">
          Add Ads
        </Link>
      </button>
      <div className="container">
        <div className="row">
         {nodeList}
        </div>
      </div>
    </div>
  );
}
