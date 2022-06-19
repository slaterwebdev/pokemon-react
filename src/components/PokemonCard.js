const PokemonCard = ({ data }) => {
    const pokemonImage = data.sprites.front_default;
    const firstLetterCap = (element) => {
       return element.charAt(0).toUpperCase() + element.slice(1);
    };

    return (
        <div className="pokemon-card text-center box-shadow m-2 br-sm pos-relative">
            <div className="pokeball-card pos-absolute left-0"></div>

            <div className="info">
                <h2 className="br-sm mt-3 color-white">{firstLetterCap(data.name)}</h2>
                <h3 className="color-white">XP:{data.base_experience}</h3>
                <div className="pokemon-image-container m-auto overflow-hidden mb-2">
                <img src={pokemonImage} alt="" />
                </div>

                <div className="poke-stats">

                    <div className="d-flex justify-space-around ml-2 mr-2">
                        <div className="d-flex justify-center">
                            <h4 className="pr-1">Types:</h4>
                            <div>
                                {data.types.map((type, i) => {
                                    const elementType = type.type.name;
                                    return <h4 className="text-left" key={i}> {firstLetterCap(elementType)}</h4>;
                                })}
                            </div>
                        </div>

                        <div className="d-flex justify-center">
                            <h4 className="pr-1">Abilities:</h4>
                            <div>
                                {data.abilities.map((abil, i) => {
                                const ability = abil.ability.name;
                                return <h4 className="text-left" key={i}>{firstLetterCap(ability)}</h4>;
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="mt-2 mb-3 d-flex justify-center flex-wrap aling-center">
                        {data.stats.map((stat, i) => {
                            const statType = stat.stat.name;
                            const statAmount = stat.base_stat;
                            return <h6 className="w-20 br-sm d-inline-block text-center font-md m-1" key={i}>
                                {statAmount}
                                <br/>
                                <span className="stat-type">{firstLetterCap(statType)}</span>
                            </h6>;
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default PokemonCard;