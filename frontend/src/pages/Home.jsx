import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:3000/books")
      .then((res) => {
        setBooks(res.data);
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
          to="/books/create0"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
        >
          <MdOutlineAddBox className="mr-2" />
          Add Book
        </Link>
      </div>
      <table className="w-full border-separate border-spacing-2">
        <thead>
          <tr>
            <th className="border border-slate-600 rounded-md">No</th>
            <th className="border border-slate-600 rounded-md">Title</th>
            <th className="border border-slate-600 rounded-md max-md:hidden">
              Author
            </th>
            <th className="border border-slate-600 rounded-md max-md:hidden">
              Publish Year
            </th>
            <th className="border border-slate-600 rounded-md">Operation</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => {
            return (
              <tr key={book._id} className="h-8 text-center">
                <td className="border border-slate-700 rounded-md ">
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md">
                  {book.title}
                </td>
                <td className="border border-slate-700 rounded-md max-md:hidden">
                  {book.author}
                </td>
                <td className="border border-slate-700 rounded-md max-md:hidden">
                  {book.publishYear}
                </td>
                <td className="border border-slate-700 rounded-md">
                  <Link
                    to={`/books/edit/${book._id}`}
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded"
                  >
                    <AiOutlineEdit />
                  </Link>
                  <Link
                    to={`/books/show/${book._id}`}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                  >
                    <BsInfoCircle />
                  </Link>
                  <Link
                    to={`/books/delete/${book._id}`}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  >
                    <MdOutlineDelete />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Home;
