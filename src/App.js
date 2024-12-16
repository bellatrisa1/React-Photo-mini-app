import React, { useState, useEffect } from "react";
import { Collection } from "./Collection";
import "./index.scss";
import data from "./data.json";

const cats = [
  { name: "Все" },
  { name: "Эдинбург" },
  { name: "Нью-Йорк" },
  { name: "Лондон" },
  { name: "Санкт-Петербург" },
  { name: "Сеул" },
  { name: "Милан" },
  { name: "Токио" },
  { name: "Прага" },
  { name: "Париж" },
];

function App() {
  const [categoryId, setCategoryId] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [collections, setCollections] = useState([]);


  useEffect(() => {
    if (data && Array.isArray(data.collections)) {
      setCollections(data.collections);
    } else {
      console.error("Ошибка: data.collections не является массивом");
    }
  }, []);

  const filteredCollections = collections.filter((collection) => {
    const categoryName = cats[categoryId]?.name;

    if (categoryId === 0 || collection.name === categoryName) {
      return collection.name.toLowerCase().includes(searchValue.toLowerCase());
    }
    return false;
  });

  return (
    <div className="App">
      <h1>Моя коллекция путешествий</h1>
      <div className="top">
        <ul className="tags">
          {cats.map((obj, i) => (
            <li
              onClick={() => setCategoryId(i)}
              className={categoryId === i ? "active" : ""}
              key={obj.name}
            >
              {obj.name}
            </li>
          ))}
        </ul>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="search-input"
          placeholder="Поиск по названию"
        />
      </div>
      <div className="content">
        {filteredCollections.length > 0 ? (
          filteredCollections.map((obj, index) => (
            <Collection key={index} name={obj.name} images={obj.photos} />
          ))
        ) : (
          <h3>Ничего не найдено</h3>
        )}
      </div>
      <ul className="pagination">
        <li>1</li>
        <li className="active">2</li>
        <li>3</li>
      </ul>
    </div>
  );
}

export default App;
