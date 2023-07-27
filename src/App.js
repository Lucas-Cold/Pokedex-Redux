import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import FavoritePokemonList from './components/FavoritePokemonList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Pokédex</h1>
        <nav>
          <Routes>
            <Route path="/" element={<PokemonList />} />
            <Route path="/favorites" element={<FavoritePokemonList />} />
          </Routes>
        </nav>
      </header>
    </div>
  );
}

export default App;


