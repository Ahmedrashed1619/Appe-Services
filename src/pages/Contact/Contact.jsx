import React, { useEffect , useContext } from 'react';
import { langContext } from '../../componants/Context/store';
import WOW from 'wowjs';
import $ from 'jquery';



export default function About() {


  let { isEng } = useContext(langContext);

  useEffect(() => {
    $('.contact').addClass('active');
    return () => {
      $('.contact').removeClass('active');
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
              <h2 className='mb-3 text-white h1 wow fadeInDownBig text-capitalize' style={{fontWeight: '600'}} data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'Contact Us' : 'تواصــل معنــا'}</h2>
              <p className="mb-0 position-relative wow fadeIn" style={{color: '#ddd' , fontWeight: '400' , width: '80%'}} data-wow-duration="1s" data-wow-delay="1s">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
          </div>
      </header>

      {/* contact */}
      <section className="pb-5 pt-3" dir={isEng ? 'ltr' : 'rtl'}>
          <div className="container">
              <div className=" row gx-lg-5 gx-0 gy-5 d-flex justify-content-center align-items-center mt-3">
                  <div className="col-lg-6 col-11">
                    <div className="wow fadeInRight" data-wow-duration="1.5s">
                        <iframe title='google map' src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3453.9785859655112!2d31.3445833!3d30.0374722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDAyJzE0LjkiTiAzMcKwMjAnNDAuNSJF!5e0!3m2!1sen!2seg!4v1674870632809!5m2!1sen!2seg" width="100%" height="450" style={{border: '0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                  </div>
                  <div className="col-lg-6 col-11">
                      <form>
                          <label className='h5 wow fadeInLeft' data-wow-duration="1.5s" htmlFor="name">{isEng ? 'Full Name' : 'الإسـم كاـل'}</label>
                          <input id="name" type="text" name="name" required className="form-control mt-0 mb-3 mx-auto bg-light wow fadeInLeft" data-wow-duration="1.5s" placeholder="Enter your name.." />
                          
                          <label className='h5 wow fadeInRight' data-wow-duration="1.5s" htmlFor="email">{isEng ? 'Email' : 'الإيميـل'}</label>
                          <input id="email" type="email" name="email" required className="form-control mt-0 mb-3 mx-auto bg-light wow fadeInRight" data-wow-duration="1.5s" placeholder="email@gmail.com" />

                          <label className='h5 wow fadeInLeft' data-wow-duration="1.5s" htmlFor="phone">{isEng ? 'Mobile' : 'الموبايـل'}</label>
                          <input id="phone" type="tel" name="phone" required className="form-control mt-0 mb-3 mx-auto bg-light wow fadeInLeft" data-wow-duration="1.5s" placeholder="Enter your phone number" />

                          <label className='h5 wow fadeInRight' data-wow-duration="1.5s" htmlFor="message">{isEng ? 'Message' : 'الرسالــة'}</label>
                          <textarea id='message' className="form-control mb-4 mx-auto bg-light wow fadeInRight" data-wow-duration="1.5s"></textarea>

                          <div className="d-flex justify-content-center align-items-center wow fadeInUp" data-wow-duration="1.5s">
                              <button className='btn main-btn py-3 px-4 h6' style={{fontWeight: '600'}}>{isEng ? 'Send Message' : 'إرسـال الرسالــة'}</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </section>

    </>
  )
}
