import s from './pagination.module.scss';

import React from 'react';

import ReactPaginate from 'react-paginate';

const Pagination = ({onChangePage}) => {
  const [active, setActive] = React.useState(false)
  return (
    <ReactPaginate
      className={s.pagination}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => onChangePage(e.selected + 1)}
      pageRangeDisplayed={5}
      pageCount={2}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  )
}

export default Pagination;