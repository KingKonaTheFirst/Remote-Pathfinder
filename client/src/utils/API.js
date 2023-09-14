export const searchJobs = (query) => {

    const url = `https://jsearch.p.rapidapi.com/search?query=${query}&page=1&num_pages=1&remote_jobs_only=true`;
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '73e984e367msh9cc0deea9bcc832p1ef798jsn680812134482',
		'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
	}
};

return fetch(url, options)
};