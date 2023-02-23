import SearchBar from '../SearchBar/SearchBar.jsx'
import { Link } from 'react-router-dom'
import s from './Nav.module.css'

const Nav =({onSearch,logout})=>{
    return(
        <div className={s.navMenu}>
            <Link to='/about'>About</Link>
            <Link to='/home'>Home</Link>
             {/* <SearchBar onSearch={onSearch}/> */}
             <button onClick={logout} >Logout</button>
        </div>
    )
}

export default Nav;