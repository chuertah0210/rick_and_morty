import { useState,useEffect } from 'react'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import {Routes, Route,useLocation,useNavigate } from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'
import Nav from './components/Nav/Nav'

function App () {
  const [characters, setCharacters]=useState([])
  const location=useLocation();

  const [access, setAccess] = useState(false);
  const username = 'ejemplo@gmail.com';
const password = '1password';
const navigate = useNavigate();

function login(userData) {
  if (userData.password === password && userData.username === username) {
     setAccess(true);
     navigate('/home');
  }
}

function logout() {
     setAccess(false);
     navigate('/home');
}



  const onClose =(id)=>{
    setCharacters(
      characters.filter(character => character.id !==id)
    )
  };

  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  return (
    <div className='App' style={{ padding: '25px' }}>
      
      { location.pathname!=='/' &&   
      <Nav  logout={logout}/>   
      }
      <Routes>
        <Route path='' element ={<Form login={login}/>}/>
        <Route path ='home' element ={<Cards characters={characters} onClose={onClose}/>} />
        <Route path='about' element ={<About/>}/>
        <Route path='/detail/:id' element ={<Detail/>}/>
        </Routes>
   
    </div>
  )
}

export default App
