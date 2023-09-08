import { combineReducers } from 'redux';
import planetReducer from './PlanetReducer';

const RootReducer = combineReducers({
    planet: planetReducer
})

export default RootReducer;

export type RootState = ReturnType<typeof RootReducer>