import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const PokemonPagination = () => {
    const [baseUrl, setBaseUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
    const {data} = useFetch(baseUrl);
    const pokemonUrls =[];

    if(data) {
        data.results.forEach((result, i) => {
            pokemonUrls.push(result.url)
        })
    }

    const fetchPokeData = (url) => {
        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            return console.log(data)
        })
    };

    pokemonUrls.forEach((url, i) => {
        fetchPokeData(url)
    })

    return ( 
        <div className="d-flex justify-center">
            
        </div>
    ); 
}
 
export default PokemonPagination;