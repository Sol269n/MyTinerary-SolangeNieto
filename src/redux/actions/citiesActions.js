import { createAction } from "@reduxjs/toolkit";

export const load = createAction( "loadAgregarCities", (cities) => {
    return{
        payload: cities
    }
})

export const filterName = createAction( "filterName", (value) => {
    return{
        payload: value
    }
} )

