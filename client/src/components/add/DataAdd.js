import React, { useState } from "react";
import { useDispatch } from 'react-redux';
// import Photo from "../../images/iphone.jpeg";
import { Link } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { addItem } from '../../actions/items'


export default function DataAdd() {
  const initialItemState = {
    title: "",
    rate: 1,
    description: "",
    price: 0,
    brand: "",
    detail: "",
    image: "",
  };

  const [item, setItem] = useState(initialItemState);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setItem({ ...item, [name]: value });
  };

  const handleFileChange = (event) => {
    event.preventDefault();
    setItem({
      title: item.title,
      rate: item.rate,
      description: item.description,
      price: item.price,
      brand: item.brand,
      detail: item.detail,
      image: event.target.files[0]

    });
  };

  const handleSubmit = (event) => {
    const formData = new FormData();
    formData.append('image',item.image)
    formData.append('title',item.title)
    formData.append('rate',item.rate)
    formData.append('description',item.description)
    formData.append('price',item.price)
    formData.append('brand',item.brand)
    formData.append('detail',item.detail)
    event.preventDefault();
    dispatch(addItem(item.title,item.rate, item.description, item.price, item.brand, item.detail, formData));
    console.log({ ...item });
    window.location = "/";
  };

  // const fileUpload = (file) => {
  //   const formData = new FormData();
  //   formData.append('image',image)
  // }

  const cancelAdd = (event) => {
    event.preventDefault();
    window.location = "/";
  };
  return (
    <div>
      <div id="container-add" className="container-add">
        <div className="text-add"></div>
        <form onSubmit={handleSubmit}>
          <div id="form-add">
            <div id="text-add">
              <h5>Add Ads</h5>
            </div>
            <div id="input-add">
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Title</label>
                <div className="col-sm-10">
                  <input
                    required
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="Title"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Rate</label>
                <div className="col-sm-10">
                  <input
                    required
                    type="number"
                    className="form-control"
                    name="rate"
                    value={item.rate}
                    min="1"
                    max="5"
                    placeholder="rate"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Description</label>
                <div className="col-sm-10">
                  <textarea
                    required
                    type="text"
                    className="form-control"
                    name="description"
                    placeholder="description"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Price</label>
                <div className="col-sm-10">
                  <input
                    required
                    value={item.price}
                    type="number"
                    className="form-control"
                    name="price"
                    placeholder="price"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Brand</label>
                <div className="col-sm-10">
                  <input
                    required
                    type="text"
                    className="form-control"
                    name="brand"
                    placeholder="brand"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">
                  Detail Product
                </label>
                <CKEditor 
                  editor={ClassicEditor}
                  data="<p></p>"
                  onReady={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    console.log("Editor is ready to use!", editor);
                  }}
                  name="detail"
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setItem({detail: data, title: item.title, rate: item.rate, description: item.description, price: item.price, brand: item.brand });
                  }}
                />
              </div>
              <div className="mb-3 row">
                <label className="col-sm-2 col-form-label">Image</label>
                <div className="col-sm-10">
                  <input
                    required
                    type="file"
                    className="form-control"
                    name="image"
                    placeholder="image"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </div>
            <div id="btn">
              <button
                id="btn-post"
                className="w-5 btn btn-lg btn-success"
                type="submit"
                value="save"
              >
                Add
              </button>

              <button
                onClick={cancelAdd}
                id="btn-cancel"
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
        </form>
      </div>
    </div>
  );
}
