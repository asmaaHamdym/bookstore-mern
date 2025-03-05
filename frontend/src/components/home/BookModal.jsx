import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 right-0 bottom-0 left-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="w-[600px] max-w-full h-[400px] bg-white rounded-lg p-4 flex felx-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <div className="flex flex-col justify-center items-center gap-x-2">
          <div className="flex gap-1">
            <PiBookOpenTextLight className="text-2xl text-red-300" />
            <h2 className="my-1">{book.title}</h2>
          </div>
          <div className="flex gap-1">
            <BiUserCircle className="text-2xl text-red-300" />
            <h2 className="my-1">{book.author}</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat sunt
            numquam nisi minus tempora! Illum vitae voluptatem corrupti,
            perferendis numquam, nisi molestias sunt maiores doloremque optio
            libero. Blanditiis, illum quisquam.
          </p>
        </div>
      </div>
    </div>
  );
};
export default BookModal;
