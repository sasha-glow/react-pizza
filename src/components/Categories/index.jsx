import { useState } from 'react';


function Categories() {
  const [activeIndex, setActiveIndex] = useState(2);

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианские',
    'Гриль',
    'Острые',
    'Закрытые',
  ];

  return (
    <div className="categories">
      <ul>
        {
          categories.map((category, index) => {
            return (
              <li
                onClick={() => setActiveIndex(index)}
                className={activeIndex === index ? 'active' : ''}
              >
                {category}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}


export default Categories;