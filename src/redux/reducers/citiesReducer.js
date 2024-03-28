import { createReducer } from "@reduxjs/toolkit";
import {filterName, load} from "../actions/citiesActions"

const initialState = {
    all: [],
    filtered: [],
    search: ""
}

//createReducer: Le paso un valor inicial y una funcion
const reducer = createReducer( initialState, ( builder ) => {
    //si despacho load, ejecuta la fn
    builder.addCase( load, ( state, action ) => { //fn recibe el estado como esta y lo que retorne action
        return { //retorno el nuevo estado
            ...state, //creo una copia
            all: action.payload, //agrego lo que me llega al "all"
            filtered: action.payload
        }
    } ).addCase( filterName, ( state, action ) => {
        const fnFilter = (citie) => citie.name.trim().toLowerCase().startsWith(action.payload.trim().toLowerCase())
        const aux = state.all.filter(fnFilter)
        return {
            ...state,
            filtered: aux,
            search: action.payload
        }
    })
} )   

export default reducer