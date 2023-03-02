// import s from './Card.module.css'
// import {Link } from 'react-router-dom';

// function Card({id,name, species,gender,image,onClose}) {
//    return (
//       <div className={s.cardcontainer}>
//           <button className={s.button} onClick={onClose}>X</button>
//           <img src={image} alt="" /> 
//           <Link to={`/detail/${id}`} >
//           <h2 className={s.title1}>{name}</h2>
//             </Link>
         
//          <h2 className={s.title2}>{gender}</h2>
//          <h2 className={s.title2}>{species}</h2>
//       </div>
//    );
// }


// export default Card;

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
import React from "react";
 import s from './Card.module.css'
  import { Link } from 'react-router-dom'

const CharacterCard = ({ id, name, gender, image }) => {
    const  dispatch  = useDispatch();
    const onClick = () =>{
        dispatch(actions.closeCard(id));
    }

    return(
        <div className={s.cardcontainer}  >
            <button onClick={onClick} >X</button>
            <img src={image} alt={name} style={{ borderRadius: '9999999999rem' }} />

            <Link to={`/detail/${id}`} >
                <h2>{name}</h2>
            </Link>

            <h3>Gender: {gender}</h3>
            
        </div>
    )
}


export default CharacterCard;