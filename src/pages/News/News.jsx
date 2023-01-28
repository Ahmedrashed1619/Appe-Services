import React, { useEffect , useContext } from 'react';
import { Link } from 'react-router-dom';
import { langContext } from '../../componants/Context/store';
import { BsArrowRight , BsArrowLeft } from 'react-icons/bs';

import WOW from 'wowjs';
import $ from 'jquery';

import news1 from '../../images/News/Image here.png';
import news2 from '../../images/News/Image here (1).png';
import news3 from '../../images/News/Image here (2).png';
import news4 from '../../images/News/Image here (3).png';
import news5 from '../../images/News/Image here (4).png';
import news6 from '../../images/News/Image here (5).png';
import news7 from '../../images/News/Image here (6).png';
import news8 from '../../images/News/Image here (7).png';
import news9 from '../../images/News/Image here (8).png';
import news10 from '../../images/News/Image here (9).png';
import news11 from '../../images/News/Image here (10).png';
import news12 from '../../images/News/Image here (11).png';


export default function News() {

    let { isEng } = useContext(langContext);


    useEffect(() => {
      $('.news').addClass('active');
      return () => {
        $('.news').removeClass('active');
      }
    }, [])
  

    useEffect(() => {
      $('html , body').animate({ scrollTop: 0 }, 200);
    }, []);

    
    useEffect(() => {
        new WOW.WOW().init();
    }, []);


    const newsImgs =[
      {img: news1},
      {img: news2},
      {img: news3},
      {img: news4},
      {img: news5},
      {img: news6},
      {img: news7},
      {img: news8},
      {img: news9},
      {img: news10},
      {img: news11},
      {img: news12}
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
                    <h2 className='mb-3 text-white h1 wow fadeInDownBig text-capitalize' style={{fontWeight: '600'}} data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'News Appe' : 'Appe أخبــار'}</h2>
                    <p className="mb-0 position-relative wow fadeIn" style={{color: '#ddd' , fontWeight: '400' , width: '80%'}} data-wow-duration="1s" data-wow-delay="1s">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
                </div>
            </header>

            {/* Services */}
            <section className="py-5" dir={isEng ? 'ltr' : 'rtl'}>
                <div className="container">
                        
                  <div className="row gy-5 gx-lg-4 gx-0 d-flex justify-content-center justify-content-lg-start align-items-center">
                      {newsImgs.map((blog , i) => (
                        <div key={i} className="col-lg-3 col-md-6 col-11">
                          <div className={`blog-item shadow pb-3 wow wow ${state[i]}`} data-wow-duration="1.5s" data-wow-delay={`${del[i]}`}>
                            <img src={blog.img} className='w-100 mb-2' style={{height: '300px'}} alt="news" />
                            <h4 className={`${isEng ? 'ms-2' : 'me-2'} mb-2`} style={{fontWeight: '600'}}>{isEng ? 'News Title....' : 'عنوان الخبـر..'}</h4>
                            <div className={`date d-flex justify-content-between align-items-center mx-2`}>
                              <h6 className='mb-0' style={{color: '#656565'}}>{isEng ? '2 Nov 2022' : '2 نوفمبر 2020'}</h6>
                              <Link to='../news/1' className={`main-color`} style={{fontWeight: '600' , fontSize: '14px'}}>{isEng ? <>Read More <BsArrowRight className='main-color ms-1'/> </> : <>أقرأ المزيـد <BsArrowLeft className='main-color me-1' /></>}</Link>
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

