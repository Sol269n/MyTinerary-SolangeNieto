import { createAction } from "@reduxjs/toolkit"

const login = createAction ( "login", (data) => {
    return {
        payload: data
    }
})

export {
    login
}