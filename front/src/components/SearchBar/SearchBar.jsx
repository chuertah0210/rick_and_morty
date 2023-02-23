import { useState } from 'react';
import s from './SearchBar.module.css'
//import {useNavigate } from 'react-router-dom'
import {  useDispatch } from "react-redux";
import * as actions from "../../redux/actions";

function SearchBar() {
   const [charachter,setCharacter]=useState('')
   //const navigate = useNavigate();
   const dispatch = useDispatch();
   const handlerChange=(event)=>{
      setCharacter(event.target.value)
   };

   const onClick = () => {
      console.log(charachter)
      //navigate('/detail/'+charachter)  
      charachter.length>1 || typeof charachter !== 'number'
      ?dispatch(actions.getCharacterDetail(charachter))
      : alert ('debe escribir un id numerico de personaje')
   }

   return (
      <div  className={s.cover}>
         <input  type='search' value={charachter}  onChange={handlerChange}/>
      <button onClick={onClick} >Agregar</button>
      </div>
   );
}

export default SearchBar;
