import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import Validate from './pages/Validate';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="validate" element={<Validate />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
