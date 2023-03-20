import Axios from 'axios'

const mediaAxios = Axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
	headers: {
		'Content-Type': 'multipart/form-data', 
	},
    withCredentials: true,
});

export default mediaAxios