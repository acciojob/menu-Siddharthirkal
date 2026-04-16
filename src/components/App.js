import React, { useState } from "react";
import Menu from "./Menu";
import "./../styles/App.css";

function App() {
  const menuData = [
    {
      id: 1,
      title: "Buttermilk Pancakes",
      category: "breakfast",
      price: "$15.99",
      image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
      desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"
    },
    {
      id: 2,
      title: "Diner Double",
      category: "lunch",
      price: "$13.99",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      desc: "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing."
    },
    {
      id: 3,
      title: "Godzilla Milkshake",
      category: "shakes",
      price: "$6.99",
      image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699",
      desc: "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
    },
    {
      id: 4,
      title: "Country Delight",
      category: "breakfast",
      price: "$20.99",
      image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
      desc: "Shabby chic keffiyeh neutra snackwave pork belly shoreditch."
    },
    {
      id: 5,
      title: "Egg Attack",
      category: "lunch",
      price: "$22.99",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
      desc: "franzen vegan pabst bicycle rights kickstarter."
    },
    {
      id: 6,
      title: "Oreo Dream",
      category: "shakes",
      price: "$18.99",
      image: "https://images.unsplash.com/photo-1577805947697-89e18249d767",
      desc: "Portland chicharrones ethical edison bulb."
    }
  ];

  const [items, setItems] = useState(menuData);

  const filterItems = (category) => {
    if (category === "all") {
      setItems(menuData);
      return;
    }

    const filteredItems = menuData.filter(
      (item) => item.category === category
    );
    setItems(filteredItems);
  };

  return (
    <div id="main">
      <h1>Our Menu</h1>

      <div className="btn-container">
        <button onClick={() => filterItems("all")}>All</button>
        <button
          id="filter-btn-1"
          onClick={() => filterItems("breakfast")}
        >
          Breakfast
        </button>
        <button
          id="filter-btn-2"
          onClick={() => filterItems("lunch")}
        >
          Lunch
        </button>
        <button
          id="filter-btn-3"
          onClick={() => filterItems("shakes")}
        >
          Shakes
        </button>
      </div>

      <Menu items={items} />
    </div>
  );
}

export default App;