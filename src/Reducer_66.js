const Reducer_66 = (state, action) => {
 if(action.type === 'CLEAR_CART'){
    return { ...state, cart: [], amount: 0, total: 0 }
 }
 if (action.type === 'INCREASE') {
    let tempCart = state.cart.map((cartItem) => {
        if(cartItem.id === action.payload) {
            return { ...cartItem, amount: cartItem.amount  }
        }
        return cartItem;
    });
    return {...state, cart: tempCart}
 }
}

export default Reducer_66;
