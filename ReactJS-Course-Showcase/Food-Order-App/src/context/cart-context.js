import React from 'react';

const cartContext = React.createContext({
  item: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default cartContext;
