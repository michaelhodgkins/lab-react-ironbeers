import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import AllBeers from './pages/AllBeers';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';




function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/beers" element={<AllBeers />} />
      <Route path="/new-beer" element={<NewBeer />} />
      <Route path="/random-beer" element={<RandomBeer />} />
    </Routes>
    </div>
  );
}

export default App;
