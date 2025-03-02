import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import { BooksTable } from "../components/home/BooksTable";
import { BooksCard } from "../components/home/BooksCard";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/books")
      .then((res) => {
        console.log(res);

        setBooks(res.data.books);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Book List</h1>
        <Link
          to="/books/create"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
        >
          <MdOutlineAddBox className="mr-2" />
          Add Book
        </Link>
      </div>
      {loading && <Spinner />}
      <BooksTable books={books} />
    </div>
  );
};
export default Home;
