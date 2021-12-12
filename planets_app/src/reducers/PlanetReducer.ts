import {PLANET_FAILED, PLANET_LOADING, PLANET_SUCCESS, PlanetInfoType} from "../actions/PlanetActionTypes";

interface DefaultStateI {
    loading: boolean,
    planet?: PlanetInfoType
}

const defaultState: DefaultStateI = {
    loading: false
};

const planetReducer = (state: DefaultStateI = defaultState, action: any): DefaultStateI => {
    switch (action.type) {
        case PLANET_FAILED:
            return {
                loading: false
            }
        case PLANET_LOADING:
            return {
                loading: true
            }
        case PLANET_SUCCESS:
            return {
                loading: false,
                planet: action.payload
            }
        default:
            return state;
    }
};

export default planetReducer;