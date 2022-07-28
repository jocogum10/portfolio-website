
export default async function getRepos (username) {
    const apiSettings = {
		method: 'get',
		headers: {
			'Accept': 'application/vnd.github+json',
			'Content-Type': 'application/json'
		},
	};

    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=created&type=all`, apiSettings);
	const data = await response.json();

    const apiResponse = {
		success: response.ok,
		data: data
	};

	return apiResponse;
}
