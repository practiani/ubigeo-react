import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
	ubigeos: [],
	cart: []
};

const reducer = (state = initialState, action) => {
	if (action.type === "REPLACE_UBIGEOS") {
		return {
			...state,
			ubigeos: action.ubigeos
		};
	} else if (action.type === "ADD_TO_CART") {
		return {
			...state,
			cart: state.cart.concat(action.product)
		}
	} else if (action.type === "REMOVE_FROM_CART") {
		return {
			...state,
			cart: state.cart.filter(product => product.id !== action.product.id)
		}
	}
	return state;
}

export default createStore(reducer, applyMiddleware(thunk));
