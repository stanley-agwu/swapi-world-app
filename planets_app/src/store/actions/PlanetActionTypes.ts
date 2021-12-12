export enum ActionType {
    PLANET_LOADING = 'PLANET_LOADING',
    PLANET_FAILED = 'PLANET_FAILED',
    PLANET_SUCCESS = 'PLANET_SUCCESS',
}

export type PlanetInfoType = {
    name: string,
    rotation_period: string,
    orbital_period: string,
    gravity: string,
    climate: string,
    terrain: string,
    population: string,
    residents: resident[],
    created: string,
}

export type resident = string

export interface PlanetLoading {
    type:   ActionType.PLANET_LOADING
}

export interface PlanetFailed {
    type:   ActionType.PLANET_FAILED,
    payload: string
}

export interface PlanetSuccess {
    type:   ActionType.PLANET_SUCCESS,
    payload: PlanetInfoType | PlanetInfoType[]
}

export type PlanetDispatchTypes = PlanetLoading | PlanetFailed | PlanetSuccess

