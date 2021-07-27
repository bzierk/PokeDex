import {useState} from 'react'
import PokemonImage from './PokemonImage'

const LeftPanel = ({ onSearch }) => {
    const [search, setSearch] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!search) {
            alert('Please enter a search')
            return
        } 

        onSearch({ search })

        setSearch('')
    }

    return (
        <div className="panel left-panel">
        <PokemonImage />
        <form 
            className='search-form' 
            onSubmit={onSubmit}>
                <div className='form-control'>
                    <input
                        type='text'
                        placeholder='Pokemon Name or ID'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className='search-bar'
                    />
                </div>
                
                <input 
                    type='submit'
                    value='Search'
                    className='btn'
                />
                
        </form>
        </div>
    )
}

export default LeftPanel
