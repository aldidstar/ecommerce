// import { all, takeEvery, put, call } from 'redux-saga/effects';
// import * as actions from '../actions/transaction';
// import axios from 'axios'
// // import history from '../history'

// import { LOAD_TRANSACTION, ADD_TRANSACTION/*, REMOVE_ITEM, RESEND_ITEM*/ } from '../constants'

// const API_URL = 'http://localhost:3000/'

// const request = axios.create({
//     baseURL: API_URL,
//     timeout: 10000
// });

// const readTransaction = async (path) =>
//     await request.get(path)
//         .then(response => response.data)
//         .catch(err => {
//             throw err
//         });


// const addtransaction = async (path, params) =>
//     await request.post(path, params)
//         .then(response => response.data)
//         .catch(err => {
//             throw err
//         });



// const PATH = 'api/transaction';

// // load
// function* loadTransaction() {
//     try {
//         const data = yield call(readTransaction, PATH);
//         yield put(actions.drawLoadTransaction(data));

//     } catch (error) {
//         console.log(error);
//         yield put(actions.failedLoadTransaction());
//     }
// }

// function* addTransaction(payload) {
//     console.log("tes", payload)
//     const { title, brand, detail, price, quantity, color, capacity } = payload;
//     console.log(price)
   
//     try {
//         const data = yield call(addtransaction, PATH, { title, brand, detail, price, quantity, color, capacity });
//         yield put(actions.successAddTransaction(data));
//         console.log(data)
//         // history.push('/')
//     } catch (error) {
//         console.log(error);
//         yield put(actions.failedAddTransaction(image));
//     }
// }


// export default function* rootSaga() {
//     yield all([
//         takeEvery(LOAD_TRANSACTION, loadTransaction),
//         takeEvery(ADD_TRANSACTION, addTransaction),
   
//     ]);
// }