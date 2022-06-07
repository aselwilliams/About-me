import { BrowserRouter,Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Homepage from './components/Homepage';
import Tools from './components/Tools';
import Choices from './components/Choices';
import Sites from './components/Sites';
import NotFoundPage from './components/NotFoundPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="container">
      <div className='row'>
        <div className='col'>
          <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path='/' element={<Homepage/>} />
              <Route path='/tools' element={<Tools />} />
              <Route path='/choices' element={<Choices />} />
              <Route path='/follow-sites' element={<Sites />} />
              <Route path='*' element={<NotFoundPage/>} />

             
            </Routes>
          </BrowserRouter>
        </div>
      </div>
 
    </div>
  );
}

export default App;
