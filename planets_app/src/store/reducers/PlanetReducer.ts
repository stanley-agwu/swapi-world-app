import {ActionType, PlanetDispatchTypes, PlanetInfoType} from "../actions/PlanetActionTypes";

interface DefaultStateI {
    loading: boolean,
    error: string | null
    planet: PlanetInfoType | PlanetInfoType[] | null
}

const initialState: DefaultStateI = {
    loading: false,
    error: null,
    planet: null
};

const planetReducer = (state: DefaultStateI = initialState, action: PlanetDispatchTypes): DefaultStateI => {
    switch (action.type) {
        case ActionType.PLANET_FAILED:
            return {
                loading: false,
                error: action.payload,
                planet: null
            }
        case ActionType.PLANET_LOADING:
            return {
                loading: true,
                error: null,
                planet: null
            }
        case ActionType.PLANET_SUCCESS:
            return {
                loading: false,
                error: null,
                planet: action.payload
            }
        default:
            return state;
    }
};

export default planetReducer;