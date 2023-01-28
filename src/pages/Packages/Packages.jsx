import React, { useEffect , useContext } from 'react';
// import { Link, NavLink } from 'react-router-dom';
import { langContext } from '../../componants/Context/store';
import vectorTop from '../../images/Home/Vector.png';
import WOW from 'wowjs';
import $ from 'jquery';
import { BiCheckboxChecked } from 'react-icons/bi';



export default function Packages() {


  let { isEng } = useContext(langContext);

  useEffect(() => {
    $('.packages').addClass('active');
    return () => {
      $('.packages').removeClass('active');
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
              <h2 className='mb-3 text-white h1 wow fadeInDownBig text-capitalize' style={{fontWeight: '600'}} data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'Packages' : 'الباقــات'}</h2>
              <p className="mb-0 position-relative wow fadeIn" style={{color: '#ddd' , fontWeight: '400' , width: '80%'}} data-wow-duration="1s" data-wow-delay="1s">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
          </div>
      </header>

      {/* packages */}
      <section className="pb-5 pt-3" dir={isEng ? 'ltr' : 'rtl'}>
          <div className="container">
              <div className=" row gx-lg-4 gx-0 gy-5 d-flex justify-content-center align-items-center">
                  <div className="col-10">
                    <div className="main-title text-center pt-3 mb-4 position-relative wow fadeInDownBig" data-wow-duration="1s" data-wow-delay="0.5s">
                      <img src={vectorTop} className={`vector position-absolute wow fadeIn top-0 ${isEng ? 'start-vector' : 'end-vector'} translate-middle-x`} data-wow-duration="1s" data-wow-delay="1.5s" style={{height: '100px'}} alt="vector" />
                      <h2 className="fw-bold fs-1 mb-2 position-relative">{isEng ? 'Website Packages' : 'باقــات الموقع الإلكتروني'}</h2>
                    </div>
                  </div>
              </div>

              <div className="row gy-5 gx-lg-5 gx-0 d-flex justify-content-center align-items-center mt-1 mb-5">
                  <div className="col-lg-4 col-md-6 col-10">
                      <div className="price wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s">
                          <h3 className="name text-white text-center text-capitalize py-3 main-bg mb-0" style={{fontWeight: '600'}}>{isEng ? 'Basic Plan' : 'الباقـة العاديــة'}</h3>
                          <div className="cont-pricing px-3 pb-3">
                              <h6 className="salary text-center mx-auto mb-4" style={{color: '#00000080' , fontWeight: '600'}}><span className="fs-1 main-color">20 $</span> / {isEng ? 'Month' : 'في الشهـر'}</h6>
                              <h5 className='mb-2 d-flex'><BiCheckboxChecked className={`main-color h4 ${isEng ? 'me-1' : 'ms-1'}`} /> Feature 1 with all details</h5>
                              <h5 className='mb-2 d-flex'><BiCheckboxChecked className={`main-color h4 ${isEng ? 'me-1' : 'ms-1'}`} /> Feature 1 with all details</h5>
                              <h5 className='mb-2 d-flex'><BiCheckboxChecked className={`main-color h4 ${isEng ? 'me-1' : 'ms-1'}`} /> Feature 1 with all details</h5>
                              <h5 className='mb-2 d-flex'><BiCheckboxChecked className={`main-color h4 ${isEng ? 'me-1' : 'ms-1'}`} /> Feature 1 with all details</h5>
                              <h5 className='mb-0 d-flex'><BiCheckboxChecked className={`main-color h4 ${isEng ? 'me-1' : 'ms-1'}`} /> Feature 1 with all details</h5>
                              <h5 className='mb-2 d-flex'><BiCheckboxChecked className={`main-color h4 ${isEng ? 'me-1' : 'ms-1'}`} /> Feature 1 with all details</h5>
                              <h5 className='mb-0 d-flex'><BiCheckboxChecked className={`main-color h4 ${isEng ? 'me-1' : 'ms-1'}`} /> Feature 1 with all details</h5>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-10">
                      <div className="price  wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                          <h3 className="name text-white text-center text-capitalize py-3 main-bg mb-0" style={{fontWeight: '600'}}>{isEng ? 'Business Plan' : 'باقـة الأعمــال'}</h3>
                          <div className="cont-pricing px-3 pb-3">
                              <h6 className="salary text-center mx-auto mb-4" style={{color: '#00000080' , fontWeight: '600'}}><span className="fs-1 main-color">40 $</span> / {isEng ? 'Month' : 'في الشهـر'}</h6>
                              <h5 className='mb-2 d-flex'><BiCheckboxChecked className={`main-color h4 ${isEng ? 'me-1' : 'ms-1'}`} /> Feature 1 with all details</h5>
                              <h5 className='mb-2 d-flex'><BiCheckboxChecked className={`main-color h4 ${isEng ? 'me-1' : 'ms-1'}`} /> Feature 1 with all details</h5>
                              <h5 className='mb-2 d-flex'><BiCheckboxChecked className={`main-color h4 ${isEng ? 'me-1' : 'ms-1'}`} /> Feature 1 with all details</h5>
                              <h5 className='mb-2 d-flex'><BiCheckboxChecked className={`main-color h4 ${isEng ? 'me-1' : 'ms-1'}`} /> Feature 1 with all details</h5>
                              <h5 className='mb-0 d-flex'><BiCheckboxChecked className={`main-color h4 ${isEng ? 'me-1' : 'ms-1'}`} /> Feature 1 with all details</h5>
                              <h5 className='mb-2 d-flex'><BiCheckboxChecked className={`main-color h4 ${isEng ? 'me-1' : 'ms-1'}`} /> Feature 1 with all details</h5>
                              <h5 className='mb-0 d-flex'><BiCheckboxChecked className={`main-color h4 ${isEng ? 'me-1' : 'ms-1'}`} /> Feature 1 with all details</h5>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-10">
                      <div className="price wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                          <h3 className="name text-white text-center text-capitalize py-3 main-bg mb-0" style={{fontWeight: '600'}}>{isEng ? 'Enterprise Plan' : 'باقــة المشـروع'}</h3>
                          <div className="cont-pricing px-3 pb-3">
                              <h6 className="salary text-center mx-auto mb-4" style={{color: '#00000080' , fontWeight: '600'}}><span className="fs-1 main-color">60 $</span> / {isEng ? 'Month' : 'في الشهـر'}</h6>
                              <h5 className='mb-2 d-flex'><BiCheckboxChecked className={`main-color h4 ${isEng ? 'me-1' : 'ms-1'}`} /> Feature 1 with all details</h5>
                              <h5 className='mb-2 d-flex'><BiCheckboxChecked className={`main-color h4 ${isEng ? 'me-1' : 'ms-1'}`} /> Feature 1 with all details</h5>
                              <h5 className='mb-2 d-flex'><BiCheckboxChecked className={`main-color h4 ${isEng ? 'me-1' : 'ms-1'}`} /> Feature 1 with all details</h5>
                              <h5 className='mb-2 d-flex'><BiCheckboxChecked className={`main-color h4 ${isEng ? 'me-1' : 'ms-1'}`} /> Feature 1 with all details</h5>
                              <h5 className='mb-0 d-flex'><BiCheckboxChecked className={`main-color h4 ${isEng ? 'me-1' : 'ms-1'}`} /> Feature 1 with all details</h5>
                              <h5 className='mb-2 d-flex'><BiCheckboxChecked className={`main-color h4 ${isEng ? 'me-1' : 'ms-1'}`} /> Feature 1 with all details</h5>
                              <h5 className='mb-0 d-flex'><BiCheckboxChecked className={`main-color h4 ${isEng ? 'me-1' : 'ms-1'}`} /> Feature 1 with all details</h5>
                          </div>
                      </div>
                  </div>
              </div>

              <div className=" row gx-lg-4 gx-0 gy-5 d-flex justify-content-center align-items-center">
                  <div className="col-10">
                    <div className="main-title text-center pt-3 mb-4 position-relative wow fadeInDownBig" data-wow-duration="1s" data-wow-delay="0.5s">
                      <img src={vectorTop} className={`vector position-absolute wow fadeIn top-0 ${isEng ? 'start-vector' : 'end-vector'} translate-middle-x`} data-wow-duration="1s" data-wow-delay="1.5s" style={{height: '100px'}} alt="vector" />
                      <h2 className="fw-bold fs-1 mb-2 position-relative">{isEng ? 'Social Media Packages' : 'باقــات التواصـل الإجتماعـي'}</h2>
                    </div>
                  </div>
              </div>

              <div className="row gy-5 gx-lg-5 gx-0 d-flex justify-content-center align-items-center mt-1">
                  <div className="col-lg-4 col-md-6 col-10">
                      <div className="price wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s">
                          <h3 className="name text-white text-center text-capitalize py-3 main-bg mb-0" style={{fontWeight: '600'}}>{isEng ? 'Basic Plan' : 'الباقـة العاديــة'}</h3>
                          <div className="cont-pricing px-3 pb-3">
                              <h6 className="salary text-center mx-auto mb-4" style={{color: '#00000080' , fontWeight: '600'}}><span className="fs-1 main-color">20 $</span> / {isEng ? 'Month' : 'في الشهـر'}</h6>
                              <h5 className='mb-2 d-flex'><BiCheckboxChecked className={`main-color h4 ${isEng ? 'me-1' : 'ms-1'}`} /> Feature 1 with all details</h5>
                              <h5 className='mb-2 d-flex'><BiCheckboxChecked className={`main-color h4 ${isEng ? 'me-1' : 'ms-1'}`} /> Feature 1 with all details</h5>
                              <h5 className='mb-2 d-flex'><BiCheckboxChecked className={`main-color h4 ${isEng ? 'me-1' : 'ms-1'}`} /> Feature 1 with all details</h5>
                              <h5 className='mb-2 d-flex'><BiCheckboxChecked className={`main-color h4 ${isEng ? 'me-1' : 'ms-1'}`} /> Feature 1 with all details</h5>
                              <h5 className='mb-0 d-flex'><BiCheckboxChecked className={`main-color h4 ${isEng ? 'me-1' : 'ms-1'}`} /> Feature 1 with all details</h5>
                              <h5 className='mb-2 d-flex'><BiCheckboxChecked className={`main-color h4 ${isEng ? 'me-1' : 'ms-1'}`} /> Feature 1 with all details</h5>
                              <h5 className='mb-0 d-flex'><BiCheckboxChecked className={`main-color h4 ${isEng ? 'me-1' : 'ms-1'}`} /> Feature 1 with all details</h5>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-10">
                      <div className="price wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
                          <h3 className="name text-white text-center text-capitalize py-3 main-bg mb-0" style={{fontWeight: '600'}}>{isEng ? 'Business Plan' : 'باقـة الأعمــال'}</h3>
                          <div className="cont-pricing px-3 pb-3">
                              <h6 className="salary text-center mx-auto mb-4" style={{color: '#00000080' , fontWeight: '600'}}><span className="fs-1 main-color">40 $</span> / {isEng ? 'Month' : 'في الشهـر'}</h6>
                              <h5 className='mb-2 d-flex'><BiCheckboxChecked className={`main-color h4 ${isEng ? 'me-1' : 'ms-1'}`} /> Feature 1 with all details</h5>
                              <h5 className='mb-2 d-flex'><BiCheckboxChecked className={`main-color h4 ${isEng ? 'me-1' : 'ms-1'}`} /> Feature 1 with all details</h5>
                              <h5 className='mb-2 d-flex'><BiCheckboxChecked className={`main-color h4 ${isEng ? 'me-1' : 'ms-1'}`} /> Feature 1 with all details</h5>
                              <h5 className='mb-2 d-flex'><BiCheckboxChecked className={`main-color h4 ${isEng ? 'me-1' : 'ms-1'}`} /> Feature 1 with all details</h5>
                              <h5 className='mb-0 d-flex'><BiCheckboxChecked className={`main-color h4 ${isEng ? 'me-1' : 'ms-1'}`} /> Feature 1 with all details</h5>
                              <h5 className='mb-2 d-flex'><BiCheckboxChecked className={`main-color h4 ${isEng ? 'me-1' : 'ms-1'}`} /> Feature 1 with all details</h5>
                              <h5 className='mb-0 d-flex'><BiCheckboxChecked className={`main-color h4 ${isEng ? 'me-1' : 'ms-1'}`} /> Feature 1 with all details</h5>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

    </>
  )
}

