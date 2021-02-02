import axios from 'axios';

const config = {
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
	},
};


 const get = async (url) => {
	const baseUrl = process.env.VUE_APP_URL_API + "/api";
	return await axios.get(baseUrl + url, config);
}

export default
{
	get
}

