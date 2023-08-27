import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item}>
            <h3>Item #{item}</h3>
          </div>
        ))}
    </>
  );
}

function Paginate({ itemsPerPage }) {
  const [itemOffset, setItemOffset] = useState(0);
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default Paginate;
