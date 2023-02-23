import SearchBar from '../SearchBar/SearchBar.jsx'
import { Link } from 'react-router-dom'
import s from './Nav.module.css'

const Nav =({logout})=>{
    return(
        <div className={s.navMenu}>
            <Link to='/about'>About</Link>
            <Link to='/home'>Home</Link>
             <button onClick={logout} >Logout</button>
             <SearchBar /> 
        </div>
    )
}

export default Nav;