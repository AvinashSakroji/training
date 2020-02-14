import axios from 'axios'

export const createINCAction = () =>{
    return{
        type: "INC_CTR"
    }
}

export const createDECAction = () =>{
    return{
        type: "DEC_CTR"
    }
}

export const createfetchCustomersAction = () =>{
    return async (dispatch) => {

        const url = "https://calm-beach-18228.herokuapp.com/customers";
        try {
            const resp = await axios.get(url);
            dispatch({
                type: "FETCH_CUSTOMERS",
                payload: resp.data
            })

        } catch (error) {
            
        }

    }
}