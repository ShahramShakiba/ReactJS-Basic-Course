import { createContext, useReducer } from 'react';
import { DUMMY_PRODUCTS } from '../dummy-products';

/***** Create a Context to pass data through the component tree *****/
export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

/***** Outsourcing Context & State Into a Separate Provider Component *****/
function shoppingCartReducer(state, action) {
  /*_____ Add Item to the Cart _____*/
  if (action.type === 'ADD_ITEM') {
    const updatedItems = [...state.items];
    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = DUMMY_PRODUCTS.find(
        (product) => product.id === action.payload
      );
      updatedItems.push({
        id: action.payload,
        name: product.title,
        price: product.price,
        quantity: 1,
      });
    }

    return {
      ...state, // not needed here because we have only one value
      items: updatedItems,
    };
  }

  /*_____ Update Cart Item _____*/
  if (action.type === 'UPDATE-ITEM') {
    const updatedItems = [...state.items];

    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.productId
    );
    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  }

  return state;
}

export default function CartContextProvider({ children }) {
  const [ShoppingCartState, ShoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    {
      items: [],
    }
  );

  const handleAddItemToCart = (id) => {
    ShoppingCartDispatch({
      type: 'ADD_ITEM',
      payload: id,
    });
  };

  const handleUpdateCartItemQuantity = (productId, amount) => {
    ShoppingCartDispatch({
      type: 'UPDATE_ITEM',
      payload: { productId, amount },
    });
  };

  const ctxValue = {
    items: ShoppingCartState.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}

/* Context :
Context provides a way to pass data through the component tree without having to pass props down manually at every level.
*/

/* CartContext :
This will be an object that contains a React-Component which will need later

* items: [] 
That will be later store the shopping cart items
*/

/* What's a "Reducer" 
A function that reduce one or more complex values to a simpler one

 const [state, dispatch] = useReducer();

______________________________________________________________
it must be defined from outside of Component function because this function
should not be re-executed whenever the component fun executes because it won't
need direct access to any value defined or updated in the component function
* function shoppingCartReducer(state, action) {}

 ? state :
  will be the guaranteed "latest state snapshot"

 ? action :
  an action to dispatch
 for example ->  ShoppingCartDispatch({
                   identifier: '',
                   payload: '',
                 });

_______________________________________________________________
  const [ShoppingCartState, ShoppingCartDispatch] = useReducer(
    shoppingCartReducer,  // pass a pointer to connect useReducer with 
    {                        reducer-function 
      items: [],  // "initial state" for reducer-function
    }
  );
*/
