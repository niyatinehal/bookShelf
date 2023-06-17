import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { SearchPage } from './Pages/SearchPage';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Home || </NavLink>
        <NavLink to="/search-page">Search || </NavLink>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/search-page" element={<SearchPage/>}/>
        </Routes>
      </nav>
    </div>
  );
}

export default App;
