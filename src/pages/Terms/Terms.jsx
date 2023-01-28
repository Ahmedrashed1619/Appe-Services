import React, { useEffect , useContext } from 'react';
import { langContext } from '../../componants/Context/store';
import WOW from 'wowjs';
import $ from 'jquery';



export default function Terms() {


  let { isEng } = useContext(langContext);

  useEffect(() => {
    $('.terms').addClass('active');
    return () => {
      $('.terms').removeClass('active');
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
              <h2 className='mb-3 text-white h1 wow fadeInDownBig text-capitalize' style={{fontWeight: '600'}} data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'Terms of Services' : 'شروط الخدمــة'}</h2>
              <p className="mb-0 position-relative wow fadeIn" style={{color: '#ddd' , fontWeight: '400' , width: '80%'}} data-wow-duration="1s" data-wow-delay="1s">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
          </div>
      </header>

      {/* privacy */}
      <section className="py-5" dir={isEng ? 'ltr' : 'rtl'}>
          <div className="container">
            <div className="part mb-3">
              <h4 className='text-black mb-2' style={{fontWeight: '600'}}>{isEng ? 'Binding effect' : 'تأثيـر الربـط'}</h4>
              <p className='mb-0 text-muted'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda nulla, voluptatem libero doloremque labore error, blanditiis at optio dolore vitae aspernatur corporis reiciendis. Labore error qui hic consequatur est magnam eligendi? Asperiores cupiditate unde provident tempora, aliquid neque perferendis illum.</p>
            </div>
            <div className="part mb-3">
              <h4 className='text-black mb-2' style={{fontWeight: '600'}}>{isEng ? 'You’re over 18 years old' : 'ما فوق 18 سنـة'}</h4>
              <p className='mb-0 text-muted'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda nulla, voluptatem libero doloremque labore error, blanditiis at optio dolore vitae aspernatur corporis reiciendis. Labore error qui hic consequatur est magnam eligendi? Asperiores cupiditate unde provident tempora, aliquid neque perferendis illum.</p>
            </div>
            <div className="part mb-3">
              <h4 className='text-black mb-2' style={{fontWeight: '600'}}>{isEng ? 'License' : 'رخصــة'}</h4>
              <p className='mb-0 text-muted'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda nulla, voluptatem libero doloremque labore error, blanditiis at optio dolore vitae aspernatur corporis reiciendis. Labore error qui hic consequatur est magnam eligendi? Asperiores cupiditate unde provident tempora, aliquid neque perferendis illum.</p>
            </div>
            <div className="part mb-3">
              <h4 className='text-black mb-2' style={{fontWeight: '600'}}>{isEng ? 'Confidentiality' : 'خصوصيــة'}</h4>
              <p className='mb-0 text-muted'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda nulla, voluptatem libero doloremque labore error, blanditiis at optio dolore vitae aspernatur corporis reiciendis. Labore error qui hic consequatur est magnam eligendi? Asperiores cupiditate unde provident tempora, aliquid neque perferendis illum.</p>
            </div>
            <div className="part mb-3">
              <h4 className='text-black mb-2' style={{fontWeight: '600'}}>{isEng ? 'Spam policy' : 'سياسـة البريـد العشوائـي'}</h4>
              <p className='mb-0 text-muted'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda nulla, voluptatem libero doloremque labore error, blanditiis at optio dolore vitae aspernatur corporis reiciendis. Labore error qui hic consequatur est magnam eligendi? Asperiores cupiditate unde provident tempora, aliquid neque perferendis illum.</p>
            </div>
            <div className="part mb-3">
              <h4 className='text-black mb-2' style={{fontWeight: '600'}}>{isEng ? 'Testimonials' : 'توصيــات'}</h4>
              <p className='mb-0 text-muted'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda nulla, voluptatem libero doloremque labore error, blanditiis at optio dolore vitae aspernatur corporis reiciendis. Labore error qui hic consequatur est magnam eligendi? Asperiores cupiditate unde provident tempora, aliquid neque perferendis illum.</p>
            </div>
            <div className="part mb-3">
              <h4 className='text-black mb-2' style={{fontWeight: '600'}}>{isEng ? 'Availability' : 'الإتاحــة'}</h4>
              <p className='mb-0 text-muted'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda nulla, voluptatem libero doloremque labore error, blanditiis at optio dolore vitae aspernatur corporis reiciendis. Labore error qui hic consequatur est magnam eligendi? Asperiores cupiditate unde provident tempora, aliquid neque perferendis illum.</p>
            </div>
            <div className="part mb-3">
              <h4 className='text-black mb-2' style={{fontWeight: '600'}}>{isEng ? 'Marketing' : 'التســويق'}</h4>
              <p className='mb-0 text-muted'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda nulla, voluptatem libero doloremque labore error, blanditiis at optio dolore vitae aspernatur corporis reiciendis. Labore error qui hic consequatur est magnam eligendi? Asperiores cupiditate unde provident tempora, aliquid neque perferendis illum.</p>
            </div>
            <div className="part mb-3">
              <h4 className='text-black mb-2' style={{fontWeight: '600'}}>{isEng ? 'Copyright infringement' : 'إنتهــاك حقوق الملكيــة'}</h4>
              <p className='mb-0 text-muted'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda nulla, voluptatem libero doloremque labore error, blanditiis at optio dolore vitae aspernatur corporis reiciendis. Labore error qui hic consequatur est magnam eligendi? Asperiores cupiditate unde provident tempora, aliquid neque perferendis illum.</p>
            </div>
            <div className="part mb-3">
              <h4 className='text-black mb-2' style={{fontWeight: '600'}}>{isEng ? 'Warranties' : 'الضمانــات'}</h4>
              <p className='mb-0 text-muted'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda nulla, voluptatem libero doloremque labore error, blanditiis at optio dolore vitae aspernatur corporis reiciendis. Labore error qui hic consequatur est magnam eligendi? Asperiores cupiditate unde provident tempora, aliquid neque perferendis illum.</p>
            </div>
          </div>
      </section>

    </>
  )
}


