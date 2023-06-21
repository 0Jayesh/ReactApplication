const initialState = {
    products : [],
    pets: []
} 

 const dataReducer = (state = initialState,action) => {
    switch (action.type) {
        case 'fetch_data':
            return {
                ...state,
                products : action.payload
            }

        case 'fetch_pets':
            return {
                ...state,
                pets: action.payload
            }

        default : return state

    }
}

export default dataReducer

