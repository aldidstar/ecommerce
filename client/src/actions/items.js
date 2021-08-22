import {
    DRAW_LOAD_ITEM,
    FAILED_LOAD_ITEM,
    DRAW_ADD_ITEM,
    SUCCESS_ADD_ITEM,
    FAILED_ADD_ITEM,
    // SUCCESS_RESEND_ITEM,
    // FAILED_RESEND_ITEM,
    LOAD_ITEM,
    ADD_ITEM,
    // REMOVE_ITEM,
    // FAILED_REMOVE_ITEM,
    // SUCCESS_REMOVE_ITEM,
    // RESEND_ITEM
} from '../constants'


export const drawLoadItem = (items) => ({
    type: DRAW_LOAD_ITEM,
    items
})

export const failedLoadItem = () => ({
    type: FAILED_LOAD_ITEM
})

export const loadItem = () => ({
    type: LOAD_ITEM
})

export const drawAddItem = (title, rate, description, price, brand, detail, image) => ({
    type: DRAW_ADD_ITEM,
    title, rate, description, price, brand, detail, image
})

export const successAddItem = () => ({
    type: SUCCESS_ADD_ITEM
})

export const failedAddItem = (image) => ({
    type: FAILED_ADD_ITEM,
    image
})

export const addItem = (title, rate, description, price, brand, detail, image) => ({
    type: ADD_ITEM,
    title, rate, description, price, brand, detail, image
})

// export const successRemoveItem = (username) => ({
//     type: SUCCESS_REMOVE_ITEM,
//     username
// })

// export const failedRemoveItem = () => ({
//     type: FAILED_REMOVE_ITEM
// })

// export const removeItem = (username) => ({
//     type: REMOVE_ITEM,
//     username
// })

// export const successResendItem = (username) => ({
//     type: SUCCESS_RESEND_ITEM,
//     username
// })

// export const failedResendItem = () => ({
//     type: FAILED_RESEND_ITEM
// })

// export const resendItem = (username, name, age) => ({
//     type: RESEND_ITEM,
//     username,
//     name,
//     age
// })