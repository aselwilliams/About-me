import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Tools from './components/Tools';
import Choices from './components/Choices';
import Sites from './components/Sites';
import NotFoundPage from './components/NotFoundPage';

function App() {
  return (
    <div className="container">
      <div className='row'>
        <div className='col'>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Homepage/>} />
              <Route path='/tools' element={<Tools />} />
              <Route path='/choices' element={<Choices />} />
              <Route path='/sites' element={<Sites />} />
              <Route path='*' element={<NotFoundPage/>} />

             
            </Routes>
          </BrowserRouter>
        </div>
      </div>
 
    </div>
  );
}

export default App;
