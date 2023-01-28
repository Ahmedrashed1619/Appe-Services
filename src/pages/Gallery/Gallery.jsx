import React, { useEffect , useContext } from 'react';
// import { Link } from 'react-router-dom';
import { langContext } from '../../componants/Context/store';

import WOW from 'wowjs';
import $ from 'jquery';

import img1 from '../../images/Gallery/Image here (12).png';
import img2 from '../../images/Gallery/Image here (13).png';
import img3 from '../../images/Gallery/Image here (14).png';
import img4 from '../../images/Gallery/Image here (15).png';
import img5 from '../../images/Gallery/Image here (16).png';
import img6 from '../../images/Gallery/Image here (17).png';
import img7 from '../../images/Gallery/Image here (18).png';
import img8 from '../../images/Gallery/Image here (19).png';
import img9 from '../../images/Gallery/Image here (20).png';
import img10 from '../../images/Gallery/Image here (21).png';
import img11 from '../../images/Gallery/Image here (22).png';
import img12 from '../../images/Gallery/Image here (23).png';
import img13 from '../../images/Gallery/Image here (24).png';
import img14 from '../../images/Gallery/Image here (25).png';
import img15 from '../../images/Gallery/Image here (26).png';
import img16 from '../../images/Gallery/Image here (27).png';
import img17 from '../../images/Gallery/Image here (28).png';
import img18 from '../../images/Gallery/Image here (29).png';
import img19 from '../../images/Gallery/Image here (30).png';
import img20 from '../../images/Gallery/Image here (31).png';
import img21 from '../../images/Gallery/Image here (32).png';
import img22 from '../../images/Gallery/Image here (33).png';
import img23 from '../../images/Gallery/Image here (34).png';
import img24 from '../../images/Gallery/Image here (35).png';
import img25 from '../../images/Gallery/Image here (36).png';
import img26 from '../../images/Gallery/Image here (37).png';
import img27 from '../../images/Gallery/Image here (38).png';
import img28 from '../../images/Gallery/Image here (39).png';



export default function Gallery() {

    let { isEng } = useContext(langContext);


    useEffect(() => {
      $('.gallery').addClass('active');
      return () => {
        $('.gallery').removeClass('active');
      }
    }, [])
  

    useEffect(() => {
      $('html , body').animate({ scrollTop: 0 }, 200);
    }, []);

    
    useEffect(() => {
        new WOW.WOW().init();
    }, []);


    const galleryImgs = [
        {img: img1},
        {img: img2},
        {img: img3},
        {img: img4},
        {img: img5},
        {img: img6},
        {img: img7},
        {img: img8},
        {img: img9},
        {img: img10},
        {img: img11},
        {img: img12},
        {img: img13},
        {img: img14},
        {img: img15},
        {img: img16},
        {img: img17},
        {img: img18},
        {img: img19},
        {img: img20},
        {img: img21},
        {img: img22},
        {img: img23},
        {img: img24},
        {img: img25},
        {img: img26},
        {img: img27},
        {img: img28}
    ]


    let state = {
        0: 'fadeInLeft',
        1: 'fadeInUp',
        2: 'fadeInDown',
        3: 'fadeInRight',
        4: 'fadeInLeft',
        5: 'fadeInUp',
        6: 'fadeInDown',
        7: 'fadeInRight',
        8: 'fadeInLeft',
        9: 'fadeInUp',
        10: 'fadeInDown',
        11: 'fadeInRight',
        12: 'fadeInLeft',
        13: 'fadeInUp',
        14: 'fadeInDown',
        15: 'fadeInRight',
        16: 'fadeInLeft',
        17: 'fadeInUp',
        18: 'fadeInDown',
        19: 'fadeInRight'
    };
    
    
    let del = {
      0: '0.4',
      1: '0.8',
      2: '1.2',
      3: '1.6',
      4: '2',
      5: '2.4',
      6: '2.8',
      7: '3.2',
      8: '3.6',
      9: '4',
      10: '4.4',
      11: '4.8',
      12: '5.2',
      13: '5.6',
      14: '6',
      15: '6.4',
      16: '6.8',
      17: '7.2',
      18: '7.6',
      19: '8',
    };


    return (
        <>
            {/* top */}
            <header className="top-wave">
                <div className="container h-100 d-flex justify-content-center align-items-center text-center flex-column">
                    <h2 className='mb-3 text-white h1 wow fadeInDownBig text-capitalize' style={{fontWeight: '600'}} data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'Appe Gallery' : 'Appe معـرض'}</h2>
                    <p className="mb-0 position-relative wow fadeIn" style={{color: '#ddd' , fontWeight: '400' , width: '80%'}} data-wow-duration="1s" data-wow-delay="1s">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
                </div>
            </header>

            {/* Gallery */}
            <section className="py-5" dir={isEng ? 'ltr' : 'rtl'}>
                <div className="container">

                    <ul className="nav nav-pills justify-content-center mb-5" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">{isEng ? 'All' : 'الكل'}</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-images-tab" data-bs-toggle="pill" data-bs-target="#pills-images" type="button" role="tab" aria-controls="pills-images" aria-selected="false">{isEng ? 'Images' : 'الصــور'}</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-videos-tab" data-bs-toggle="pill" data-bs-target="#pills-videos" type="button" role="tab" aria-controls="pills-videos" aria-selected="false">{isEng ? 'Videos' : 'الفيديوهـات'}</button>
                        </li>
                    </ul>

                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" tabIndex="0">

                            <div className="row gy-4 d-flex justify-content-center justify-content-lg-start align-items-center">
                                {galleryImgs.map((port , i) => (
                                    <div key={i} className="col-lg-4 col-md-6 col-11">
                                      <div className={`gallery-item rounded-4 position-relative wow ${state[i]}`} data-wow-duration="1.5s" data-wow-delay={`${del[i]}`}>
                                        <img src={port.img} className='w-100 rounded-4' style={{height: '300px'}} alt="gallery" />
                                      </div>
                                    </div>
                                ))}
                            </div>

                        </div>

                        <div className="tab-pane fade" id="pills-images" role="tabpanel" aria-labelledby="pills-images-tab" tabIndex="0">
                            
                            <div className="row gy-4 d-flex justify-content-center justify-content-lg-start align-items-center">
                                {galleryImgs.slice(0,16).map((port , i) => (
                                    <div key={i} className="col-lg-4 col-md-6 col-11">
                                      <div className={`gallery-item rounded-4 position-relative wow ${state[i]}`} data-wow-duration="1.5s" data-wow-delay={`${del[i]}`}>
                                        <img src={port.img} className='w-100 rounded-4' style={{height: '300px'}} alt="gallery" />
                                      </div>
                                    </div>
                                ))}
                            </div>

                        </div>

                        <div className="tab-pane fade" id="pills-videos" role="tabpanel" aria-labelledby="pills-videos-tab" tabIndex="0">

                            <div className="row gy-4 d-flex justify-content-center justify-content-lg-start align-items-center">
                                {galleryImgs.slice(16,30).map((port , i) => (
                                    <div key={i} className="col-lg-4 col-md-6 col-11">
                                      <div className={`gallery-item rounded-4 position-relative wow ${state[i]}`} data-wow-duration="1.5s" data-wow-delay={`${del[i]}`}>
                                        <img src={port.img} className='w-100 rounded-4' style={{height: '300px'}} alt="gallery" />
                                      </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                  
                </div>
            </section>
        </>
    )
}
