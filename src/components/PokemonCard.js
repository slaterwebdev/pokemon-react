const PokemonCard = ({ data , baseUrl }) => {
    const pokemonName = baseUrl.slice(34).charAt(0).toUpperCase() + baseUrl.slice(35);
    const pokemonImage = data.sprites.front_default;

    return (
        <div className="pokemon-card text-center">
            <h2 className="text-center">{pokemonName}</h2>
            <h3>Base XP:{data.base_experience}</h3>
            <img src={pokemonImage} alt={`Image of ${pokemonName}`} />

            {data.types.map((type, i) => {
                const elementType = type.type.name;
                return <h4 key={i}>{elementType}</h4>;
            })}

            {data.abilities.map((abil, i) => {
                const ability = abil.ability.name;
                return <h6 key={i}>{ability}</h6>;
            })}

            {data.forms.map((form, i) => {
                return <h6 key={i}>{form.name}</h6>;
            })}
        </div>
    );
}
 
export default PokemonCard;