import React from "react";

const Categories = () => {

  const categories = ["Все" , "Мясные" , "Вегетарианская", "Гриль", "Острые", "Закрытые"]
  const [active, setActive] = React.useState(0)


  return (
    <div class="categories">
    <ul>
      {categories.map((category, index) => (
        <li className={active == index && "active"} onClick={() => setActive(index)}>{category}</li>
      ))}
    </ul>
  </div>
  )
}

export default Categories;