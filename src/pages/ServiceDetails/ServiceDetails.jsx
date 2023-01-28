import React, { useEffect , useContext } from 'react';
import { langContext } from '../../componants/Context/store';

import WOW from 'wowjs';
import $ from 'jquery';

import img from '../../images/Services/Vector (1).png';



export default function ServiceDetails() {

    let { isEng } = useContext(langContext);


    useEffect(() => {
      $('.services').addClass('active');
      return () => {
        $('.services').removeClass('active');
      }
    }, [])
  

    useEffect(() => {
      $('html , body').animate({ scrollTop: 0 }, 200);
    }, []);

    
    useEffect(() => {
        new WOW.WOW().init();
    }, []);


    return (
        <>
            {/* top */}
            <header className="top-wave">
                <div className="container h-100 d-flex justify-content-center align-items-center text-center flex-column">
                    <h2 className='mb-3 text-white h1 wow fadeInDownBig text-capitalize' style={{fontWeight: '600'}} data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'Service Name' : 'أســم الخدمــة'}</h2>
                    <p className="mb-0 position-relative wow fadeIn" style={{color: '#ddd' , fontWeight: '400' , width: '80%'}} data-wow-duration="1s" data-wow-delay="1s">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
                </div>
            </header>

            {/* Services */}
            <section className="py-5" dir={isEng ? 'ltr' : 'rtl'}>
                <div className="container">

                    <div className="row gy-4 gx-0 d-flex justify-content-center align-items-center mb-5">
                      <div className="col-lg-7 col-11">
                        <div className="caption-service-details wow fadeInLeft" data-wow-duration="1.5s">
                          <h2 className="text-black fw-bold mb-3 wow fadeInDownBig text-capitalize" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'Website Design' : 'تصميم الموقع'}</h2>
                          <p className="mb-0 wow fadeIn" style={{color: '#656565' , fontWeight: '400' , width: '90%'}} data-wow-duration="1s" data-wow-delay="1s">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, quo perferendis voluptatibus id sit commodi laborum corporis placeat, voluptatum eum ab iste autem et, vel rerum accusantium perspiciatis ipsam? Culpa accusamus odit fugit natus temporibus harum mollitia omnis, esse explicabo itaque perferendis quis nesciunt iusto recusandae porro! Cupiditate nam fugit similique doloremque assumenda, aliquid sequi libero laboriosam facilis aut aperiam corporis consequatur, optio officiis aspernatur adipisci quasi ipsum explicabo dicta esse minima sapiente commodi! Atque perspiciatis officiis eius consequatur dignissimos magni illo maiores fuga beatae, labore rem veritatis nesciunt harum. Iusto doloribus debitis asperiores sequi non ipsum facilis temporibus obcaecati.</p>
                        </div>
                      </div>
                      <div className="col-lg-5 col-10">
                        <div className="img-details text-center wow fadeInRight" data-wow-duration="1.5s">
                          <img src={img} alt="details" className='w-100' />
                        </div>
                      </div>
                    </div>

                    <div className="row gy-4 gx-0 d-flex justify-content-center align-items-center mb-4">
                      <div className="col-lg-7 col-11">
                        <div className="caption-service-details wow fadeInLeft" data-wow-duration="1.5s">
                          <h2 className="text-black fw-bold mb-3 wow fadeInDownBig text-capitalize" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'Our Strong Points' : 'نقــاط قوتنــا'}</h2>
                          <p className="mb-0 wow fadeIn" style={{color: '#656565' , fontWeight: '400' , width: '90%'}} data-wow-duration="1s" data-wow-delay="1s">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, quo perferendis voluptatibus id sit commodi laborum corporis placeat, voluptatum eum ab iste autem et, vel rerum accusantium perspiciatis ipsam? Culpa accusamus odit fugit natus temporibus harum mollitia omnis, esse explicabo itaque perferendis quis nesciunt iusto recusandae porro! Cupiditate nam fugit similique doloremque assumenda, aliquid sequi libero laboriosam facilis aut aperiam corporis consequatur, optio officiis aspernatur adipisci quasi ipsum explicabo dicta esse minima sapiente commodi! Atque perspiciatis officiis eius consequatur dignissimos magni illo maiores fuga beatae, labore rem veritatis nesciunt harum. Iusto doloribus debitis asperiores sequi non ipsum facilis temporibus obcaecati.</p>
                        </div>
                      </div>
                      <div className="col-lg-5 col-11">
                        <div className="row gx-0 gy-4 d-flex justify-content-center">
                          <div className="col-12">
                            <div className="strong-points text-center">
                                <div className="par-details mb-3 wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="0.5s">
                                    <div className="fw-bold d-flex justify-content-between align-items-center mb-2" style={{width: '89%'}}>
                                        <span>PSD Design Only</span>
                                        <span>89%</span>
                                    </div>
                                    <div className="progress" style={{height: '1rem'}}>
                                        <div className="main-bg" role="progressbar" style={{width: '89%'}} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="par-details mb-3 wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.5s">
                                    <div className="fw-bold d-flex justify-content-between align-items-center mb-2" style={{width: '97%'}}>
                                        <span>Responsive Design</span>
                                        <span>97%</span>
                                    </div>
                                    <div className="progress" style={{height: '1rem'}}>
                                        <div className="main-bg" role="progressbar" style={{width: '97%'}} aria-valuenow="97" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="par-details mb-3 wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="0.5s">
                                    <div className="fw-bold d-flex justify-content-between align-items-center mb-2" style={{width: '90%'}}>
                                        <span>Creative & Attractive Design</span>
                                        <span>90%</span>
                                    </div>
                                    <div className="progress" style={{height: '1rem'}}>
                                        <div className="main-bg" role="progressbar" style={{width: '90%'}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="par-details wow fadeInLeft" data-wow-duration="1.5s" data-wow-delay="0.5s">
                                    <div className="fw-bold d-flex justify-content-between align-items-center mb-2" style={{width: '99%'}}>
                                        <span>Unlimited Pages</span>
                                        <span>99%</span>
                                    </div>
                                    <div className="progress" style={{height: '1rem'}}>
                                        <div className="main-bg" role="progressbar" style={{width: '99%'}} aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                </div>
            </section>
        </>
    )
}

