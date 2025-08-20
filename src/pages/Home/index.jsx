// Styles
import styles from './styles.module.scss'

// Components
import Categories from "../../components/Categories";
import PizzaBlock from "../../components/PizzaBlock";
import Skeleton from "../../components/PizzaBlock/Skeleton";
import Sort from "../../components/Sort";

// Hooks
import { useEffect, useState } from "react";


function Home() {
  const [pizzas, setPizzas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.mockfly.dev/mocks/3671a684-7221-435a-bec8-c83e01fe27d2/pizzas')
      .then(response => {
        return response.json();
      })
      .then(json => {
        setPizzas(json);
        setIsLoading(false);
      });
      window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={styles.top}>
        <Categories />
        <Sort />
      </div>
      <h2 className={styles.title}>Все пиццы</h2>
      <div className={styles.items}>
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