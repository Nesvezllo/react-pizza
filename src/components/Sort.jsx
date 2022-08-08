import React from 'react';

const Sort = ({value, onClickSort}) => {

  const sort = [
    {name: "популярности (по убыванию)", sort: 'rating'},
    {name: "популярности (по возрастанию)", sort: '-rating'},
    {name: "цене (по убыванию)", sort: 'price'},
    {name: "цене (по возрастанию)", sort: '-price'}, 
    {name: "алфавиту", sort: 'title'},

  ]
  const [open, setOpen] = React.useState();

  return (
    <div class="sort">
    <div class="sort__label" onClick={() => setOpen(!open)}>
      <b>Сортировка по:</b>
      <span>{value.name}</span>
    </div>
      {open && 
            <div class="sort__popup">
            <ul>
              {sort.map((item, index) => (
                <li
                  key={index} 
                  className={value.sort === item.sort ? 'active': ''} 
                  onClick={() => onClickSort(item)}>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
      }
  </div>

  )
}

export default Sort;