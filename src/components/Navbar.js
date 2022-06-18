import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="w-80 m-auto p-1 pos-relative d-flex justify-space-between align-center">
                <h1 className="pos-absolute top-25" >Pokedex</h1>
                <img src="./imgs/pokeball.png" alt="pokeball" />

                <div className="nav-icon-container d-flex justify-space-around">
                    <Link to="/">
                        <img src="./imgs/search.png" alt="Search" />
                    </Link>
                    <Link to="/pokedex">
                        <img src="./imgs/pokedex.png" alt="Pokedex" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;