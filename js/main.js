// Movie Genre ID
// ACTION - 28
// DRAMA - 18
// SCI_FI - 878
// HORROR - 27
// CRIME - 80
// HISTORY - 36

const url = 'https://api.themoviedb.org/3/genre/28/movies?api_key=6cdc42661a2ffa0286928aa9ded5083e&language=en-US&include_adult=false&sort_by=created_at.asc';
fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    console.log(data.results);
  })
  .catch(function(error) {
    console.log(JSON.stringify(error));
  });