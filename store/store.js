
// import { configureStore } from '@reduxjs/toolkit';
import {langSlice} from './slices/langSlice';


import { configureStore } from '@reduxjs/toolkit'



 // config the store 
const store= configureStore({
   reducer: {
      info: langSlice.reducer
   }
})


// export default the store 
export default store


