import { memo } from "react";
import "./Pagination.css";
import ReactPaginate from 'react-paginate';

function Pagination({ pageCount, changePageHandler }) {
  return (
    <>
      <ReactPaginate
        previousLabel="< previous"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={(event) => {changePageHandler(event)}}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        renderOnZeroPageCount={null}

        containerClassName="pagination"
        previousLinkClassName='previousLinkClassName'
        nextLinkClassName='nextLinkClassName'
        breakLinkClassName='breakLinkClassName'
        pageLinkClassName='pageLinkClassName'
        activeLinkClassName='activeLinkClassName'
        disabledLinkClassName='disabledLinkClassName'
      />
    </>
  );
}

export default memo(Pagination);
