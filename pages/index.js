
import Landing from '../components/Landing';
import NavItem from "../components//NavItem";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../store/slices/thunks';
import { setLang } from '../store/slices/langSlice';


const Home= () => {

 
 
  const dispatch = useDispatch();
  const { info, lang } = useSelector( state => state.info );

   console.log(lang);
   console.log(info);
    // //const resp = useSelector( state => state.lang.info );
  
    useEffect(() => {
      dispatch( getData(lang) );    
    }, [])

  return ( 
     <> 
    <div className="@container/main">
    <nav className="bg-white w-full flex fixed z-1 flex-nowrap items-center justify-between p-3 @lg:justify-between @lg:bg-gray-light">
    <div className="logo">
    <img 
        src={`https://www.hotelxcaret.com/assets/logos/concentrador-hoteles/hoteles-logos.svg`} alt='Logo xcaret' className="m-auto p-2"/> 
  </div>
    <div className="flex-1">
  <ul className="flex flex-row justify-end items-center">
    <li className="px-6 text-xs">CONTACTO</li>
    
    {/* <li className="px-6 text-xs"><a className="btn-lang" onClick={ () => dispatch( setLang(lang) ) } >{info[lang].navbar.menu.lang.title}</a></li>  */}
    <li className="px-6 text-xs"><a className="btn-lang" onClick={ () => dispatch( getData(lang) ) } >EN</a></li> 
    <li>
    <NavItem className="space-x-2.5"></NavItem>

    </li>
  </ul>
    </div>
  </nav>
   
    <Landing></Landing>
    </div>
    </>
    
  )
}

export default  Home





