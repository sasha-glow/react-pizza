import { useState } from 'react'
import clsx from 'clsx'
import styles from './styles.module.scss'

function Categories() {
  const [activeIndex, setActiveIndex] = useState(0)

  const categories = [
    'Все',
    'Мясные',
    'Вегетарианские',
    'Гриль',
    'Острые',
    'Закрытые',
  ]

  return (
    <div className={styles.categories}>
      <ul>
        {categories.map((category, index) => (
          <li
            key={category}
            onClick={() => setActiveIndex(index)}
            className={clsx(styles.item, {
              [styles.activeCategory]: activeIndex === index,
            })}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
