import React from 'react';

const Pagination = ({
  goPrev,
  goNext,
  currentPage,
  totalItems,
  itemsPerPage,
}) => {
  const isPrevDisabled = currentPage <= 0;
  const isNextDisabled = totalItems / itemsPerPage > currentPage + 1;

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={isPrevDisabled}>
        {!isPrevDisabled && '←'}
      </button>
      <span className="pagination__page">{currentPage + 1}</span>
      <button className="btn" onClick={goNext} disabled={!isNextDisabled}>
        {isNextDisabled && '→'}
      </button>
    </div>
  );
};

export default Pagination;
