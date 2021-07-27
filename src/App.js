import { useState} from 'react'
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel"


function App() {
  const [pokeData, setPokeData] = useState({})


  // Fetch Data
const fetchData = async(id) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const data = res.json()

  // console.log(data)
  return data
}

// Submit Search
const subSearch = async (search) => {
  const fixedSearch = search.search.toLowerCase()
  const pokeData = await fetchData(fixedSearch)
  setPokeData(pokeData)

}
  return (
    <div className="pokedex">
      <LeftPanel onSearch={subSearch}/>
      <RightPanel pokeData={pokeData} />
    </div>
  );
}

export default App;
