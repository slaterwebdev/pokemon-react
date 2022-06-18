import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import PokeSearch from './components/PokeSearch';

function App() {
  return (
  <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<PokeSearch />}/>
      </Routes>
    </div>
  </Router>);
}

export default App;
