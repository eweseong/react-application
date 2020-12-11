import axios from 'axios';

const API_BASE_URL = 'https://api.themoviedb.org/3';
const NETFLIX_NETWORK_ID = '213';
const POSTER_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

const ShowService = (() => {
  function appendImageBaseUrl(imagePath) {
    return `${POSTER_IMAGE_BASE_URL}${imagePath}`;
  }

  function mapResults({ data: { results = [] } }) {
    return results.map((result) => ({
      ...result,
      backdrop_path: appendImageBaseUrl(result.backdrop_path),
      poster_path: appendImageBaseUrl(result.poster_path),
    }));
  }

  /**
   * Data are generally fetch through some kind of API (Application Programming Interface),
   * and currently the most common form of APIS are RESTful (Representational state transfer) API.
   *
   * REST API typically returns JSON response via some of the commonly used HTTP methods:
   * GET    - retrieve data
   * POST   - create new data
   * PUT    - replace old data with new data
   * PATCH  - update data partially
   * DELETE - remove data
   *
   * Aside from using window.fetch() API, we can use a HTTP client library like `axios`
   * to bootstrap the request configuration and mapping of data to JSON under the hood.
   * For more information on `axios` @see https://github.com/axios/axios
   */
  return {
    getNetflixOriginals: () => {
      return axios
        .get(`${API_BASE_URL}/discover/tv`, {
          params: {
            api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
            with_networks: NETFLIX_NETWORK_ID,
          },
        })
        .then(mapResults);
    },

    getTrendingNow: () => {
      return axios
        .get(`${API_BASE_URL}/trending/all/week`, {
          params: {
            api_key: process.env.REACT_APP_MOVIE_DB_API_KEY,
            language: 'en-US',
          },
        })
        .then(mapResults);
    },
  };
})();

export default ShowService;
