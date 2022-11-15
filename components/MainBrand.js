
const MainBrand = () => {
  //container flex flex-row justify-between items-center mx-auto px-2 pt-3
  return (
        <section className="bg-gray pt-20 px-6 pb-6 @sm:px-8 @xl:px-52 grid grid-cols-4 gap-2">
          <h1 className="text-center @md:text-left col-start-1 col-end-5 pb-4">Viaja y Vuela</h1>
          <h1 className="text-center @md:text-left pt-4 col-start-1 col-end-5 @md:col-start-1 @md:col-span-1 ">15%</h1>
          <div className="col-start-1 col-end-5 @md:col-end-5 @md:col-span-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem.  Aliquam erat volutpat. </p>
           
          </div>
        </section>
  );
};

export default MainBrand;



