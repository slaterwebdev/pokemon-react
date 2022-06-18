import { useState } from "react";
import PokemonCard from "./PokemonCard";
import useFetch from "../hooks/useFetch";

const PokeSearch = () => {
    const [baseUrl, setBaseUrl] = useState(null);
    const [search, setSearch] = useState('');
    const {data} = useFetch(baseUrl)
    const onSubmit = (e) => {
        e.preventDefault()
        setBaseUrl(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`)
    };
    return ( 
        <div className="poke-search">
            <form onSubmit={onSubmit}>
                <input 
                    placeholder="Search the Pokedex.."
                    className="w-90 p-2 m-2 input-style text-center"
                    type="text" 
                    required 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button>Submit</button>
            </form>
            {data && <PokemonCard data={data} baseUrl={baseUrl} />}
        </div>
     );
}
 
export default PokeSearch;