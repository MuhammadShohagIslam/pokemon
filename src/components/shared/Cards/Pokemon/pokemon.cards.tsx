import React, { useState } from 'react';
import Pokemon from './pokemon.card';
import Pagination from '../../Pagination/pagination';
import { paginate } from '../../../../../utils/paginate';

const Pokemons = ({ data }: { data: any[] }) => {
    const [page, setPage] = useState<number>(1);
    const count = data?.length;
    const pageSize = 20;
    const pages = Math.ceil(count / pageSize);

    // getting pokemon data based on pagination
    const paginatedPokemon = paginate(data, page, pageSize);

    return (
        <section className='w-4/5 mx-auto'>
            {/* Pokemon Card */}
            <div className='grid grid-cols-4 gap-3'>
                {paginatedPokemon.length > 0 ? paginatedPokemon.map((pokemon) => (
                    <Pokemon key={pokemon.id} pokemon={pokemon} />
                )) : (
                    <h1>There is no Pokemon</h1>
                )}
            </div>

            {/* Pagination */}
            <div>
                <Pagination pages={pages} page={page} setPage={setPage} />
            </div>
        </section>
    );
};

export default Pokemons;