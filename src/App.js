// Styles
import "./scss/app.scss"

// Components
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

// Mocks
import pizzaItems from './assets/pizzas.json'

console.log(pizzaItems)

function App() {
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories/>
            <Sort/>
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              pizzaItems.map(obj => (
                <PizzaBlock 
                  {...obj}
                  // key={obj.id}
                  // imageUrl={obj.imageUrl}
                  // title={obj.title}
                  // types={obj.types}
                  // sizes={obj.sizes}
                  // price={obj.price}
                  // category={obj.category}
                  // rating={obj.rating}
                />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
