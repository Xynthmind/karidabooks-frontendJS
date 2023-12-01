import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  //Modelo usuario
  const storedUser = localStorage.getItem('user');
  const [user, setUser] = useState(storedUser ? (JSON.parse(storedUser)) : (null));

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };
  //Modelo de carrito
  const [cart, setCart] = useState([]);

  const addCart = (product) => {
    const existingBook = cart.find((item) => item.id_book === product.id_book);

    if (!existingBook) {
        setCart([...cart, { ...product, amount: 1 }]);
        //console.log("Entré a uno nuevo");
    } else {
        const updatedCart = cart.map((item) =>
            item.id_book === existingBook.id_book
                ? { ...item, amount: item.amount + 1 }
                : item
        );
        setCart(updatedCart);
        //console.log("Agregué uno existente");
    }
};

  const removeCart = (productId) => {
    console.log(productId)
    const filteredBooks = cart.filter((product) => product.id_book !== productId);
    setCart(filteredBooks);
  };

  const emptyCart = () => {
    setCart([]);
  };


  return (
    <UserContext.Provider value={{ user, login, logout, cart, addCart, emptyCart, removeCart, setUser }}>
      {children}
    </UserContext.Provider>
  );
};