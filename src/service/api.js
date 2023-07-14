const BASE_URL = 'https://api.themoviedb.org/3';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYjE3NzU3ZjU2ZDg1NmM5YzE2MmE1OWEzZWZlMmY5MyIsInN1YiI6IjY0NzhkNWZjOWI2ZTQ3MDBkZThlOTBlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BE22YVTai34Dh5C1jSxEZ2DzzjnxJfKFgEIpWS2JFcI',
  },
};

export const fetchTrendingMovies = () =>
  fetch(`${BASE_URL}/trending/movie/day?language=en-US`, options)
    .then(response => {
      checkResponse(response);

      return response;
    })
    .then(response => response.json());

const checkResponse = response => {
  if (!response.ok) {
    let err = new Error(`HTTP status: ${response.status}`);

    err.response = response;
    err.status = response.status;

    throw err;
  }
};