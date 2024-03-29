const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const requests = {
	original: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
	top: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	crime: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=80`,
	drama: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=18`,
	fantasy: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=14`,
	action: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=28`,
	animation: `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`,
};

export default requests;
