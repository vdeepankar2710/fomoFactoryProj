import axios, * as others from 'axios';

const url = 'http://localhost:5000'; 

export const getStocks = async (item) => { 
    try {
        let response = await axios.get(`${url}/api/stocks?symbol=${item}`)
        return response;
    } catch (err) {
        return err;
    }
}
