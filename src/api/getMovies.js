import axios from 'axios';

export default () => {
	return axios.get('/data.json');
};