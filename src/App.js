import { HashRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import PokeSearch from './components/PokeSearch';
import PokemonPagination from './components/PokemonPagination';

function App() {
  return (
  <Router>
    <div className="App">
      <Navbar />
      <div className='w-80 m-auto'>
        <Routes>
          <Route path='/' element={<PokeSearch />}/>
          <Route path='/pokedex' element={<PokemonPagination />}/>
        </Routes>
      </div>
    </div>
  </Router>);
}

export default App;
