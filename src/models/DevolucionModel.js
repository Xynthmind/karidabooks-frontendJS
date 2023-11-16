import { useState } from "react";

function Devoluciones() {
  const [devoluciones, setDevoluciones] = useState([]);

  const addDevoluciones = (product) => {
    setDevoluciones([...devoluciones, product]);
  };

  const removeDevoluciones = (productId) => {
    const filteredProducts = devoluciones.filter((product) => product.id !== productId);
    setDevoluciones(filteredUsers);
  };

  return {
    devoluciones,
    addDevoluciones,
    removeDevoluciones,
  };
}

export default Devoluciones;