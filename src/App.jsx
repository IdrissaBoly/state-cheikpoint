

// const App = () => {
//   const [movies] = useState([
//     { title: 'Sport 1 ', description: 'Description du Sport 1', posterURL: 'https://www.time-to-run.com/wp-content/uploads/james-thie.590.jpg', rating: 4.5 },
//     { title: 'Sport 2', description: 'Description du Sport 2', posterURL: 'https://media.gettyimages.com/id/957625/photo/james-thie-neil-bangs-and-richard-ashe-of-great-britain-in-action-in-the-1500m-during-the-norwich.jpg?s=612x612&w=gi&k=20&c=LwHvtO-jl7JhXjveuO0pEI1uxGaEsxvG9jXRmWvKgvc=' ,rating: 4.5}
//   ]);

//   const [filteredMovies, setFilteredMovies] = useState(movies);

//   const handleTitleChange = (event) => {
//     const titleFilter = event.target.value.toLowerCase();
//     const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(titleFilter));
//     setFilteredMovies(filteredMovies);
//   };

//   const handleRatingChange = (event) => {
//     const ratingFilter = parseFloat(event.target.value);
//     const filteredMovies = movies.filter(movie => movie.rating >= ratingFilter);
//     setFilteredMovies(filteredMovies);
//   };

//   return (
//     <div className="app">
//       <Filter onTitleChange={handleTitleChange} onRatingChange={handleRatingChange} />
//       <MovieList movies={filteredMovies} />
//     </div>
//   );
// };

// export default App;
import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'IdrissaBOLY',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        imgSrc: "data:image/jpeg;base64,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",
        profession: 'Web Developer',
      },
      show: false,
      timeInterval: 0,
    };
  }

  componentDidMount() {
    // Set up an interval to update the timeInterval every second
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the interval when the component unmounts to avoid memory leaks
    clearInterval(this.interval);
  }

  toggleProfile = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeInterval } = this.state;

    return (
      <div className="App">
        <h1>Profile App</h1>
        <button onClick={this.toggleProfile}>
          Toggle Profile {show ? 'Off' : 'On'}
        </button>
        {show && (
          <div className="profile">
            <img src={imgSrc} alt={fullName} />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p>Profession: {profession}</p>
          </div>
        )}
        <p>Time since mount: {timeInterval} seconds</p>
      </div>
    );
  }
}