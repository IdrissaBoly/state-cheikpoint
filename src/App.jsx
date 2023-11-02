import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';

const App = () => {
  const [movies] = useState([
    { title: 'Sport 1 ', description: 'Description du Sport 1', posterURL: 'https://www.time-to-run.com/wp-content/uploads/james-thie.590.jpg', rating: 4.5 },
    { title: 'Sport 2', description: 'Description du Sport 2', posterURL: 'https://media.gettyimages.com/id/957625/photo/james-thie-neil-bangs-and-richard-ashe-of-great-britain-in-action-in-the-1500m-during-the-norwich.jpg?s=612x612&w=gi&k=20&c=LwHvtO-jl7JhXjveuO0pEI1uxGaEsxvG9jXRmWvKgvc=' ,rating: 4.5}
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleTitleChange = (event) => {
    const titleFilter = event.target.value.toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(titleFilter));
    setFilteredMovies(filteredMovies);
  };

  const handleRatingChange = (event) => {
    const ratingFilter = parseFloat(event.target.value);
    const filteredMovies = movies.filter(movie => movie.rating >= ratingFilter);
    setFilteredMovies(filteredMovies);
  };

  return (
    <div className="app">
      <Filter onTitleChange={handleTitleChange} onRatingChange={handleRatingChange} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
