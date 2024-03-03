import PlanetPage from '../pages/PlanetsPage/PlanetPage';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import styles from './App.module.scss'
import FavoritePage from '../pages/FavoritPage/FavoritePage';
import HomePage from '../pages/HomePage/HomePage';
import PersonPage from '../pages/PersonPage';
import Favorite from '../components/Favorite';

function App() {

  return (
    
    <Router>
      <div>
      <div className={styles.nav_container}>
      
      <NavLink className={styles.nav_container} to='/'>Home</NavLink>
      <NavLink className={styles.nav_container} to='/planet/?page=1'>Planet</NavLink>
      
      <Favorite/>
     
      </div>
      
    <Routes>
      <Route path='/'  element={<HomePage HomePage={HomePage} />} />
      <Route path='/planet'  element={<PlanetPage PlanetPage={PlanetPage} />} />
      <Route path='/favorites'  element={<FavoritePage FavoritePage={FavoritePage} />} />
      <Route path='/planet/:id'  element={<PersonPage PersonPage={PersonPage} />} />
      
    </Routes>
    </div>
    </Router>
    
  )
}
export default App

