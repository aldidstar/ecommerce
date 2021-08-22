import {
    DRAW_LOAD_TRANSACTION,
    FAILED_LOAD_TRANSACTION,
    // DRAW_ADD_TRANSACTION,
    SUCCESS_ADD_TRANSACTION,
    FAILED_ADD_TRANSACTION,
    LOAD_TRANSACTION,
    ADD_TRANSACTION,
} from '../constants'


export const drawLoadTransaction = (transactions) => ({
    type: DRAW_LOAD_TRANSACTION,
    transactions
})

export const failedLoadTransaction = () => ({
    type: FAILED_LOAD_TRANSACTION
})

export const loadTransaction = () => ({
    type: LOAD_TRANSACTION
})

// export const drawAddTransaction = (title, brand, detail, price, quantity, color, capacity) => ({
//     type: DRAW_ADD_TRANSACTION,
//     title, brand, detail, price, quantity, color, capacity
// })

export const successAddTransaction = () => ({
    type: SUCCESS_ADD_TRANSACTION
})

export const failedAddTransaction = (title) => ({
    type: FAILED_ADD_TRANSACTION,
    title
})

export const addTransaction = (title, brand, detail, price, quantity, color, capacity) => (
    console.log(title),{
    type: ADD_TRANSACTION,
    title, brand, detail, price, quantity, color, capacity
})

