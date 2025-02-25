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
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
      <Route path="/books/show/:id" element={<ShowBook />} />
    </Routes>
  );
};
