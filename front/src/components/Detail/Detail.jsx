// import { useState, useEffect } from "react";
// import {useParams} from  "react-router-dom"
// import { Link } from 'react-router-dom'
// import s from './Detail.module.css'

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
//         <div className={s.cardcontainer}>
//             <img src={character?.image} alt={character?.name}  style={{ borderRadius: '9999999999rem' }} />
//             <h2>{character?.name}</h2>
//             <h3>{character?.status}</h3>
//             <h3>{character?.species}</h3>
//             <h3>{character?.gender}</h3>
//             <button>
//                 <Link to='/home'>back</Link>
//             </button>
//         </div>
//     )
// }

// export default Detail;

// // import { useParams } from "react-router-dom";
// // // import { useEffect } from "react";
// // import { useSelector, useDispatch } from "react-redux";
// // // import { getCharacterDetail, cleanCharacterDetail } from "../../redux/actions";
// // import * as actions from "../../redux/actions";
// // import React from "react";

// // const CharacterDetail = () => {
// //     const { id } = useParams();
// //     const dispatch = useDispatch();
// //     const { image, name, species, origin, gender, status } = useSelector(state => state.characterDetail);

// //     React.useEffect(() => {
// //         dispatch(actions.getCharacterDetail(id))

// //         return () => dispatch(actions.cleanCharacterDetail())
// //     }, [])

// //     return(
// //         <div>
// //             <img src={image} alt={name} />
// //             <h1>{name}</h1>
// //             <p>Specie: {species}</p>
// //             <p>Gender: {gender}</p>
// //             <p>Status: {status}</p>
// //             <p>Origin: {origin?.name}</p>
// //         </div>
// //     )
// // }

// // export default CharacterDetail;


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import s from './Detail.module.css'

const CardDetails = () => {
  let { id } = useParams();

  let [fetchedData, updateFetchedData] = useState([]);
  let { name, location, origin, gender, image, status, species } = fetchedData;

  let api = `http://localhost:3001/detail/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div >
      <div className={s.cardcontainer}>
        <h1 >{name}</h1>

        <img src={image} alt="" />
        <div >
            <span >Gender :{gender} </span><br/>
            <span >Location: {location?.name}</span><br/>
            <span >Origin: {origin?.name}</span><br/>
            <span >Species: {species}</span><br/><br/>

            <button>
                 <Link to='/home'>back</Link>
             </button>
        </div>
      </div>
            
    </div>
  );
};

export default CardDetails;