import axios from "axios";

export const fetchData = (data) => {
    return {
        type : 'fetch_data',
        payload: data
    }
}


export const fetchPets = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get('https://localhost:7097/pet');
        console.log('resp', response.data);
        dispatch({
          type: 'fetch_pets',
          payload: response.data
        });
      } catch (error) {
        console.error('Error fetching data:', error);
        dispatch({
          type: 'fetch_pets',
          payload: []
        });
      }
    };
  };
  