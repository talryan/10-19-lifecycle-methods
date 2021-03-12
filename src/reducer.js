
const reducer = (state ={items: [], cart: [],}, action) => {

    switch(action.type) {
        case "GOT_ITEMS":
        return {...state, items: action.payload}

        case "ADD_ITEM":
            return {
                ...state, cart: [...state.cart, action.payload]
            }

        default: 
        return state;

    }
}


export default reducer; 