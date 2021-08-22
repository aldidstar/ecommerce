import {  DRAW_LOAD_TRANSACTION,
    // DRAW_ADD_TRANSACTION,
    FAILED_ADD_TRANSACTION,
    FAILED_LOAD_TRANSACTION,
    SUCCESS_ADD_TRANSACTION


} from "../constants";
  
  

  const transaction = (state = [], action) => {
    switch (action.type) {
        case DRAW_LOAD_TRANSACTION:
            return action.transactions.map((item) => {
                return {
                    title: item.title,
                    brand: item.brand,
                    detail: item.detail,
                    price: item.price,
                    quantity: item.quantity,
                    color: item.color,
                    capacity: item.capacity,
                    sent: true
                }
            })

        // case DRAW_ADD_TRANSACTION:
        //     return [
        //         ...state,
        //         {
        //             title: action.title,
        //             brand: action.brand,
        //             detail: action.detail,
        //             price: action.price,
        //             quantity: action.quantity,
        //             color: action.color,
        //             capacity: action.capacity,
        //             sent: true
        //         }
        //     ]

        case FAILED_ADD_TRANSACTION:
            return state.map((item) => {
                if (item.title === action.title) {
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

        case FAILED_LOAD_TRANSACTION:
        case SUCCESS_ADD_TRANSACTION:
        //     case FAILED_REMOVE_ITEM:
        default:
            return state
    }
  };
  
  export default transaction;