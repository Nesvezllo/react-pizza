import s from './search.module.scss';

import {ReactComponent as Icon} from '../assets/search-svgrepo-com (1).svg'

const Search = ({searchValue,setSearchValue}) => {
  const handleChange = (e) => {
    setSearchValue(e.currentTarget.value);
  }
  console.log(searchValue)
  return (
    <div className={s.wrapper}>
      <Icon className={s.svg} />
      <input type="text" placeholder="Поиск..." onChange={(e) => handleChange(e)} value={searchValue}/>
    </div>
  )
}

export default Search;