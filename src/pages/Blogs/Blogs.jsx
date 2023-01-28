import React, { useEffect , useContext } from 'react';
import { Link } from 'react-router-dom';
import { langContext } from '../../componants/Context/store';
import { BsArrowRight , BsArrowLeft } from 'react-icons/bs';

import WOW from 'wowjs';
import $ from 'jquery';

import blog1 from '../../images/Home/Image here (8).png';
import blog2 from '../../images/Home/Image here (9).png';
import blog3 from '../../images/Home/Image here (10).png';
import blog4 from '../../images/Home/Image here (11).png';


export default function Blogs() {

    let { isEng } = useContext(langContext);


    useEffect(() => {
      $('.blogs').addClass('active');
      return () => {
        $('.blogs').removeClass('active');
      }
    }, [])
  

    useEffect(() => {
      $('html , body').animate({ scrollTop: 0 }, 200);
    }, []);

    
    useEffect(() => {
        new WOW.WOW().init();
    }, []);


    const blogsImgs =[
      {img: blog1},
      {img: blog2},
      {img: blog3},
      {img: blog4},
      {img: blog1},
      {img: blog2},
      {img: blog3},
      {img: blog4},
      {img: blog1},
      {img: blog2},
      {img: blog3},
      {img: blog4}
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
                    <h2 className='mb-3 text-white h1 wow fadeInDownBig text-capitalize' style={{fontWeight: '600'}} data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'Blogs Appe' : 'Appe مدونــات'}</h2>
                    <p className="mb-0 position-relative wow fadeIn" style={{color: '#ddd' , fontWeight: '400' , width: '80%'}} data-wow-duration="1s" data-wow-delay="1s">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
                </div>
            </header>

            {/* Services */}
            <section className="py-5" dir={isEng ? 'ltr' : 'rtl'}>
                <div className="container">
                        
                  <div className="row gy-5 gx-lg-4 gx-0 d-flex justify-content-center justify-content-lg-start align-items-center">
                      {blogsImgs.map((blog , i) => (
                        <div key={i} className="col-lg-3 col-md-6 col-11">
                          <div className={`blog-item shadow pb-3 wow wow ${state[i]}`} data-wow-duration="1.5s" data-wow-delay={`${del[i]}`}>
                            <img src={blog.img} className='w-100 mb-2' style={{height: '300px'}} alt="blog" />
                            <h4 className={`${isEng ? 'ms-2' : 'me-2'} mb-2`} style={{fontWeight: '600'}}>{isEng ? 'Blog Title....' : 'عنوان المدونة..'}</h4>
                            <div className={`date d-flex justify-content-between align-items-center mx-2`}>
                              <h6 className='mb-0' style={{color: '#656565'}}>{isEng ? '2 Nov 2022' : '2 نوفمبر 2020'}</h6>
                              <Link to='../blogs/1' className={`main-color`} style={{fontWeight: '600' , fontSize: '14px'}}>{isEng ? <>Learn More <BsArrowRight className='main-color ms-1'/> </> : <>تعلـم المزيـد <BsArrowLeft className='main-color me-1' /></>}</Link>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>

                </div>
            </section>
        </>
    )
}
