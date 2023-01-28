import React, { useEffect , useContext } from 'react';
// import { Link, NavLink } from 'react-router-dom';
import { langContext } from '../../componants/Context/store';
import imgAboutHome from '../../images/Home/About us.png';
import imgAboutHomer from '../../images/Home/About us (1).png';
import vectorTop from '../../images/Home/Vector.png';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import WOW from 'wowjs';
import $ from 'jquery';
import step1 from '../../images/About/Ellipse 6.png';
import step2 from '../../images/About/Ellipse 5.png';
import step3 from '../../images/About/Ellipse 8.png';
import step4 from '../../images/About/Ellipse 7 (1).png';
import Location from '../../componants/Location/Location';



export default function About() {


  let { isEng } = useContext(langContext);

  useEffect(() => {
    $('.about').addClass('active');
    return () => {
      $('.about').removeClass('active');
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
              <h2 className='mb-3 text-white h1 wow fadeInDownBig text-capitalize' style={{fontWeight: '600'}} data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'About Appe' : 'من نحـن'}</h2>
              <p className="mb-0 position-relative wow fadeIn" style={{color: '#ddd' , fontWeight: '400' , width: '80%'}} data-wow-duration="1s" data-wow-delay="1s">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
          </div>
      </header>

      {/* about */}
      <section className="pb-5 pt-3" dir={isEng ? 'ltr' : 'rtl'}>
          <div className="container-fluid">
              <div className=" row gx-0 gy-4 d-flex justify-content-center align-items-center">
                  <div className="col-lg-6 col-11">
                    <div className="wow fadeInRight" data-wow-duration="1.5s">
                      <img src={isEng ? imgAboutHome : imgAboutHomer} className="w-100"
                        alt="co-workers" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-11">
                    <div className="wow fadeInLeft position-relative" data-wow-duration="1.5s">
                      <img src={vectorTop} className={`vector position-absolute wow fadeIn ${isEng ? 'start-0' : 'end-0'}`} data-wow-duration="1s" data-wow-delay="1.5s" style={{height: '100px' , top: '-25px'}} alt="vector" />
                      <h2 className="text-black fw-bold mb-4 position-relative wow fadeInDownBig text-capitalize" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'About us' : 'من نحـن'}</h2>
                      <p className="mb-3 py-1 position-relative wow fadeIn" style={{color: '#656565' , fontWeight: '400' , width: '85%'}} data-wow-duration="1s" data-wow-delay="1s">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, quo perferendis voluptatibus id sit commodi laborum corporis placeat, voluptatum eum ab iste autem et, vel rerum accusantium perspiciatis ipsam? Culpa accusamus odit fugit natus temporibus harum mollitia omnis, esse explicabo itaque perferendis quis nesciunt iusto recusandae porro! Cupiditate nam fugit similique doloremque assumenda, aliquid sequi libero laboriosam facilis aut aperiam corporis consequatur, optio officiis aspernatur adipisci quasi ipsum explicabo dicta esse minima sapiente commodi! Atque perspiciatis officiis eius consequatur dignissimos magni illo maiores fuga beatae, labore rem veritatis nesciunt harum. Iusto doloribus debitis asperiores sequi non ipsum facilis temporibus obcaecati.</p>
                    </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Journey */}
      <section className="pb-5">
          <div className="main-title text-center pt-3 mb-4 mx-auto position-relative wow fadeInDownBig" style={{width: '85%'}} data-wow-duration="1s" data-wow-delay="0.5s">
              <img src={vectorTop} className={`vector position-absolute wow fadeIn top-0 ${isEng ? 'start-vector' : 'end-vector'} translate-middle-x`} data-wow-duration="1s" data-wow-delay="1.5s" style={{height: '100px'}} alt="vector" />
              <h2 className="fw-bold fs-1 mb-2 position-relative">{isEng ? 'Our Journey' : 'رحلتنــا'}</h2>
              <p className="mx-auto mb-0 position-relative" style={{color: '#656565'}}>{isEng ? 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, quaerat?' : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, quaerat?'}</p>
          </div>

          <div className="container-fluid">
              <div className="row gy-4 gx-0 mb-3 d-flex justify-content-center justify-content-md-start align-items-center wow fadeInLeft" data-wow-duration="1.5s" dir={isEng ? 'ltr' : 'rtl'}>
                <div className="col-md-4 col-11">
                  <div className="img-journey">
                    <img src={isEng ? step1 : step2} alt="step" className='w-100' />
                  </div>
                </div>
                <div className="col-md-8 col-11">
                  <div className={`title-journey ${isEng ? 'ms-md-5 ms-0' : 'me-md-5 me-0'} position-relative`} style={{width: '85%'}}>
                    <div className={`position-absolute main-color h1 ${isEng ? 'odd-number-en' : 'odd-number-ar'}`} style={{top: '-30px' , opacity: '40%'}}>1</div>
                    <h3 className='mb-3 main-color' style={{fontWeight: '600'}}>{isEng ? 'Idea (May 2022)' : 'الفكرة (مايـو 2022)'}</h3>
                    <p className="mx-auto mb-0" style={{color: '#656565'}}>{isEng ? 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, quaerat?' : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, quaerat?'}</p>
                  </div>
                </div>
              </div>
              <div className="row gy-4 gx-0 mb-3 d-flex justify-content-center justify-content-md-start align-items-center wow fadeInRight" data-wow-duration="1.5s" dir={isEng ? 'rtl' : 'ltr'}>
                <div className="col-md-4 col-11">
                  <div className="img-journey">
                    <img src={isEng ? step2 : step1} alt="step" className='w-100' />
                  </div>
                </div>
                <div className="col-md-8 col-11">
                  <div className={`title-journey ${isEng ? 'me-md-5 me-0' : 'ms-md-5 ms-0'} position-relative`} style={{width: '85%'}}>
                    <div className={`position-absolute main-color h1 ${isEng ? 'even-number-en' :'even-number-ar'}`} style={{top: '-25px' , opacity: '40%'}}>2</div>
                    <h3 className='mb-3 main-color' style={{fontWeight: '600'}}>{isEng ? 'Founded (Jul 2022)' : 'التأسيس (يوليو 2022)'}</h3>
                    <p className="mx-auto mb-0" style={{color: '#656565'}}>{isEng ? 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, quaerat?' : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, quaerat?'}</p>
                  </div>
                </div>
              </div>
              <div className="row gy-4 gx-0 mb-3 d-flex justify-content-center justify-content-md-start align-items-center wow fadeInLeft" data-wow-duration="1.5s" dir={isEng ? 'ltr' : 'rtl'}>
                <div className="col-md-4 col-11">
                  <div className="img-journey">
                    <img src={isEng ? step3 : step4} alt="step" className='w-100' />
                  </div>
                </div>
                <div className="col-md-8 col-11">
                  <div className={`title-journey ${isEng ? 'ms-md-5 ms-0' : 'me-md-5 me-0'} position-relative`} style={{width: '85%'}}>
                    <div className={`position-absolute main-color h1 ${isEng ? 'odd-number-en' : 'odd-number-ar'}`} style={{top: '-30px' , opacity: '40%'}}>3</div>
                    <h3 className='mb-3 main-color' style={{fontWeight: '600'}}>{isEng ? 'First Project Launch (Nov 2022)' : 'إطلاق أول مشروع (نوفمبر 2022)'}</h3>
                    <p className="mx-auto mb-0" style={{color: '#656565'}}>{isEng ? 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, quaerat?' : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, quaerat?'}</p>
                  </div>
                </div>
              </div>
              <div className="row gy-4 gx-0 d-flex justify-content-center justify-content-md-start align-items-center wow fadeInRight" data-wow-duration="1.5s" dir={isEng ? 'rtl' : 'ltr'}>
                <div className="col-md-4 col-11">
                  <div className="img-journey">
                    <img src={isEng ? step4 : step3} alt="step" className='w-100' />
                  </div>
                </div>
                <div className="col-md-8 col-11">
                  <div className={`title-journey ${isEng ? 'me-md-5 me-0' : 'ms-md-5 ms-0'} position-relative`} style={{width: '85%'}}>
                    <div className={`position-absolute main-color h1 ${isEng ? 'even-number-en' :'even-number-ar'}`} style={{top: '-25px' , opacity: '40%'}}>4</div>
                    <h3 className='mb-3 main-color' style={{fontWeight: '600'}}>{isEng ? 'Our Success (Des 2022)' : 'الحصــاد (ديسمبر 2022)'}</h3>
                    <p className="mx-auto mb-0" style={{color: '#656565'}}>{isEng ? 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, quaerat?' : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, quaerat?'}</p>
                  </div>
                </div>
              </div>
          </div>
      </section>

      {/* Testimonials-home */}
      <section className="pb-3" dir={isEng ? 'ltr' : 'rtl'}>
        <div className="container-fluid">
          <div className="row gy-4 d-flex justify-content-center align-items-center">
            <div className="col-10">
              <div className="main-title text-center pt-3 mb-4 position-relative wow fadeInDownBig" data-wow-duration="1s" data-wow-delay="0.5s">
                <img src={vectorTop} className={`vector position-absolute wow fadeIn top-0 ${isEng ? 'start-vector' : 'end-vector'} translate-middle-x`} data-wow-duration="1s" data-wow-delay="1.5s" style={{height: '100px'}} alt="vector" />
                <h2 className="fw-bold fs-1 mb-2 position-relative">{isEng ? 'Testimonials' : 'آراء العملاء'}</h2>
                <p className="mx-auto mb-0 position-relative" style={{color: '#656565'}}>{isEng ? 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}</p>
              </div>
            </div>
            
            <Location />

          </div>
        </div>
      </section>
    </>
  )
}
