import { BrowserRouter, Routes,Route, Link} from 'react-router-dom';
import './App.css';
import Login from './components/login';
import SignIn from './components/SignIn';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Link to="/login">Login</Link>
      <Link to="/signin">Sign In</Link>
     <Routes>
    <Route path="/login" exact element={<Login />} />
    <Route path="/signin" exact element={<SignIn />} />
     </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
