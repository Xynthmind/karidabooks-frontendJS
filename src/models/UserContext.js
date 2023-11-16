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
    setCart([...cart, product]);
  };

  const removeCart = (productId) => {
    const filteredUsers = cart.filter((product) => product.id !== productId);
    setCart(filteredUsers);
  };


  return (
    <UserContext.Provider value={{ user, login, logout, cart, addCart, removeCart, setUser }}>
      {children}
    </UserContext.Provider>
  );
};