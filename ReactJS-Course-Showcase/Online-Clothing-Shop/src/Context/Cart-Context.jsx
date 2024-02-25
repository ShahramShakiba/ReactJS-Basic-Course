import { createContext } from 'react';

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
});

/* Context :
Context provides a way to pass data through the component tree without having to pass props down manually at every level.
*/

/* CartContext :
This will be an object that contains a React-Component which will need later

* items: [] 
That will be later store the shopping cart items
*/
