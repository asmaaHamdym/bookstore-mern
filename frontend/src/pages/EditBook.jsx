import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { BackButton } from "../components/BackButton";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:3000/books/${id}`)
      .then((res) => {
        console.log(res);
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        alert("Failed to fetch book");
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .put(`http://localhost:3000/books/${id}`, {
        title,
        author,
        publishYear,
      })
      .then((res) => {
        console.log(res);
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        alert("Failed to create book");
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Book</h1>
      {loading && <Spinner />}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label htmlFor="" className="text-xl mr-4 text-gray-500">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 w-full px-4 py-2"
          />
        </div>
        <div className="my-4">
          <label htmlFor="" className="text-xl mr-4 text-gray-500">
            Author
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 w-full px-4 py-2"
          />
        </div>
        <div className="my-4">
          <label htmlFor="" className="text-xl mr-4 text-gray-500">
            Publish Year
          </label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            className="border-2 border-gray-500 w-full px-4 py-2"
          />
        </div>
        <button onClick={handleSubmit} className="bg-sky-300 m-8 py-2 ">
          Save
        </button>
      </div>
    </div>
  );
};
export default EditBook;
