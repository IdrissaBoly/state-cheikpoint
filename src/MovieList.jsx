import React from 'react';
import SportCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <SportCard key={index} {...movie} />
      ))}
    </div>
  );
};

export default MovieList;
