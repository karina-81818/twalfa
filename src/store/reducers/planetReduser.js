import { omit } from "lodash"
import { ADD_PLANETLIST, REMOVE_PLANETLIST } from '.././constans/actionType'
import { getLocalStorage } from "../../utils/localStorage";

const initialState = {};

const planetReduser = (state = initialState, action) => {
    console.log('store planet', action)
    
    switch(action.type){
        case ADD_PLANETLIST:
            return {
                ...state,
                ...action.payload
            }
            case REMOVE_PLANETLIST:
                return omit (state, [action.payload])
                default:
                    return state;
    }
}
export default planetReduser;