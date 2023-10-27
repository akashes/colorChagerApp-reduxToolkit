import { configureStore } from "@reduxjs/toolkit";
import backgroundSice from './slice'

const store = configureStore({
    reducer : {
        background:backgroundSice

    }
})

export default store