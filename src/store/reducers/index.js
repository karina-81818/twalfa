import { combineReducers } from "redux";
import favoriteReduser from './favoriteReduser';
import planetReduser from './planetReduser'


export default combineReducers({
    favoriteReduser,
    planetReduser 
})
