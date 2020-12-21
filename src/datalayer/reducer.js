export const initialState = {
    basket: [],
    // user: null,
};

// Selector to calculate the Basket's total amount
export const getBasketTotal = (basket) => 
    //reduce function iterates through the basket to take out the total
    basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state, 
                basket: [...state.basket, action.item],
            };
            default: return state;
        case 'REMOVE_FROM_BASKET':
            //findIndex() returns the index of the first element in the array
            //that satisfies the provided testing function.
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if(index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product (id: ${action.id}) as it's not in the basket!`
                )
            }
            return {
                ...state,
                basket: newBasket
            }
    }
}

export default reducer;