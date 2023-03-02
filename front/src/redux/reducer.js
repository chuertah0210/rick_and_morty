import { GET_ALL_CHARACTERS, GET_CHARACTER_DETAIL, CLEAN_CHARACTER_DETAIL, GET_BACK,SEARCH_CHARACTER_DETAIL,CLOSE } from "./action-types";

const initialState = {
    characters: [],
    characterDetail: {},
    noReload: false
}


const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_CHARACTERS:
            return {
                ...state,
                characters: action.payload
            }

        case GET_CHARACTER_DETAIL:
            return {
                ...state,
                //characters: [...state.characters, action.payload],
                characterDetail: action.payload
            }
            case SEARCH_CHARACTER_DETAIL:
                const usuarioEncontrado = state.characters.find(charcter => charcter.id === action.payload.id);
                if (!usuarioEncontrado){
                return {
                    ...state,
                    characters: [...state.characters, action.payload],
                    //characterDetail: action.payload
                }
            }

        case CLEAN_CHARACTER_DETAIL: 
            return {
                ...state,
                characterDetail: {}
            }
            case GET_BACK: 
            return {
                ...state,
                noReload: true
            }

            case CLOSE: 
            const id = action.payload;
            const index = state.characters.findIndex(producto => producto.id === id);
            //console.log(id,index,state.characters[0].id)
            if (index >= 0) {
                const newArray = [...state.characters];
                newArray.splice(index, 1);
        
                return { ...state, characters: newArray };
              }
              return { ...state };

        default: 
            return {
                ...state
            }
    }
}


export default reducer;