import axios from 'axios';
import {Dispatch} from 'redux';
import {ActionType, PlanetDispatchTypes} from './PlanetActionTypes';

export const getPlanets = (planets: string) => async (dispatch: Dispatch<PlanetDispatchTypes>) => {
    try {
        dispatch({
            type: ActionType.PLANET_LOADING
        })

        const {data} = await axios.get(`https://swapi.py4e.com/api/${planets}`)

        dispatch({
            type: ActionType.PLANET_SUCCESS,
            payload: data
        })
    } catch (error: any) {
        dispatch({
            type: ActionType.PLANET_FAILED,
            payload: error.message
        })
    }
}