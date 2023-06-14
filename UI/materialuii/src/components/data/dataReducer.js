const initialState = {
    products : []
} 

 const dataReducer = (state = initialState,action) => {
    switch (action.type) {
        case 'fetch_data':
            // console.log('from',action.payload)
            return {
                ...state,
                products : action.payload
            }
        default : return state

    }
}

export default dataReducer

