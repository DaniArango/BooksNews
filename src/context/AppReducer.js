
const newsbooks = (state, action) => {

    switch (action.type) {
        case "GET_NEWSBOOKS":
            return {
                ...state,
                newsbooks: action.payload,
            };
        default:
            return state;
    }
};



export default newsbooks;