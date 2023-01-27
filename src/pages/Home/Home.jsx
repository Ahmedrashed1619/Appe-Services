import React, { useEffect , useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { langContext } from '../../componants/Context/store';
import imgTop from '../../images/Home/In progress-pana.png';
import imgAboutHome from '../../images/Home/About us.png';
import imgAboutHomer from '../../images/Home/About us (1).png';
import vectorTop from '../../images/Home/Vector.png';
import { BsArrowRight , BsArrowLeft } from 'react-icons/bs';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
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

import client1 from '../../images/Home/Rectangle 1.png';
import client2 from '../../images/Home/Rectangle 2.png';
import client3 from '../../images/Home/Rectangle 3.png';
import client4 from '../../images/Home/Rectangle 4.png';
import client5 from '../../images/Home/Rectangle 5.png';
import client6 from '../../images/Home/Rectangle 6.png';

import blog1 from '../../images/Home/Image here (8).png';
import blog2 from '../../images/Home/Image here (9).png';
import blog3 from '../../images/Home/Image here (10).png';
import blog4 from '../../images/Home/Image here (11).png';

import Location from '../../componants/Location/Location';



export default function Home() {

  let { isEng } = useContext(langContext);


  useEffect(() => {
    $('.home').addClass('active');
    return () => {
      $('.home').removeClass('active');
    }
  }, [])

  useEffect(() => {
    $('html , body').animate({ scrollTop: 0 }, 200);
  }, []);

  useEffect(() => {
    new WOW.WOW().init();
  }, []);


  function changeDir() {

    if (isEng === false) {

      if ($('body').width() > 992) {
        $('.caption').css({ 'marginRight': '6rem', 'marginLeft': 'auto' });
      }
      else {
        $('.caption').css({ 'marginRight': 'auto', 'marginLeft': 'auto' });
      }
    }

    else {

      if ($('body').width() > 992) {
        $('.caption').css({ 'marginLeft': '6rem', 'marginRight': 'auto' });
      }
      else {
        $('.caption').css({ 'marginLeft': 'auto', 'marginRight': 'auto' });
      }
    }
  }


  function widthBody() {
    let width = $('body').width();
    if (width > 992 && isEng === true) {
      $('.caption').css({ 'marginLeft': '6rem', 'marginRight': 'auto' });
    }
    else if (width < 992 && isEng === true) {
      $('.caption').css({ 'marginRight': 'auto', 'marginLeft': 'auto' });
    }
    else if (width > 992 && isEng === false) {
      $('.caption').css({ 'marginRight': '6rem', 'marginLeft': 'auto' });
    }
    else if (width < 992 && isEng === false) {
      $('.caption').css({ 'marginLeft': 'auto', 'marginRight': 'auto' });
    }
  }

  $(window).on('resize', function() {
      widthBody();
      changeDir();
  });


  useEffect(() => {
    changeDir();

    return () => {
      changeDir();
    }
  }, [isEng]);


  const servicesImgs = [
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
    0: '0.3',
    1: '0.5',
    2: '0.7',
    3: '0.9',
    4: '1.1',
    5: '1.3',
    6: '1.5',
    7: '1.7',
    8: '1.9',
    9: '2.1',
    10: '2.3',
    11: '2.5',
    12: '2.7',
    13: '2.9',
    14: '3.1',
    15: '3.3',
  };

  
  const portfolioImgs =[
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
    },
  ]


  const blogsImgs =[
    {img: blog1},
    {img: blog2},
    {img: blog3},
    {img: blog4}
  ]


  const clients = {
    // items: 6,
    responsiveClass: true,
    nav: false,
    dots: false,
    loop: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      700: {
        items: 3,
      },
      900: {
        items: 4
      },
      1000: {
        items: 5,
      },
      1200: {
        items: 6,
      }
    },
  }


  return (
    <>

      {/* top */}
      <header id="home" className="home" dir={isEng ? 'ltr' : 'rtl'}>
        <div className="total-header bg-light min-vh-70 d-flex justify-content-center align-items-end">
          <div className="container-fluid">
            <div className="row gx-0 gy-4 d-flex justify-content-center align-items-center">
              <div className="col-lg-7">
                <div className="caption wow fadeInLeft position-relative" data-wow-duration="1.5s">
                  <img src={vectorTop} className={`vector position-absolute wow fadeIn ${isEng ? 'start-0' : 'end-0'}`} data-wow-duration="1s" data-wow-delay="1.5s" style={{top: '-40px' , height: '180px'}} alt="vector" />
                  <h1 className="text-black fw-bold mb-4 wow fadeInDownBig text-capitalize" data-wow-duration="1s" data-wow-delay="0.5s">We Are Here To Help you to achieve your goal</h1>
                  <p className="mb-4 py-1 wow fadeIn" style={{color: '#656565' , fontWeight: '400'}} data-wow-duration="1s" data-wow-delay="1s">Lorem ipsum dolor sit amet consectetur. Pharetra sagittis penatibus ultricies congue nullam ipsum. Neque habitasse sem mi egestas nunc enim. Arcu.</p>
                  <div className="buttons wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">
                    <Link to='../contact' className="btn main-btn py-3 px-5">{isEng ? 'Get Start with us' : 'ابدأ معنــــا'}</Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="img-header wow fadeInRight" data-wow-duration="1.5s">
                  <img src={imgTop} className="w-100"
                    alt="co-workers" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* about */}
      <section className="py-5" dir={isEng ? 'ltr' : 'rtl'}>
          <div className="container-fluid">
              <div className="row gx-0 gy-4 d-flex justify-content-center align-items-center">
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
                      <p className="mb-3 py-1 position-relative wow fadeIn" style={{color: '#656565' , fontWeight: '400' , width: '90%'}} data-wow-duration="1s" data-wow-delay="1s">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, quo perferendis voluptatibus id sit commodi laborum corporis placeat, voluptatum eum ab iste autem et, vel rerum accusantium perspiciatis ipsam? Culpa accusamus odit fugit natus temporibus harum mollitia omnis, esse explicabo itaque perferendis quis nesciunt iusto recusandae porro! Cupiditate nam fugit similique doloremque assumenda, aliquid sequi libero laboriosam facilis aut aperiam corporis consequatur, optio officiis aspernatur adipisci quasi ipsum explicabo dicta esse minima sapiente commodi! Atque perspiciatis officiis eius consequatur dignissimos magni illo maiores fuga beatae, labore rem veritatis nesciunt harum. Iusto doloribus debitis asperiores sequi non ipsum facilis temporibus obcaecati.</p>
                      {/* <div className="buttons wow fadeInUpBig" data-wow-duration="1s" data-wow-delay="0.5s">
                        <Link to='../contact' className="btn main-btn py-3 px-5">{isEng ? 'Get Start with us' : 'ابدأ معنــــا'}</Link>
                      </div> */}
                      <Link to='../about' className={`main-color fw-bold`}>{isEng ? <>Learn More <BsArrowRight className='main-color ms-1'/> </> : <>تعلـم المزيـد <BsArrowLeft className='main-color me-1' /></>}</Link>
                    </div>
                  </div>
              </div>
          </div>
      </section>

      {/* services-home */}
      <section className="pb-5" dir={isEng ? 'ltr' : 'rtl'}>
        <div className="container">
          <div className="row gy-4 d-flex justify-content-center align-items-center">
            <div className="col-10">
              <div className="main-title text-center pt-3 mb-4 position-relative wow fadeInDownBig" data-wow-duration="1s" data-wow-delay="0.5s">
                <img src={vectorTop} className={`vector position-absolute wow fadeIn top-0 ${isEng ? 'start-vector' : 'end-vector'} translate-middle-x`} data-wow-duration="1s" data-wow-delay="1.5s" style={{height: '100px'}} alt="vector" />
                <h2 className="fw-bold fs-1 mb-2 position-relative">{isEng ? 'Services' : 'الخدمــات'}</h2>
                <p className="mx-auto mb-0 position-relative" style={{color: '#656565'}}>{isEng ? 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, quaerat?' : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, quaerat?'}</p>
              </div>
            </div>

            <div className="row gy-4 d-flex justify-content-center justify-content-lg-start align-items-center">
                {servicesImgs.map((service , i) => (
                  <Link key={i} to='../services/1' className="col-lg-3 col-md-6 col-11">
                    <div className={`service-item rounded-4 position-relative wow ${state[i]}`} data-wow-duration="1.5s" data-wow-delay={`${del[i]}`}>
                      <img src={service.img} className='w-100 rounded-4' alt="service" />
                      <div className="layer-title rounded-4 position-absolute top-0 start-0 end-0 bottom-0 d-flex justify-content-center align-items-end" style={{backgroundColor: '#00000075'}}>
                        <h4 className='text-white fw-bold mb-4'>{isEng ? service.titleEn : service.titleAr}</h4>
                      </div>
                      <div className="layer-caption rounded-4 position-absolute d-flex justify-content-center align-items-center" style={{backgroundColor: '#00000095'}}>
                        <p className='text-white mb-4 p-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic soluta quibusdam, neque maxime fuga dolorum fugit, sapiente enim harum perferendis aspernatur esse molestias veritatis! Dolorum voluptatum error omnis, deserunt minus sit in harum veritatis atque tempore iure expedita sint molestiae.</p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
            
            <div className="buttons text-center mt-5 wow fadeInUpBig">
              <Link to="../services" className="btn second-btn px-5" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'All Services' : 'المزيـــد'}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* portfolio-home */}
      <section className="pb-5" dir={isEng ? 'ltr' : 'rtl'}>
        <div className="container">
          <div className="row gy-4 d-flex justify-content-center align-items-center">
            <div className="col-10">
              <div className="main-title text-center pt-3 mb-4 position-relative wow fadeInDownBig" data-wow-duration="1s" data-wow-delay="0.5s">
                <img src={vectorTop} className={`vector position-absolute wow fadeIn top-0 ${isEng ? 'start-vector' : 'end-vector'} translate-middle-x`} data-wow-duration="1s" data-wow-delay="1.5s" style={{height: '100px'}} alt="vector" />
                <h2 className="fw-bold fs-1 mb-2 position-relative">{isEng ? 'Portfolio' : 'معرض الأعمال'}</h2>
                <p className="mx-auto mb-0 position-relative" style={{color: '#656565'}}>{isEng ? 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, quaerat?' : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, quaerat?'}</p>
              </div>
            </div>
            
            <div className="row gy d-flex justify-content-center justify-content-lg-start align-items-center">
                {portfolioImgs.map((port , i) => (
                    <Link key={i} to='../portfolio/1' className="col-lg-4 col-md-6 col-11">
                      <div className={`port-item rounded-4 position-relative wow ${state[i]}`} data-wow-duration="1.5s" data-wow-delay={`${del[i]}`}>
                        <img src={port.img} className='w-100 rounded-4' alt="port" />
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
            
            <div className="buttons text-center mt-5 wow fadeInUpBig">
              <Link to="../portfolio" className="btn second-btn px-5" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'View All Projects' : 'المزيـــد'}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* clients-home */}
      <section className="py-5 bg-light">
        <div className="container">
            <OwlCarousel className="slider-items owl-carousel wow fadeInRight" data-wow-duration="1.5s" {...clients}>
              <div className="client text-center">
                <img src={client1} alt="client1" className="w-75 mx-auto" />
              </div>
              <div className="client text-center">
                <img src={client2} alt="client2" className="w-75 mx-auto" />
              </div>
              <div className="client text-center">
                <img src={client3} alt="client3" className="w-75 mx-auto" />
              </div>
              <div className="client text-center">
                <img src={client4} alt="client4" className="w-75 mx-auto" />
              </div>
              <div className="client text-center">
                <img src={client5} alt="client5" className="w-75 mx-auto" />
              </div>
              <div className="client text-center">
                <img src={client6} alt="client6" className="w-75 mx-auto" />
              </div>
            </OwlCarousel>
        </div>
      </section>

      {/* Testimonials-home */}
      <section className="py-5" dir={isEng ? 'ltr' : 'rtl'}>
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

      {/* blogs-home */}
      <section className="py-5" dir={isEng ? 'ltr' : 'rtl'}>
        <div className="container">
          <div className="row gy-4 d-flex justify-content-center align-items-center">
            <div className="col-10">
              <div className="main-title text-center pt-3 mb-4 position-relative wow fadeInDownBig" data-wow-duration="1s" data-wow-delay="0.5s">
                <img src={vectorTop} className={`vector position-absolute wow fadeIn top-0 ${isEng ? 'start-vector' : 'end-vector'} translate-middle-x`} data-wow-duration="1s" data-wow-delay="1.5s" style={{height: '100px'}} alt="vector" />
                <h2 className="fw-bold fs-1 mb-2 position-relative">{isEng ? 'Blogs' : 'المدونــات'}</h2>
                <p className="mx-auto mb-0 position-relative" style={{color: '#656565'}}>{isEng ? 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'}</p>
              </div>
            </div>

            <div className="row gy-4 d-flex justify-content-center justify-content-lg-start align-items-center">
                {blogsImgs.map((blog , i) => (
                  <div key={i} className="col-lg-3 col-md-6 col-11">
                    <div className={`blog-item shadow pb-3 wow`} data-wow-duration="1.5s" data-wow-delay={``}>
                      <img src={blog.img} className='w-100 mb-2' alt="blog" />
                      <h4 className={`${isEng ? 'ms-2' : 'me-2'} mb-2`} style={{fontWeight: '600'}}>{isEng ? 'Blog Title....' : 'عنوان المدونة..'}</h4>
                      <div className={`date d-flex justify-content-between align-items-center mx-2`}>
                        <h6 className='mb-0' style={{color: '#656565'}}>{isEng ? '2 Nov 2022' : '2 نوفمبر 2020'}</h6>
                        <Link to='../blogs/1' className={`main-color`} style={{fontWeight: '600' , fontSize: '14px'}}>{isEng ? <>Learn More <BsArrowRight className='main-color ms-1'/> </> : <>تعلـم المزيـد <BsArrowLeft className='main-color me-1' /></>}</Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

              
            
            <div className="buttons text-center mt-5 wow fadeInUpBig">
              <Link to="../blogs" className="btn second-btn px-5" data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'View All Blogs' : 'المزيـــد'}</Link>
            </div>
          </div>
        </div>
      </section>


    </>
  )
}
