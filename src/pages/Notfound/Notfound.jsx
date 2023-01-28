import React, { useEffect } from 'react';
// import { useContext } from 'react';
// import { langContext } from '../../componants/Context/store';
import WOW from 'wowjs';
import $ from 'jquery';
import img from '../../images/Notfound/404 Error-cuate 1.png';



export default function Terms() {


  // let { isEng } = useContext(langContext);

  useEffect(() => {
    $('html , body').animate({ scrollTop: 0 }, 200);
  }, []);

  useEffect(() => {
    new WOW.WOW().init();
  }, []);


  return (
    <>
      {/* top */}
      <header className="mt-5">
          <div className="container d-flex justify-content-center align-items-center text-center">
            <div className="w-75">
              <img src={img} className='w-75 wow fadeIn' data-wow-duration='1.5s' alt="notfound" />
            </div>
          </div>
      </header>
    </>
  )
}



