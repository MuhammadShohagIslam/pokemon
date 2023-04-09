import { gql } from "@apollo/client";

export const POKEMON_FIELDS = gql`
    fragment CorePokemonFields on Pokemon {
        id
        number
        name
        weight {
            minimum
            maximum
        }
        height {
            minimum
            maximum
        }
        classification
        types
        resistant
        weaknesses
        fleeRate
        maxCP
        maxHP
        image
    }
`;
