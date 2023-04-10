import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Pokemon = ({ pokemon }: { pokemon: any }) => {
    console.log(pokemon)
    return (
        <Link href="/" className="cursor-pointer">
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md">
            <div className='pt-3'>
                <Image className="object-contain m-auto h-32 w-40" src={pokemon.image} alt="product image" width="0"
                    height="0"
                    sizes="100vw"
                />
            </div>
            <div className="px-5 pb-5">
                <span className="bg-gray-200 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">#{pokemon.number}</span>

                <h5 className="text-xl font-semibold tracking-tight text-gray-900 pt-5">{pokemon.name}</h5>
                <div className='pt-2'>
                    {pokemon.types.length && pokemon.types.map((type: string, index: number) => (
                        <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-3.5 py-1 rounded ">{type}</span>
                    ))}

                </div>
            </div>
        </div>
        </Link>
    );
};

export default Pokemon;