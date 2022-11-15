

const SectionHotelR = () => {


  return (
    <section className=" @lg:grid grid-rows-3 grid-flow-col gap-4 p-4 mb-8 @md:px-24">
      <div className="col-span-2 @lg:row-span-3  w-full">
        <img
          src={`https://via.placeholder.com/300x160`} alt='Logo carousel'
          className="w-full h-full" />
        <button type="button" className="slide-next" >
          {/* <img
                src="/assets/rigth.svg" 
                alt=""/> */}
        </button>
        <button type="button" className="slide-back">
          {/* <img
                src="/assets/left.svg" 
                alt=""/> */}
        </button>
      </div>
      <div className="img-hotel @md:m-0 col-span-2  @md:relative flex justify-center @md:justify-start">
      <img
          src={` https://www.hotelxcaret.com/assets/concentrador-hoteles/hxa/hotel-xcaret-arte.svg`} alt='Logo h-xcaret'
          className="w-16 h-24" />
     
      </div>
      <div className="row-span-2  col-span-2">
        <h2 className="text-center">HOTEL XCARET MÉXICO</h2><br></br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem erat volutpat.</p><br></br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat.</p><br></br>

        <div>
          <button className="btn" type="button">¡RESERVA AHORA!</button>
        </div>
      </div>
    </section>
  );
};

export default SectionHotelR;

