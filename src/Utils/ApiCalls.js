// Without Images
import { BASE_URL } from "../Constants";

const ApiCall = async (url, method, authTokens, params) => {
	const headers = {
		"Content-Type": "application/json",
		Authorization: "Bearer " + String(authTokens.access),
	};

	let apiUrl;
	let body;

	if (params !== null && method === "GET") {
		const queryParams = new URLSearchParams(params).toString();
		apiUrl = BASE_URL + url + (queryParams ? `?${queryParams}` : "");
		// console.log("api url", queryParams, apiUrl);
	} else {
		apiUrl = BASE_URL + url;
		body = params ? JSON.stringify(params) : undefined;
		// console.log("body", body);
	}

	const response = await fetch(apiUrl, {
		method: method,
		headers: headers,
		body: body,
	});

	const responseData = await response.json();

	return {
		status: response.status,
		data: responseData,
	};
};

export default ApiCall;
