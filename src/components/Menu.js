import React from "react";

function Menu({ items }) {
  return (
    <div className="menu-container">
      {items.map((item) => (
        <div
          key={item.id}
          className="menu-item"
          data-test-id={`menu-item-${item.category}`}
        >
          <img src={item.image} alt={item.title} />
          <div>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <p>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;