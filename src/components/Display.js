const Display = ({ pokeData}) => {

    return (
        <div className='display'>
            <div className='pokemon-name'>
                Name:  {pokeData.name}
            </div>
            <div>
                Number: {pokeData.id}
            </div>
            <div>
                {/* {pokeData.map(t=> {
                    const type = t.type.name;
                    return type */}
            </div>
            
            {/* // pokeData.length > 0 ? (
            // pokeData.name) : ('Perform a search') */}
        </div>
    )
}

export default Display
