import React, { useState, useEffect } from 'react';

import ShopContext from './shop-context';

const GlobalState = (props) => {
  const [cart, updateCart] = useState([])
  const [products, setProducts] = useState([])

  useEffect(() => {
    setProducts([
      { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
      { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
      { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
      { id: 'p4', title: 'Half-dried plant', price: 2.99 }
    ])
  }, [products])


  const addProductToCart = (product) => {
    console.log('Adding product', product);
    const updatedCart = [...cart];
    const updatedItemIndex = updatedCart.findIndex(
      item => item.id === product.id
    );

    if (updatedItemIndex < 0) {
      updatedCart.push({ ...product, quantity: 1 });
    } else {
      const updatedItem = {
        ...updatedCart[updatedItemIndex]
      };
      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
    }

    updateCart(updatedCart);
  }

  const removeProductFromCart = productId => {
    console.log('Removing product with id: ' + productId);
    const updatedCart = [...cart];
    const updatedItemIndex = updatedCart.findIndex(
      item => item.id === productId
    );

    const updatedItem = {
      ...updatedCart[updatedItemIndex]
    };
    updatedItem.quantity--;
    if (updatedItem.quantity <= 0) {
      updatedCart.splice(updatedItemIndex, 1);
    } else {
      updatedCart[updatedItemIndex] = updatedItem;

      updateCart(updatedCart);
    };

    return (
      <ShopContext.Provider
        value={{
          products,
          cart,
          addProductToCart,
          removeProductFromCart
        }}
      >
        {props.children}
      </ShopContext.Provider>
    )
  }
}

export default GlobalState;