// Movie Genre ID
// ACTION - 28
// DRAMA - 18
// SCI_FI - 878
// HORROR - 27
// CRIME - 80
// HISTORY - 36

function addAction() {
  const rowAction = $('#row-movie');
  const url = 'https://api.themoviedb.org/3/genre/28/movies?api_key=6cdc42661a2ffa0286928aa9ded5083e&language=en-US&include_adult=false&sort_by=created_at.asc';
  fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      console.log(data.results);
      let movies = data.results
      return movies.map(function(movie) {
        var node = `
            <div class="col s12 m4">
              <div class="icon-block">
                <img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}" class="movie-poster">
              </div>
            </div>
            `
        rowAction.append(node);
      })
    })
    .catch(function(error) {
      console.log(JSON.stringify(error));
    });
}

function addCrime() {
  const rowAction = $('#row-movie');
  const url = 'https://api.themoviedb.org/3/genre/80/movies?api_key=6cdc42661a2ffa0286928aa9ded5083e&language=en-US&include_adult=false&sort_by=created_at.asc';
  fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      console.log(data.results);
      let movies = data.results
      return movies.map(function(movie) {
        var node = `
            <div class="col s12 m4">
              <div class="icon-block">
                <img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}" class="movie-poster">
              </div>
            </div>
            `
        rowAction.append(node);
      })
    })
    .catch(function(error) {
      console.log(JSON.stringify(error));
    });
}

function addDrama() {
  const rowAction = $('#row-movie');
  const url = 'https://api.themoviedb.org/3/genre/18/movies?api_key=6cdc42661a2ffa0286928aa9ded5083e&language=en-US&include_adult=false&sort_by=created_at.asc';
  fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      console.log(data.results);
      let movies = data.results
      return movies.map(function(movie) {
        var node = `
            <div class="col s12 m4">
              <div class="icon-block">
                <img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}" class="movie-poster">
              </div>
            </div>
            `
        rowAction.append(node);
      })
    })
    .catch(function(error) {
      console.log(JSON.stringify(error));
    });
}

function addSciFi() {
  const rowAction = $('#row-movie');
  const url = 'https://api.themoviedb.org/3/genre/878/movies?api_key=6cdc42661a2ffa0286928aa9ded5083e&language=en-US&include_adult=false&sort_by=created_at.asc';
  fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
      console.log(data.results);
      let movies = data.results
      return movies.map(function(movie) {
        var node = `
            <div class="col s12 m4">
              <div class="icon-block">
                <img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}" class="movie-poster">
              </div>
            </div>
            `
        rowAction.append(node);
      })
    })
    .catch(function(error) {
      console.log(JSON.stringify(error));
    });
}