import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

export const BackButton = ({ destination = "/" }) => {
  return (
    <div className="flex ">
      <Link
        to={destination}
        className="bg-sky-800 text-white  py-1 px-4 rounded-lg w-fit"
      >
        <MdArrowBack className="text-2xl" />
      </Link>
    </div>
  );
};
