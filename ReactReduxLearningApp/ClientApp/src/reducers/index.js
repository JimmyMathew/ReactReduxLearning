import { ADD_ARTICLE, FOUND_BAD_WORD,DATA_LOADED } from "../constants/action-types";

const initialState = {
    articles: [],
    errorMessage: "",
    remoteArticles: []
};


//function rootReducer(state = initialState, action) {
//    if (action.type === ADD_ARTICLE) {
//        state.articles.push(action.payload);
//    }
//    return state;
//}


//The above code is commented because it breaks the basic principle of React(The state is immutable). We altered the actual state. 

//Legible reducer method 
function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        })
    }
    if (action.type === DATA_LOADED) {
        return Object.assign({}, state, {
            remoteArticles: state.remoteArticles.concat(action.payload)
        });
    }
    return state;
}
export default rootReducer;