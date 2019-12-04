
const postsLikeReducer = (state = [], action) => { 
    switch(action.type){
        case "LIKE": 
            return [
                ...state,
                action.id 
            ]
        case "DISLIKE":
            return[
                ...state,
                action.id
            ]
        default:
            return state             
        }
}  

export default postsLikeReducer