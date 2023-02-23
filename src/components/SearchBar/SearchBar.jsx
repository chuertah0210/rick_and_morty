import { useState } from 'react';
import s from './SearchBar.module.css'

function SearchBar({onSearch}) {
   const [charachter,setCharacter]=useState('')

   const handlerChange=(event)=>{
      setCharacter(event.target.value)
   };

   return (
      <div  className={s.cover}>
         <input  type='search' value={charachter}  onChange={handlerChange}/>
      <button onClick={()=>onSearch(charachter)} >Agregar</button>
      </div>
   );
}

export default SearchBar;