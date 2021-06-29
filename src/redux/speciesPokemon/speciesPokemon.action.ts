import { FETCH_SPECIES_POKEMON } from './speciesPokemon.type';

export const fetchSpeciesSuccess = ( species : any ) => {
    return{
        type: FETCH_SPECIES_POKEMON,
        payload : species
    }
}