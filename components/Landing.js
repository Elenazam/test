//import Navbar from "./Navbar";
import MainBrand from "./MainBrand";
import SectionHotelR from './SectionHotelR';
import Footer from './Footer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../store/slices/thunks';

const Landing = () => {
    // const dispatch = useDispatch();
    
    // //const resp = useSelector( state => state.lang.info );
  
    // useEffect(() => {
    //   dispatch( getData() );    
    // }, [])
    return (
       <>
            <MainBrand></MainBrand>
            <SectionHotelR></SectionHotelR>
            <SectionHotelR></SectionHotelR>
            <SectionHotelR></SectionHotelR>
            <Footer></Footer>
     
       </>
    );
  };
  
  export default Landing;
  