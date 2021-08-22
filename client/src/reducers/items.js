import {
    DRAW_LOAD_ITEM,
    DRAW_ADD_ITEM,
    FAILED_ADD_ITEM,
    // SUCCESS_RESEND_ITEM,
    FAILED_LOAD_ITEM,
    // FAILED_REMOVE_ITEM,
    // SUCCESS_REMOVE_ITEM,
    SUCCESS_ADD_ITEM
} from '../constants'

const items = (state = [], action) => {
    switch (action.type) {
        case DRAW_LOAD_ITEM:
            return action.items.map((item) => {
                return {
                    title: item.title,
                    rate: item.rate,
                    description: item.description,
                    price: item.price,
                    brand: item.brand,
                    detail: item.detail,
                    image: item.image,
                    sent: true
                }
            })

        case DRAW_ADD_ITEM:
            return [
                ...state,
                {
                    title: action.title,
                    rate: action.rate,
                    description: action.description,
                    price: action.price,
                    brand: action.brand,
                    detail: action.detail,
                    image: action.image,
                    sent: true
                }
            ]

        case FAILED_ADD_ITEM:
            return state.map((item) => {
                if (item.image === action.image) {
                    item.sent = false;
                }
                return item
            })

        //     case SUCCESS_REMOVE_ITEM:
        //         return state.filter(item => item.username !== action.username)

        // case SUCCESS_RESEND_ITEM:
        //     return state.map((item) => {
        //         if (item.username === action.username) {
        //             item.sent = true;
        //         }
        //         return item
        //     })

        case FAILED_LOAD_ITEM:
        case SUCCESS_ADD_ITEM:
        //     case FAILED_REMOVE_ITEM:
        default:
            return state
    }
}

export default items