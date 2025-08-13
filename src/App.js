// Styles
import "./scss/app.scss"

// Components
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

// Hooks
import { useState } from "react";
import { useEffect } from "react";

// Mocks
import pizzaItems from './assets/pizzas.json'


function App() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch('https://api.mockfly.dev/mocks/3671a684-7221-435a-bec8-c83e01fe27d2/pizzas')
      .then(response => {
        return response.json()
      })
      .then(json => {
        setPizzas(json)
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzas.map(obj => (
              <PizzaBlock
                key={obj.id}
                {...obj}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
