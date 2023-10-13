import React, { useState, useEffect } from "react";
import productosData from "../../media/productos.json";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Dogs");

  useEffect(() => {
    setProductos(productosData);
  }, []);

  
  const productosFiltrados = productos.find(
    (category) => category.category === categoriaSeleccionada
  );

  return (
    <div className="productos">
      <h2>Productos</h2>
      {}
      <select
        value={categoriaSeleccionada}
        onChange={(e) => setCategoriaSeleccionada(e.target.value)}
      >
        {productos.map((category) => (
          <option key={category.category} value={category.category}>
            {category.category}
          </option>
        ))}
      </select>

      
      {productosFiltrados && (
        <div>
          <h3>{productosFiltrados.category}</h3>
          <ul>
            {productosFiltrados.items.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} />
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Productos;