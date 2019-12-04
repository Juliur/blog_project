import {combineReducers} from 'redux';
import postsLikeReducer from './postsLikeReducer';

const rootReducer = combineReducers({
    postsLikeState : postsLikeReducer
})

export default rootReducer