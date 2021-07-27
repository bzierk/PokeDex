import Display from './Display'

const RightPanel = ({ pokeData }) => {
    return (
        <div className="panel right-panel">
            <Display pokeData={pokeData} />
        </div>
    )
}

export default RightPanel
