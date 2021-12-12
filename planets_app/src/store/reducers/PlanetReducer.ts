import {ActionType, PlanetDispatchTypes, PlanetInfoType} from "../actions/PlanetActionTypes";

interface DefaultStateI {
    loading: boolean,
    error: string | null
    planet?: PlanetInfoType
}

const initialState: DefaultStateI = {
    loading: false,
    error: null
};

const planetReducer = (state: DefaultStateI = initialState, action: PlanetDispatchTypes): DefaultStateI => {
    switch (action.type) {
        case ActionType.PLANET_FAILED:
            return {
                loading: false,
                error: action.payload
            }
        case ActionType.PLANET_LOADING:
            return {
                loading: true,
                error: null
            }
        case ActionType.PLANET_SUCCESS:
            return {
                loading: false,
                error: null,
                planet: action.payload.planet
            }
        default:
            return state;
    }
};

export default planetReducer;