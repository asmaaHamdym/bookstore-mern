import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { BsInfoCircle } from "react-icons/bs";

export const SingleBookCard = ({ book, index }) => {
  return (
    <div className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl">
      <h2 className="absolute top-1 right-2">{book.publishYear}</h2>
      <h4 className="my-2 text-gray-500">{index + 1}</h4>
      <div className="flex justify-center items-center gap-x-2">
        <PiBookOpenTextLight className="text-2xl text-red-300" />
        <h2 className="my-1">{book.title}</h2>
      </div>
      <div className="flex justify-center items-center gap-x-2">
        <BiUserCircle className="text-2xl text-red-300" />
        <h2 className="my-1">{book.author}</h2>
      </div>
      <div className="flex justify-between gap-x-2 m-6">
        <Link to={`books/show/${book._id}`}>
          <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
        </Link>
        <Link to={`books/edit/${book._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
        </Link>
        <Link to={`books/delete/${book._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
        </Link>
      </div>
    </div>
  );
};
