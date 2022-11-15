 import { xcaretApi } from '../../api/xcaretApi';
import { setInfo, setLang  } from './langSlice';



export const getData = ( lang ) => {
    return async( dispatch, getState ) => {
         //dispatch( setLang(lang) );

         //const result = await xcaretApi.get();
         const   { data }  =  await xcaretApi.get();
         //let datos = await result.json();
         console.log(data);
         //dispatch( setInfo(result.data) );
          dispatch( setInfo({ info: data, lang: lang }) );
    }
}

//onst { data } =  await xcaretApi.get();

        