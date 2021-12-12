export const PLANET_LOADING = 'PLANET_LOADING';
export const PLANET_FAILED = 'PLANET_FAILED';
export const PLANET_SUCCESS = 'PLANET_SUCCESS';

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
    type:   typeof PLANET_LOADING
}

export interface PlanetFailed {
    type:   typeof PLANET_FAILED
}

export interface PlanetSuccess {
    type:   typeof PLANET_SUCCESS,
    payload: {
        planet: PlanetInfoType
    }
}

export type PlanetDispatchTypes = PlanetLoading | PlanetFailed | PlanetSuccess

