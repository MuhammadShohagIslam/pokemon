import { gql } from "@apollo/client";
import { POKEMON_FIELDS } from "../fragments/pokemon.fragment";

/* -----------------  Pokemon's ---------------------------- */
export const GET_POKEMONS = gql`
    query pokemons($first: Int!) {
        pokemons(first: $first) {
            ...CorePokemonFields
        }
    }
    ${POKEMON_FIELDS}
`;
