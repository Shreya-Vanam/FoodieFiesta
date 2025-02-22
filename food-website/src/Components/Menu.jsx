import { useState } from "react";

const menuItems = [
  { id: 1, name: "Dosa", price: "79/-", image:"/Dosa.jpg" },
  { id: 2, name: "Idli", price: "59/-", image:"/Idli.jpg" },
  { id: 3, name: "Pancake", price: "119/-", image:"/Pancake.jpg" },
  { id: 4, name: "Paratha", price: "89/-", image:"/Paratha.jpg" },
  { id: 5, name: "Poha", price: "39/-", image:"/Poha.jpg" },
  { id: 6, name: "Vada", price: "49/-", image:"/Vada.jpg" },
];

function Menu() {
  const [search, setSearch] = useState("");

  return (
    <div className="menu">
        <div className="menu-container">
      <h2>Our Menu</h2>
      <div className="menu-grid">
      {menuItems.map((item) => (
          <div key={item.id} className="menu-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Menu;