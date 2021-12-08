import React, { useReducer, createContext, useContext } from 'react';

const initialProducts = {
  inputs: {
    title: '',
    photoURL: '',
    brand: '',
    origin: '',
    description: '',
    category: '',
    showroomNumber: '',
  },
  products: [],
  //   products: [
  //     {
  //       id: 'product1',
  //       title: '',
  //       photoURL: '',
  //       brand: '',
  //       origin: '',
  //       description: '',
  //       category: '',
  //       showroomNumber: '',
  //     },
  //     {
  //       id: 'product2',
  //       title: '',
  //       photoURL: '',
  //       brand: '',
  //       origin: '',
  //       description: '',
  //       category: '',
  //       showroomNumber: '',
  //     },
  //   ],
};

function productsReducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value,
        },
      };
    case 'ADD_PRODUCT':
      return {
        inputs: initialProducts.inputs,
        products: state.products.concat(action.product),
      };
    case 'REMOVE_PRODUCT':
      return {
        ...state,
        products: state.products.filter((product) => product.id !== action.id),
      };
    case 'EDIT_PRODUCT':
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id !== action.id) {
            return product;
          }
          return action.product;
        }),
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const ProductStateContext = createContext();
const ProductDispatchContext = createContext();

export function ProductProvider({ children }) {
  const [state, dispatch] = useReducer(productsReducer, initialProducts);

  return (
    <ProductStateContext.Provider value={state}>
      <ProductDispatchContext.Provider value={dispatch}>{children}</ProductDispatchContext.Provider>
    </ProductStateContext.Provider>
  );
}

export function useProductState() {
  const context = useContext(ProductStateContext);
  if (!context) {
    throw new Error('Cannot find Provider');
  }
  return context;
}

export function useProductDispatch() {
  const context = useContext(ProductDispatchContext);
  if (!context) {
    throw new Error('Cannot find Provider');
  }
  return context;
}
