import s from './pagination.module.scss';

import React from 'react';

import ReactPaginate from 'react-paginate';

const Pagination = () => {
  const [active, setActive] = React.useState(false)
  return (
    <ReactPaginate
      className={active ? `${s.pagination} ${s.active}` : s.pagination}
      onClick={() => setActive(true)}
      breakLabel="..."
      nextLabel="next >"
      onPageChange={(e) => console.log(e)}
      pageRangeDisplayed={5}
      pageCount={3}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
    />
  )
}

export default Pagination;