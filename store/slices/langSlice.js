import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    lang: "es",
    info: [],
}

// create a slice 
export const langSlice = createSlice({
    name: "info",
    initialState,
    reducers: {
       
        setInfo: (state, action) => {
            state.info = action.payload.info;
            state.lang = action.payload.lang;
        },
        setLang: (state, action) => {
            // if (action.payload === "es"){
            //     state.lang = 'en';
            // }
                
            // else if (action.payload === "en"){
            //     state.lang = 'es';
            // }
            state.lang = action.payload;
                
        },
        

    }
})

export const { setInfo, setLang } = langSlice.actions;