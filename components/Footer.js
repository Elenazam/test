const Footer = () => {
  return (
    <footer className="flex flex-wrap ">
      <div className="bg-gray-light px-14 py-8 @md:px-14 w-full text-xs">

        <p>10 % de descuento en tarifas vigentes de Hotel Xcaret Arte. </p>

        <p>Los descuentos de compra anticipada pueden variar dependiendo de la fecha de reserva y la fecha de estadía. </p>

        <p>Periodo para reservar: Del 02 al 16 de mayo de 2022. Periodo para viajar: del 12 de julio al 16 de agosto del 2022. </p>

        <p>Sujeto a disponibilidad. </p>

        <p>Políticas de cancelación: </p>

        <p>Cambios y cancelaciones de acuerdo a políticas establecidas antes de las 15:00 hrs hora local del día de llegada.</p>

        <p>Penalidad: 100% de la estancia  </p>

        <p>Restricciones:  </p>

        <p>No aplica con otras promociones.  </p>

        <p>Tarifa sujeta a cambios sin previo aviso. </p>

      </div>
      <div className="text-sm w-full bg-gray-dark p-6 @md:px-12">
   
      <div className="flex flex-col text-sm w-full bg-gray-dark text-slate-200 ">
        <div className="contact-email">
          <p >ATENCIÓN A CLIENTES</p>
          <p>reservaciones@hotelxcaret.com</p>
        </div>
        <div className="contact-numbers">
          <ul>
            <li>
              <p>México</p>
              <p>998-883-3143</p>
            </li>
            <li>
              <p>USA-CAN</p>
              <p>1-855-326-0682</p>
            </li>
            <li>

            </li>
          </ul>
        </div>
        </div>
        
    </div>
      
      <div className="w-full py-2 bg-black text-slate-100 text-xs text-center">
        <p>©Copyright Experiencias Xcaret Hotel S.A.P.I. de C.V</p>
      </div>
    </footer>
  );
};

export default Footer;