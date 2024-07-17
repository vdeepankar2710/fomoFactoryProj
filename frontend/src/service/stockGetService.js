import axios, * as others from 'axios';

const url = 'http://localhost:5000'; 

export const getStocks = async (item) => { 
    try {
        // console.log("item in get", item)
        let response = await axios.get(`${url}/api/stocks`, {
            params: {
                symbol:item.value
            }
        })
        return response;
    } catch (err) {
        return err;
    }
}
