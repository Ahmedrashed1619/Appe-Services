import React, { useEffect , useContext } from 'react';
import { langContext } from '../../componants/Context/store';

import WOW from 'wowjs';
import $ from 'jquery';

import img1 from '../../images/Portfolio/Rectangle 37.png';
import img2 from '../../images/Portfolio/Rectangle 38.png';
import img3 from '../../images/Portfolio/Rectangle 39.png';
import img4 from '../../images/Portfolio/Rectangle 40.png';
import img5 from '../../images/Portfolio/Rectangle 41.png';



export default function PortfolioDetails() {

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


    return (
        <>
            {/* top */}
            <header className="top-wave">
                <div className="container h-100 d-flex justify-content-center align-items-center text-center flex-column">
                    <h2 className='mb-3 text-white h1 wow fadeInDownBig text-capitalize' style={{fontWeight: '600'}} data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'Project Name' : 'أســم المشــروع'}</h2>
                    <p className="mb-0 position-relative wow fadeIn" style={{color: '#ddd' , fontWeight: '400' , width: '80%'}} data-wow-duration="1s" data-wow-delay="1s">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
                </div>
            </header>

            {/* Details */}
            <section className="py-5" dir={isEng ? 'ltr' : 'rtl'}>
                <div className="container">

                    <div className="row gx-lg-4 gx-0 gy-5 d-flex justify-content-center">

                        <div className="col-lg-8">
                          <div className="row gx-4 gy-4 d-flex justify-content-center align-items-center">
                            <div className="col-md-6 col-11">
                              <div className="img-vert">
                                <img src={img1} alt="vert" className='w-100 wow fadeIn' data-wow-duration="2.5s" data-wow-delay="1s" />
                              </div>
                            </div>
                            <div className="col-md-6 col-11">
                              <div className="row gx-0 gy-4 d-flex justify-content-center align-items-center flex-md-column">
                                <div className="col-12">
                                  <img src={img5} alt="hor" className='w-100 wow fadeInRight' data-wow-duration="1s" data-wow-delay="0.5s" />
                                </div>
                                <div className="col-12">
                                  <img src={img2} alt="hor" className='w-100 wow fadeInLeft' data-wow-duration="1s" data-wow-delay="0.5s" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md-12 col-11">
                              <div className="row gx-4 gy-4 d-flex justify-content-center align-items-center">
                                <div className="col-md-6">
                                  <img src={img3} alt="hor" className='w-100 wow fadeInDown' data-wow-duration="1s" data-wow-delay="0.5s" />
                                </div>
                                <div className="col-md-6">
                                  <img src={img4} alt="hor" className='w-100 wow fadeInUp' data-wow-duration="1s" data-wow-delay="0.5s" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="col-lg-4 col-11">
                            <div className="project-details mb-lg-5 mb-4 wow fadeInDown" data-wow-duration="1.5s">
                                <h5 className='main-color mb-2 wow fadeInRight' style={{fontWeight: '500'}} data-wow-duration="1s" data-wow-delay="0.5s">Website Design(Category)</h5>
                                <h2 className="text-black fw-bold mb-3 wow fadeInLeft text-capitalize" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'project name' : 'إســم المشــروع'}</h2>
                                <p className="mb-0 wow fadeIn" style={{color: '#656565' , fontWeight: '400'}} data-wow-duration="1s" data-wow-delay="1s">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, quo perferendis voluptatibus id sit commodi laborum corporis placeat, voluptatum eum ab iste autem et, vel rerum accusantium perspiciatis ipsam? Culpa accusamus odit fugit natus temporibus harum mollitia omnis, esse explicabo itaque perferendis quis nesciunt iusto recusandae porro! Cupiditate nam fugit similique doloremque assumenda, aliquid sequi libero laboriosam facilis aut aperiam corporis consequatur, optio officiis aspernatur adipisci quasi ipsum explicabo dicta esse minima sapiente commodi! Atque perspiciatis officiis eius consequatur dignissimos magni illo maiores fuga beatae, labore rem veritatis nesciunt harum. Iusto doloribus debitis asperiores sequi non ipsum facilis temporibus obcaecati.</p>                            
                            </div>
                            
                            <div className="features mb-lg-5 mb-4 wow fadeInUp" data-wow-duration="1.5s">
                                <h3 className="text-black fw-bold mb-3 wow fadeInLeft text-capitalize" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'features' : 'المميــزات'}</h3>
                                <ul>
                                  <li className='h6 text-capitalize wow fadeInLeft' data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'feature 1' : 'ميزة 1'}</li>
                                  <li className='h6 text-capitalize wow fadeInRight' data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'feature 2' : 'ميزة 2'}</li>
                                  <li className='h6 text-capitalize wow fadeInLeft' data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'feature 3' : 'ميزة 3'}</li>
                                  <li className='h6 text-capitalize wow fadeInRight' data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'feature 4' : 'ميزة 4'}</li>
                                  <li className='h6 text-capitalize wow fadeInLeft' data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'feature 5' : 'ميزة 5'}</li>
                                </ul>
                            </div>

                            <div className="row gx-0 gy-4 d-flex align-items-center wow fadwIn" data-wow-duration="1.5s" data-wow-delay="1s">
                                <div className="col-6">
                                    <div className="details wow fadeInUp" data-wow-duration="1.5s">
                                        <h6 className='text-muted mb-2 text-capitalize'>{isEng ? 'scope' : 'المجـال'}</h6>
                                        <h5 className='main-color mb-0 text-capitalize' style={{fontWeight: '600'}}>{isEng ? 'development' : 'التطـويـر'}</h5>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="details wow fadeInDown" data-wow-duration="1.5s">
                                        <h6 className='text-muted mb-2 text-capitalize'>{isEng ? 'Client' : 'العميــل'}</h6>
                                        <h5 className='text-black mb-0 text-capitalize' style={{fontWeight: '600'}}>{isEng ? 'client name' : 'اسم العميل'}</h5>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="details wow fadeInLeft" data-wow-duration="1.5s">
                                        <h6 className='text-muted mb-2 text-capitalize'>{isEng ? 'date' : 'التاريـخ'}</h6>
                                        <h5 className='text-black mb-0 text-capitalize' style={{fontWeight: '600'}}>{isEng ? '22 Nov 2021' : '22 نوفمبر 2021'}</h5>
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
