import { SingleBookCard } from "./SingleBookCard";
export const BooksCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book, index) => (
        <SingleBookCard book={book} key={book._id} index={index} />
      ))}
    </div>
  );
};
