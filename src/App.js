import { Routes, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import HomePage from './pages/HomePage';
import AllBeers from './pages/AllBeers';
import NewBeer from './pages/NewBeer';
import RandomBeer from './pages/RandomBeer';
import BeerDetails from "./pages/BeerDetails";



function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/beers" element={<AllBeers />} />
      <Route path="/beers/:beerId" element={<BeerDetails />} />
      <Route path="/new-beer" element={<NewBeer />} />
      <Route path="/random-beer" element={<RandomBeer />} />
    </Routes>
    </div>
  );
}

export default App;
