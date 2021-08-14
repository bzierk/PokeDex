import Display from './Display'

const RightPanel = ({ pokeData, flavorText }) => {
    return (
        <div className="panel right-panel">
            <Display pokeData={pokeData} flavorText={flavorText} />
        </div>
    )
}

export default RightPanel
