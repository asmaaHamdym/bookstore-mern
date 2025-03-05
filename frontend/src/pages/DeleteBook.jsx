import axios from "axios";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BackButton } from "../components/BackButton";
import Spinner from "../components/Spinner";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handelDelete = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:3000/books/${id}`)
      .then((res) => {
        setLoading(false);
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        alert("Failed to delete book");
      });
  };
  const handelAbort = () => {
    navigate("/");
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4 text-center">Delete Book</h1>
      {loading && <Spinner />}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are you sure you want to delete this book?</h3>
        <button
          className="p-4 bg-red-600 text-white m-4 w-full"
          onClick={handelDelete}
        >
          Yes
        </button>
        <button
          className="p-4 bg-red-600 text-white w-full"
          onClick={handelAbort}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
export default DeleteBook;
