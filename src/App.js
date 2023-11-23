import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from './components/models/UserContext';

//Home views
import Home from './views/HomePages/Home';
import Login from './views/HomePages/Login';
import Register from './views/HomePages/Register';
import Book from './views/Books/Book';
import BookPerCategory from './views/Books/BookPerCategory';
import BookSearching from './views/Books/BooksSearching';
import Cart from './views/Books/Cart';
function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/books/:book" element={<Book />} />
          <Route path="/books/categoryclass" element={<BookPerCategory />} />
          <Route path="/books/searchingmode" element={<BookSearching />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}
export default App;