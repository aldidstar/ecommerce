import { all, takeEvery, put, call } from "redux-saga/effects";
import * as actions from "../actions/items";
import * as actionsTransaction from "../actions/transaction";

import axios from "axios";
import history from "../history";

import {
  LOAD_ITEM,
  ADD_ITEM,
  LOAD_TRANSACTION,
  ADD_TRANSACTION,
} from "../constants";

const API_URL = "http://localhost:3000/";

const request = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

const read = async (path) =>
  await request
    .get(path)
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });


const upload = async (path, formData) => {
  await request
    .post(path, formData, {headers: {
        'content-type': 'multipart/form-data'
    }})
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });
};



const readTransaction = async (path) =>
  await request
    .get(path)
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });

const addtransaction = async (path, params) =>
  await request
    .post(path, params)
    .then((response) => response.data)
    .catch((err) => {
      throw err;
    });

const PATHITEM = "api/item";
const PATH = "api/transaction";

// load
function* loadItem() {
  try {
    const data = yield call(read, PATHITEM);
    yield put(actions.drawLoadItem(data));
  } catch (error) {
    console.log(error);
    yield put(actions.failedLoadItem());
  }
}

function* addItem(payload) {
  const { title, rate, description, price, brand, detail, image } = payload;
  yield put(
    actions.drawAddItem(title, rate, description, price, brand, detail, image)
  );
  try {
    const data = yield call(upload, PATHITEM, image);
    yield put(actions.successAddItem(data));
    history.push("/");
  } catch (error) {
    console.log(error);
    yield put(actions.failedAddItem(image));
  }
}

function* loadTransaction() {
  try {
    const data = yield call(readTransaction, PATH);
    yield put(actionsTransaction.drawLoadTransaction(data));
  } catch (error) {
    console.log(error);
    yield put(actionsTransaction.failedLoadTransaction());
  }
}

function* addTransaction(payload) {
  console.log("tes", payload);
  const { title, brand, detail, price, quantity, color, capacity } = payload;
  console.log(price);

  try {
    const data = yield call(addtransaction, PATH, {
      title,
      brand,
      detail,
      price,
      quantity,
      color,
      capacity,
    });
    yield put(actionsTransaction.successAddTransaction(data));
    console.log(data);
    history.push("/");
  } catch (error) {
    console.log(error);
    yield put(actionsTransaction.failedAddTransaction(title));
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(LOAD_ITEM, loadItem),
    takeEvery(ADD_ITEM, addItem),
    takeEvery(LOAD_TRANSACTION, loadTransaction),
    takeEvery(ADD_TRANSACTION, addTransaction),
  ]);
}
