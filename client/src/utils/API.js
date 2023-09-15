export const searchJobApi = (searchInput) => {

    const url = `https://jsearch.p.rapidapi.com/search?query=${searchInput}&page=1&num_pages=1&remote_jobs_only=true`;
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_API,
		'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
	}
};

return fetch(url, options)
};