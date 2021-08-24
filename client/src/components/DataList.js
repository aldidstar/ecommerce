import React, { useState, useEffect, Suspense } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import InfiniteScroll from "react-infinite-scroll-component";

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

  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch()

  useEffect(() => {
		dispatch(loadItem(page));
		window.addEventListener('scroll', handleScroll);
    setIsFetching(true);
	}, [dispatch]);

  const handleScroll = () => {
    console.log(window.innerHeight + document.documentElement.scrollTop)
    if (
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) ===
        document.documentElement.offsetHeight ||
      isFetching
    ) {
      setIsFetching(true);
    }
  };


  const addData = (event) => { 
    event.preventDefault();
    window.location = "/DataAdd";
  };

  useEffect(() => {
		if (!isFetching) return;
		fetchMoreListItems();
	}, [isFetching]);

	const fetchMoreListItems = () => {
    setPage(page + 1)
		dispatch(loadItem(page));
		setIsFetching(false);
	};


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
        <div className="row">{nodeList}</div>
        
      </div>
    </div>
  );
}
