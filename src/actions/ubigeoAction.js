import axios from 'axios';

const loadUbigeos = () => {
  return dispatch => {
    console.log("loadUbigeos");
    return axios.get("http://localhost:8004/api/ubigeo/ubigeos")
      .then(response => {
        console.log(response.data);
        dispatch({ type: "REPLACE_UBIGEOS", ubigeos: response.data.results });
      });
  };
};

const addToCart = (product) => {
  return {
    type: "ADD_TO_CART", 
    product
  };
};

const removeFromCart = (product) => {
  return {
    type: "REMOVE_FROM_CART", 
    product
  };
};

export { loadUbigeos, addToCart, removeFromCart };

