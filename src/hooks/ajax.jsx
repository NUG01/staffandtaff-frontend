import axios from '@/lib/axios';
import mediaAxios from '@/lib/mediaAxios';

export const useAjax = () => {

    const csrf = () => axios.get('/sanctum/csrf-cookie');

    const sendData = async (url, data, callback) => {
        await csrf();
        
        axios
            .post(url, data)
            .then(callback)
            .catch(error => {
            });
    };

    const sendMediaData = async (url, data, callback) => {
        await csrf();

        mediaAxios
            .post(url, data)
            .then(callback)
            .catch(error => {
            });
    };

    const getData = async (url, callback) =>{
        await csrf()
        
        axios
            .get(url)
            .then(callback)
            .catch(error => {
            });
    }
    
    return {
        sendData,
        sendMediaData,
        getData
    };
};
