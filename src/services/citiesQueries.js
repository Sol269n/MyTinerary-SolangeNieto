import axios from "axios"

export const getCities = async () => {
    try {
        const respuesta = await axios("http://localhost:4000/api/cities")
        // console.log("ejecutando")
        return respuesta.data.data
    } catch (error) {
        return [] 
    }
}

export const getCitieId = async ( _id ) => {
    try {
        const respuesta = await axios("http://localhost:4000/api/cities/" + _id ) 
        return respuesta.data
    } catch (error) {
        return {}
    }
}