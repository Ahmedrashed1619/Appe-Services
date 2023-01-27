import React, { useContext , useEffect } from 'react';
import { langContext } from '../../componants/Context/store';
import author from '../../images/Home/Ellipse 7.png';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import WOW from 'wowjs';
// import $ from 'jquery';

export default function Location() {


    let { isEng } = useContext(langContext);

    useEffect(() => {
        new WOW.WOW().init();
    }, []);



  return (
    <div className="col-12">
        <div className="img-location row d-flex justify-content-center align-items-center">
            <div className="col-lg-6 col-md-8 col-10">
                <div className="slide shadow p-5 rounded-4 bg-white d-flex justify-content-center flex-column wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.5s">
                    <p className='mb-3' style={{fontWeight: '600'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas quisquam sapiente dolores illum minima fugit consequatur, cum veniam quam magnam error aperiam? Illo, doloremque earum!</p>
                    <div className="author d-flex align-items-center">
                    <img src={author} alt="author" className={isEng ? 'me-3' : 'ms-3'} />
                    <h6 className='mb-0 main-color fw-bold' style={{fontWeight: '600'}}>Mr.Hossam Hamdy</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
