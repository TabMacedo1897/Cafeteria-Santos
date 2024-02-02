import React, { useState } from 'react';
import axios from 'axios';
import './Search.css';
import Loader from '../Loader/Loader';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [carregando, setCarregando] = useState(false);

  const handleSearch = async () => {
    try {
      setCarregando(true);
      // Limpa os resultados da pesquisa anterior
      setSearchResults([]);
      setShowPopup(false);

      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      console.log('Response:', response.data);

      if (response.data.meals === null || response.data.meals.length === 0) {
        console.log('Nenhum resultado encontrado');
        setShowPopup(true);
      } else {
        console.log('Resultados encontrados');
        setSearchResults(response.data.meals);
      }
    } catch (error) {
      console.error('Erro ao buscar o dado:', error);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <>
      <header className="container">
        <div className='information-search'>
          <span className='search-input'>
            <input
            placeholder = "Pesquisar mais opções"
              type='text'
              className='search-input'
              id='searchTerm'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="button" className='search-button' onClick={handleSearch}>
              Pesquisar
            </button>
          </span>
        </div>
      </header>
      <div className="content-container">
      <div className="answerImages">
        {/* Renderiza os resultados da API dentro do novo container */}
        {carregando ? (
          <Loader />
        ) : searchResults.length === null ? (
          <p>Nenhum item encontrado 😅</p>
        ) : (
          <div className="container-api-results">
            {searchResults.map((recipe) => (
              <div className="containerImgs" key={recipe.idMeal}>
                <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                <h2>{recipe.strMeal}</h2>
                <button>Comprar</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </>
  );
}
