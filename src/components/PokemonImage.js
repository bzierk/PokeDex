import React from 'react'

const PokemonImage = ({ pokeData, pokeImage }) => {
        return (
            <div>
                {/* <img src={pokeImage.img_url} alt='pokemon' className='pokemon-image' /> */}
                <img src={pokeData.sprites.front_default} alt='pokemon' className='pokemon-image' />
        </div>
    )
}

export default PokemonImage
