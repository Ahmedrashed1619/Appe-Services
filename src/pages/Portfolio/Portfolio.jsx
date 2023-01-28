import React, { useEffect , useContext } from 'react';
import { Link } from 'react-router-dom';
import { langContext } from '../../componants/Context/store';

import WOW from 'wowjs';
import $ from 'jquery';

import img1 from '../../images/Home/Image here.png';
import img2 from '../../images/Home/Image here (1).png';
import img3 from '../../images/Home/Image here (2).png';
import img4 from '../../images/Home/Image here (3).png';
import img5 from '../../images/Home/Image here (4).png';
import img6 from '../../images/Home/Image here (5).png';
import img7 from '../../images/Home/Image here (6).png';
import img8 from '../../images/Home/Image here (7).png';
import img9 from '../../images/Home/Title bg.png';
import img10 from '../../images/Home/Title bg (1).png';
import img11 from '../../images/Home/Title bg (2).png';



export default function Portfolio() {

    let { isEng } = useContext(langContext);


    useEffect(() => {
      $('.portfolio').addClass('active');
      return () => {
        $('.portfolio').removeClass('active');
      }
    }, [])
  

    useEffect(() => {
      $('html , body').animate({ scrollTop: 0 }, 200);
    }, []);

    
    useEffect(() => {
        new WOW.WOW().init();
    }, []);


    const portfolioImgs = [
        {
            img: img1,
            titleEn: 'Social Media',
            titleAr: 'وسائل التواصل الإجتماعي'
        },
        {
            img: img2,
            titleEn: 'SEO',
            titleAr: 'تحسين محركات البحث'
        },
        {
            img: img3,
            titleEn: 'Branding',
            titleAr: 'العلامـات التجاريـة'
        },
        {
            img: img4,
            titleEn: 'Marketing Strategy',
            titleAr: 'إستراتيجية التسويق'
        },
        {
            img: img5,
            titleEn: 'Web Design',
            titleAr: 'تصميـم الويـب'
        },
        {
            img: img6,
            titleEn: 'Clouding Storage',
            titleAr: 'سحابـة التخزيـن'
        },
        {
            img: img7,
            titleEn: 'Advanced Analytics',
            titleAr: 'تحليلات متقدمـة'
        },
        {
            img: img8,
            titleEn: 'Cyber Security',
            titleAr: 'الأمن الإلكتروني'
        },
        {
          img: img9,
          titleEn: 'Petown App',
          titleAr: 'Petown App'
        },
        {
          img: img10,
          titleEn: 'Rental Website',
          titleAr: 'Rental Website'
        },
        {
          img: img11,
          titleEn: 'Rentacar App',
          titleAr: 'Rentacar App'
        }
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
    };


    return (
        <>
            {/* top */}
            <header className="top-wave">
                <div className="container h-100 d-flex justify-content-center align-items-center text-center flex-column">
                    <h2 className='mb-3 text-white h1 wow fadeInDownBig text-capitalize' style={{fontWeight: '600'}} data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'Portfolio' : 'معرض الأعمــال'}</h2>
                    <p className="mb-0 position-relative wow fadeIn" style={{color: '#ddd' , fontWeight: '400' , width: '80%'}} data-wow-duration="1s" data-wow-delay="1s">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
                </div>
            </header>

            {/* Portfolio */}
            <section className="py-5" dir={isEng ? 'ltr' : 'rtl'}>
                <div className="container">

                    <ul className="nav nav-pills justify-content-center mb-5" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">{isEng ? 'All' : 'الكل'}</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-website-tab" data-bs-toggle="pill" data-bs-target="#pills-website" type="button" role="tab" aria-controls="pills-website" aria-selected="false">{isEng ? 'Websites' : 'مواقع إلكترونية'}</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-mobile-tab" data-bs-toggle="pill" data-bs-target="#pills-mobile" type="button" role="tab" aria-controls="pills-mobile" aria-selected="false">{isEng ? 'Mobile Apps' : 'تطبيقات هواتـف'}</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-logo-tab" data-bs-toggle="pill" data-bs-target="#pills-logo" type="button" role="tab" aria-controls="pills-logo" aria-selected="false">{isEng ? 'Logo' : 'شعــار'}</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-media-tab" data-bs-toggle="pill" data-bs-target="#pills-media" type="button" role="tab" aria-controls="pills-media" aria-selected="false">{isEng ? 'Social Media' : 'وسائـل التواصــل الإجتماعـي'}</button>
                        </li>
                    </ul>

                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" tabIndex="0">

                            <div className="row gy-4 d-flex justify-content-center justify-content-lg-start align-items-center">
                                {portfolioImgs.map((port , i) => (
                                    <Link key={i} to='../portfolio/1' className="col-lg-4 col-md-6 col-11">
                                      <div className={`port-item rounded-4 position-relative wow ${state[i]}`} data-wow-duration="1.5s" data-wow-delay={`${del[i]}`}>
                                        <img src={port.img} className='w-100 rounded-4' style={{height: '300px'}} alt="port" />
                                        <div className="layer-title rounded-4 position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-end" style={{backgroundColor: '#00000075'}}>
                                          <h4 className='text-white fw-bold mb-4'>{isEng ? port.titleEn : port.titleAr}</h4>
                                        </div>
                                        <div className="layer-caption rounded-4 position-absolute d-flex justify-content-center align-items-center" style={{backgroundColor: '#00000095'}}>
                                          <p className='text-white mb-4 p-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic soluta quibusdam, neque maxime fuga dolorum fugit, sapiente enim harum perferendis aspernatur esse molestias veritatis! Dolorum voluptatum error omnis, deserunt minus sit in harum veritatis atque tempore iure expedita sint molestiae.</p>
                                        </div>
                                      </div>
                                    </Link>
                                ))}
                            </div>

                        </div>
                        <div className="tab-pane fade" id="pills-website" role="tabpanel" aria-labelledby="pills-website-tab" tabIndex="0">
                            
                            <div className="row gy-4 d-flex justify-content-center justify-content-lg-start align-items-center">
                                {portfolioImgs.slice(0,3).map((port , i) => (
                                    <Link key={i} to='../portfolio/1' className="col-lg-4 col-md-6 col-11">
                                      <div className={`port-item rounded-4 position-relative wow ${state[i]}`} data-wow-duration="1.5s" data-wow-delay={`${del[i]}`}>
                                        <img src={port.img} className='w-100 rounded-4' style={{height: '300px'}} alt="port" />
                                        <div className="layer-title rounded-4 position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-end" style={{backgroundColor: '#00000075'}}>
                                          <h4 className='text-white fw-bold mb-4'>{isEng ? port.titleEn : port.titleAr}</h4>
                                        </div>
                                        <div className="layer-caption rounded-4 position-absolute d-flex justify-content-center align-items-center" style={{backgroundColor: '#00000095'}}>
                                          <p className='text-white mb-4 p-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic soluta quibusdam, neque maxime fuga dolorum fugit, sapiente enim harum perferendis aspernatur esse molestias veritatis! Dolorum voluptatum error omnis, deserunt minus sit in harum veritatis atque tempore iure expedita sint molestiae.</p>
                                        </div>
                                      </div>
                                    </Link>
                                ))}
                            </div>

                        </div>
                        <div className="tab-pane fade" id="pills-mobile" role="tabpanel" aria-labelledby="pills-mobile-tab" tabIndex="0">

                            <div className="row gy-4 d-flex justify-content-center justify-content-lg-start align-items-center">
                                {portfolioImgs.slice(3,6).map((port , i) => (
                                    <Link key={i} to='../portfolio/1' className="col-lg-4 col-md-6 col-11">
                                      <div className={`port-item rounded-4 position-relative wow ${state[i]}`} data-wow-duration="1.5s" data-wow-delay={`${del[i]}`}>
                                        <img src={port.img} className='w-100 rounded-4' style={{height: '300px'}} alt="port" />
                                        <div className="layer-title rounded-4 position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-end" style={{backgroundColor: '#00000075'}}>
                                          <h4 className='text-white fw-bold mb-4'>{isEng ? port.titleEn : port.titleAr}</h4>
                                        </div>
                                        <div className="layer-caption rounded-4 position-absolute d-flex justify-content-center align-items-center" style={{backgroundColor: '#00000095'}}>
                                          <p className='text-white mb-4 p-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic soluta quibusdam, neque maxime fuga dolorum fugit, sapiente enim harum perferendis aspernatur esse molestias veritatis! Dolorum voluptatum error omnis, deserunt minus sit in harum veritatis atque tempore iure expedita sint molestiae.</p>
                                        </div>
                                      </div>
                                    </Link>
                                ))}
                            </div>

                        </div>
                        <div className="tab-pane fade" id="pills-logo" role="tabpanel" aria-labelledby="pills-logo-tab" tabIndex="0">

                            <div className="row gy-4 d-flex justify-content-center justify-content-lg-start align-items-center">
                                {portfolioImgs.slice(6,9).map((port , i) => (
                                    <Link key={i} to='../portfolio/1' className="col-lg-4 col-md-6 col-11">
                                      <div className={`port-item rounded-4 position-relative wow ${state[i]}`} data-wow-duration="1.5s" data-wow-delay={`${del[i]}`}>
                                        <img src={port.img} className='w-100 rounded-4' style={{height: '300px'}} alt="port" />
                                        <div className="layer-title rounded-4 position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-end" style={{backgroundColor: '#00000075'}}>
                                          <h4 className='text-white fw-bold mb-4'>{isEng ? port.titleEn : port.titleAr}</h4>
                                        </div>
                                        <div className="layer-caption rounded-4 position-absolute d-flex justify-content-center align-items-center" style={{backgroundColor: '#00000095'}}>
                                          <p className='text-white mb-4 p-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic soluta quibusdam, neque maxime fuga dolorum fugit, sapiente enim harum perferendis aspernatur esse molestias veritatis! Dolorum voluptatum error omnis, deserunt minus sit in harum veritatis atque tempore iure expedita sint molestiae.</p>
                                        </div>
                                      </div>
                                    </Link>
                                ))}
                            </div>

                        </div>
                        <div className="tab-pane fade" id="pills-media" role="tabpanel" aria-labelledby="pills-media-tab" tabIndex="0">

                            <div className="row gy-4 d-flex justify-content-center justify-content-lg-start align-items-center">
                                {portfolioImgs.slice(9,12).map((port , i) => (
                                    <Link key={i} to='../portfolio/1' className="col-lg-4 col-md-6 col-11">
                                      <div className={`port-item rounded-4 position-relative wow ${state[i]}`} data-wow-duration="1.5s" data-wow-delay={`${del[i]}`}>
                                        <img src={port.img} className='w-100 rounded-4' style={{height: '300px'}} alt="port" />
                                        <div className="layer-title rounded-4 position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-end" style={{backgroundColor: '#00000075'}}>
                                          <h4 className='text-white fw-bold mb-4'>{isEng ? port.titleEn : port.titleAr}</h4>
                                        </div>
                                        <div className="layer-caption rounded-4 position-absolute d-flex justify-content-center align-items-center" style={{backgroundColor: '#00000095'}}>
                                          <p className='text-white mb-4 p-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic soluta quibusdam, neque maxime fuga dolorum fugit, sapiente enim harum perferendis aspernatur esse molestias veritatis! Dolorum voluptatum error omnis, deserunt minus sit in harum veritatis atque tempore iure expedita sint molestiae.</p>
                                        </div>
                                      </div>
                                    </Link>
                                ))}
                            </div>

                        </div>
                    </div>
                  
                </div>
            </section>
        </>
    )
}

