import { useState } from 'react';
import s from './SearchBar.module.css'
import {  useDispatch } from "react-redux";
import * as actions from "../../redux/actions";

function SearchBar() {

   const [charachter,setCharacter]=useState('')

   const dispatch = useDispatch();
   
   const handlerChange=(event)=>{
      setCharacter(event.target.value)
   };

   const onClick = () => {
      console.log(charachter)
      //navigate('/detail/'+charachter)  
      if (charachter.length>1 ){
         dispatch(actions.searchCharacterDetail(charachter))
         setCharacter('')
      }
      else{
         alert ('debe escribir un id numerico de personaje')
      }

   }

   return (
      <div  className={s.cover}>
         <input  type='search' value={charachter}  onChange={handlerChange}/>
      <button onClick={onClick} >Agregar</button>
      </div>
   );
}

export default SearchBar;
