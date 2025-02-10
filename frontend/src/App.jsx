import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import EditBook from "./pages/EditBook";
import CreateBook from "./pages/CreateBook";
import DeleteBook from "./pages/DeleteBook";
import ShowBook from "./pages/ShowBook";
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/edit" element={<EditBook />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/delete" element={<DeleteBook />} />
      <Route path="/books/show" element={<ShowBook />} />
    </Routes>
  );
};
