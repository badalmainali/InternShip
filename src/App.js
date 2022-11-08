
import './App.css';
import Navbars from './Component/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Registerpage from './Screens/Register';
function App() {
  return (
    <div className="App">
      <Navbars />
      <BrowserRouter>
      <Routes>
        <Route path='/register' exact element={<Registerpage />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
