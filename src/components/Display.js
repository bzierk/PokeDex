import Stats from "./Stats"
import Types from "./Types"
import Abilities from "./Abilities"
import FlavorText from "./FlavorText"

const Display = ({ pokeData, flavorText }) => {

    return (
        <div className='display'>
            <div className='pokemon-name'>
                {pokeData.name}
            </div>
            <div>
                no. {pokeData.id}
            </div>
            <div>
                Height: {pokeData.height}
            </div>
            <div>
                Weight: {pokeData.weight}
            </div>
            <div className='stat-header'>
                Types
            </div>
            <div>
                <Types className='stat-body'
                    pokeType={ pokeData.types }
                />
            </div>
            <div className='stat-header'>
                Stats
            </div>
            <div className='stat-body'>
                <Stats
                    pokeStats={ pokeData.stats }
                />
            </div>
            <div className='stat-header'>
                Abilities
            </div>
            <div className='stat-body'>
                <Abilities
                    pokeAbility={ pokeData.abilities }
                />
            </div>
            <div>
                <FlavorText flavorText={ flavorText }/>
            </div>
        </div>
    )
}

export default Display
