
import './App.css';
import Navbars from './Component/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Registerpage from './Screens/Register';
import LoginPage from './Screens/Login';
function App() {
  return (
    <div className="App">
      <Navbars />
      <BrowserRouter>
      <Routes>
        <Route path='/register' exact element={<Registerpage />} />
        <Route path='/login' exact element={<LoginPage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
