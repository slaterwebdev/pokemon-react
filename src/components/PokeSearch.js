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
        setSearch('')
    };
    return ( 
        <div className="poke-search mt-2">
            <form className="d-flex justify-space-around align-center ml-2 mr-2" onSubmit={onSubmit}>
                <input 
                    placeholder="Search the Pokedex.."
                    className="w-90 p-2 input-style"
                    type="text" 
                    required 
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="p-2">
                    <img src="./imgs/blackSearch.png" alt="" />
                </button>
            </form>
            <div className="d-flex justify-center">
                {data && <PokemonCard data={data} baseUrl={baseUrl} />}
            </div>
        </div>
     );
}
 
export default PokeSearch;