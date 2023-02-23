// import { useState, useEffect } from "react";
// import {useParams} from  "react-router-dom"
// import { Link } from 'react-router-dom'

// const Detail = () => {
//     const {detailId} = useParams()

//     const [character, setCharacter] = useState({});

//     console.log(`https://rickandmortyapi.com/api/character/${detailId}`);


//     useEffect(() => {
//         fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
//           .then((response) => response.json())
//           .then((char) => {
//             if (char.name) {
//               setCharacter(char);
//             } else {
//               window.alert("No hay personajes con ese ID");
//             }
//           })
//           .catch((err) => {
//             window.alert("No hay personajes con ese ID");
//           });
//         return setCharacter({});
//       }, [detailId]);


//     return (
//         <div>
//             <button>
//                 <Link to='/home'>back</Link>
//             </button>
//             <h1>{character?.name}</h1>
//             <p>{character?.status}</p>
//             <p>{character?.species}</p>
//             <p>{character?.gender}</p>
//             <img src={character?.image} alt={character?.name} />
//         </div>
//     )
// }

// export default Detail;

import { useParams } from "react-router-dom";
// import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { getCharacterDetail, cleanCharacterDetail } from "../../redux/actions";
import * as actions from "../../redux/actions";
import React from "react";

const CharacterDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { image, name, species, origin, gender, status } = useSelector(state => state.characterDetail);

    React.useEffect(() => {
        dispatch(actions.getCharacterDetail(id))

        return () => dispatch(actions.cleanCharacterDetail())
    }, [])

    return(
        <div>
            <img src={image} alt={name} />
            <h1>{name}</h1>
            <p>Specie: {species}</p>
            <p>Gender: {gender}</p>
            <p>Status: {status}</p>
            <p>Origin: {origin?.name}</p>
        </div>
    )
}

export default CharacterDetail;