"use client";

const Pagination = ({ page, lastPage, setPage }) => {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };
  const handleNextPage = () => {
    setPage((prevState) => prevState + 1);
    scrollTop();
  };
  const handlePrevPage = () => {
    setPage((prevState) => prevState - 1);
    scrollTop();
  };
  return (
    <div
      className={`flex justify-center items-center py-4 px-2 gap-x-4  text-2xl`}
    >
      <button
        className={`transition-all ${
          page <= 1
            ? " text-color-secondary"
            : "text-color-primary hover:text-color-accent"
        }`}
        onClick={handlePrevPage}
        disabled={page <= 1 ? true : false}
      >
        Prev
      </button>
      <p className=" text-color-primary">
        {page} of {lastPage}
      </p>
      <button
        className={`transition-all ${
          page === lastPage
            ? " text-color-secondary"
            : "text-color-primary hover:text-color-accent"
        }`}
        onClick={handleNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
