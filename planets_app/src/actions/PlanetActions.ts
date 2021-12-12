import axios from 'axios';
import {Dispatch} from 'redux';
import {PLANET_FAILED, PLANET_LOADING, PLANET_SUCCESS, PlanetDispatchTypes} from './PlanetActionTypes';

export const getPlanets = (planets: string) => async (dispatch: Dispatch<PlanetDispatchTypes>) => {
    try {
        dispatch({
            type: PLANET_LOADING
        })
        const res = await axios.get(`https://swapi.py4e.com/api/${planets}`)

        dispatch({
            type: PLANET_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: PLANET_FAILED
        })
    }
}