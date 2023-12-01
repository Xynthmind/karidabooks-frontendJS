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
import SelectPaymentNAdress from './views/Books/SelectPaymentNAddress';
import Account from './views/Customer/Account';
import CardstoPay from './views/Customer/CardstoPay'
import Address from './views/Customer/Address'
import Orders from './views/Customer/Orders';
import OrderDetails from './views/Customer/OrderDetails'
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
          <Route path="/selectpaymentandaddress" element={<SelectPaymentNAdress />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cardstopay" element={<CardstoPay />} />
          <Route path="/address" element={<Address />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/ordersdetails' element={<OrderDetails />} />
        </Routes>
      </Router>
    </UserProvider>
  );
} 
export default App;