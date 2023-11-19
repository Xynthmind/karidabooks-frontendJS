import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from './components/models/UserContext';

//Home views
import Home from './views/HomePages/Home';
import Login from './views/HomePages/Login';
import Register from './views/HomePages/Register';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}
export default App;