import Link from "next/link";
import NavItem from "./NavItem";
import { getData } from '../store/slices/thunks';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const dispatch = useDispatch();
  const resp = useSelector( state => state.lang.info );
  const lang = useSelector( state => state.lang.lang );
  if (lang === 'es')
  console.log(resp.es);
  else if(lang === 'en')
  console.log('en');

  //console.log(resp[lang].navbar.menu.lang.title);
 
  

  return (
    <nav className="bg-white w-full flex fixed z-1 flex-nowrap items-center justify-between p-3 @lg:justify-between @lg:bg-gray-light">
    <div className="logo">
    <img 
        src={`https://www.hotelxcaret.com/assets/logos/concentrador-hoteles/hoteles-logos.svg`} alt='Logo xcaret' className="m-auto p-2"/> 
  </div>
    <div className="flex-1">
  <ul className="flex flex-row justify-end items-center">
    <li className="px-6 text-xs">CONTACTO</li>
    
    {/* <li className="px-6 text-xs"><a className="btn-lang" onClick={ () => dispatch( getData(lang) ) } >{resp[lang].navbar.menu.lang.title}</a></li>  */}
    <li>
    <NavItem className="space-x-2.5"></NavItem>

    </li>
  </ul>
    </div>

</nav>
   
  );
};




export default Navbar;


