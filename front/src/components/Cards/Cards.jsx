// import Card from '../Card/Card';
// import s from './Cards.module.css'

// export default function Cards(props) {
//    const { characters } = props;

//    return( 
//    <div className={s.cardcontainer}>
//       {
//          characters.map(({id,name,species,gender,image})=>{
//             return <Card 
//             name={name}
//             species={species}
//             gender={gender}
//             image={image}
//             id={id}
//             onClose={() => props.onClose(id)}
//             />
//          })
//       }
//    </div>
//    )
// }



import s from './Cards.module.css'
import React from "react";
import { connect } from "react-redux";
import { getAllCharacters } from "../../redux/actions";
import Card from "../Card/Card";

class Characters extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        if (this.props.noReload===false){
        this.props.getAllCharacters();
    }
    }

    render(){
        return(
            <div className={s.cardcontainer}>
                {
                    this.props.characters?.map(character => {
                        return <Card
                            key={character.id}
                            id={character.id}
                            name={character.name}
                            image={character.image}
                            gender={character.gender}
                        />
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        characters: state.characters,
        noReload: state.noReload
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllCharacters: () => dispatch(getAllCharacters())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Characters);

