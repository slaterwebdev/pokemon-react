import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const PokemonPagination = () => {
    const [loading, setLoading] = useState(true);
    const[pokemons, setPokemons] = useState([])
    const [loadPokemon] = useState('https://pokeapi.co/api/v2/pokemon?limit=150&offset=20')
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(20);
    const [pageNumber, setPageNumber] = useState(false);

    useEffect(() => {
        const getAllPokemons = async (loadPokemon) => {
            const res = await fetch(loadPokemon);
            const data = await res.json()
            
            function createPokemonObject(results)  {
                results.forEach( async pokemon => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                const data =  await res.json()
                setPokemons( list => [...list, data])
                })
            }
            setLoading(false);
            createPokemonObject(data.results)
        }
        getAllPokemons(loadPokemon)
    }, [])

    //Pagination
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = pokemons.slice(indexOfFirstPost, indexOfLastPost);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(pokemons.slice(0, 150).length / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    //Changing the page
    const paginate = (number) => {
        setCurrentPage(number);
        window.addEventListener('click' , (e) => {
            e.target.style.textDecoration = 'underline 1px solid red';
        })
    }

    return ( 
        <div>
            <h4 className="mt-2">Page {currentPage}</h4>
            <h2 className="text-center mt-2 mb-2">Scroll through the Pokedex to see all 150 original Pokemon!</h2>
            <div>
                <div className="d-flex justify-center align-center pointer">
                    {pageNumbers && pageNumbers.map((num, i) => {
                        return <a className={`m-1 page-numbers `} onClick={() => paginate(num)} key={i}>{num}</a>
                    })}
                </div>
            </div>
            {loading && <p className="text-center font-lg color-grey">Initializing Pokedex...</p>}
            <div className="d-flex flex-wrap justify-center">
                {pokemons && currentPosts.map((pokemon, i) => {
                    return <PokemonCard key={i} data={pokemon} />
                })}
            </div>
            <div className="d-flex justify-center pointer">
                {pageNumbers && pageNumbers.map((num, i) => {
                    return <a className={`m-1 page-numbers `} onClick={() => paginate(num)} key={i}>{num}</a>
                })}
            </div>
            <h4 className="mt-2 mb-3">Page {currentPage}</h4>
        </div>
    ); 
}
 
export default PokemonPagination;