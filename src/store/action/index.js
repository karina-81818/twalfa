import { object } from 'prop-types'
import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE, ADD_PLANETLIST, REMOVE_PLANETLIST } from '../../store/constans/actionType'

export const setPersonTofavorite = person => ({
    type: ADD_PERSON_TO_FAVORITE,
    payload: person
})

export const removePersonTofavorite = personId => ({
    type: REMOVE_PERSON_FROM_FAVORITE,
    payload: personId
})
export const setPlanetList = id=>({
    type: ADD_PLANETLIST,
    payload: id
})
export const removePlanetList = personId=>({
    type: REMOVE_PLANETLIST,
    payload: personId
})