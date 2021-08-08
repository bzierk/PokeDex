import React from 'react'

const PokemonImage = ({ pokeData }) => {
        return (
            <div>
                <img src={pokeData.sprites.front_default} alt='pokemon' className='pokemon-image' />
                {/* <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt='pokemon' className='pokemon-image' />              */}
        </div>
    )
}

export default PokemonImage
