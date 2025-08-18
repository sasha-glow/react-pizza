// Components
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

// Hooks
import { useState } from "react";
import { useEffect } from "react";


function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://react-pizza.free.beeceptor.com/pizzas')
      .then(response => {
        return response.json();
      })
      .then(json => {
        setPizzas(json);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          // TODO: fix problem with Array(12)
          ? [...new Array(12)].map((_, index) => (
            <Skeleton key={index} />))
          : pizzas.map(obj => (
            <PizzaBlock
              key={obj.id}
              {...obj}
            />
          ))}
      </div>
    </>
  )
}


export default Home;