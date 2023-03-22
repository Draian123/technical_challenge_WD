import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Phones from './pages/Phones';
import SinglePhone from './pages/SinglePhone';

function App() {
  return (
    <div className='app'>
      <nav className='nav'>
        <Link to="/">All Phones</Link>
      </nav>
    <div className='app'>
      <Routes>
        <Route path="/" element={<Phones />} />
        <Route path="/phones/:id" element={<SinglePhone />} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
