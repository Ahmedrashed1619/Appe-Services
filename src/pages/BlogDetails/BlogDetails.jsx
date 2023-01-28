import React, { useContext, useEffect } from 'react';
import { langContext } from '../../componants/Context/store';
import WOW from 'wowjs';
import $ from 'jquery';
import img from '../../images/Blogs/Rectangle 43.png';
import { FaUserEdit } from 'react-icons/fa';


export default function BlogDetails() {


  useEffect(() => {
    $('html , body').animate({ scrollTop: 0 }, 200);
  }, []);


  useEffect(() => {
    $('.blogs').addClass('active');
    return () => {
      $('.blogs').removeClass('active');
    }
  }, [])


  useEffect(() => {
    new WOW.WOW().init();
  }, []);


  let { isEng } = useContext(langContext);



  return (
    <>
      {/* top */}
      <header className="top-wave">
          <div className="container h-100 d-flex justify-content-center align-items-center text-center flex-column">
              <h2 className='mb-3 text-white h1 wow fadeInDownBig text-capitalize' style={{fontWeight: '600'}} data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'Blog Name' : 'إســم المدونــة'}</h2>
              <p className="mb-0 position-relative wow fadeIn" style={{color: '#ddd' , fontWeight: '400' , width: '80%'}} data-wow-duration="1s" data-wow-delay="1s">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
          </div>
      </header>

      {/* Blogs */}
      <section className='pt-3 pb-5' dir={isEng ? 'ltr' : 'rtl'}>
          <div className="container">
              <div className="row justify-content-center align-items-center flex-column">
                  <div className="col-lg-12 col-11">
                      <div className="img-blog mb-3">
                          <img src={img} className='w-100 wow fadeInDown' data-wow-duration="1s" data-wow-delay="0.5s" style={{minHeight: '300px' , maxHeight: '500px'}} alt="img-blog" />
                      </div>
                      <div className="row gy-3 gx-0 d-flex justify-content-md-between align-items-center">
                          <div className="col-md-6">
                              <div className="name-blog-author d-flex justify-content-between flex-column wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s">
                                  <h4 className='fw-bold mb-2'>{isEng ? 'Blog Title Here' : 'عنوان المدونة هنـا'}</h4>
                                  <h6 className='second-color mb-0'><FaUserEdit className={`main-color ${isEng ? 'me-1' : 'ms-1'}`}/> {isEng ? 'Author' : 'المؤلف'}:  <span className='main-color h5 fw-bold'> {isEng ? 'Ahmed Rashed' : 'أحمد راشد'}</span></h6>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="date wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                                  <h6 className={`second-color ${isEng ? 'text-md-end' : 'text-md-start'} mb-0`}>{isEng ? 'Published in 2 Oct 2022' : 'نشرت في 2 أكتوبر 2022'}</h6>
                              </div>
                          </div>
                      </div>
                      <div className="parag-bolg mt-3 wow fadeIn" data-wow-duration="1s" data-wow-delay="1s">
                          <p className='mb-0' style={{color : '#656565'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat reiciendis laudantium accusamus totam, esse sequi maxime voluptatem voluptatum dolore deserunt, saepe quas. Eaque aut recusandae perferendis dolorem ipsam laudantium eligendi.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error repellendus possimus itaque officiis aliquid aut asperiores iusto delectus ducimus maiores at aspernatur, consectetur dolores debitis culpa ut modi est nihil.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, doloribus. Inventore quas consequatur nostrum ex quae, ut odit laborum repellendus cum ipsam maxime eos quis nihil id deserunt numquam fuga!
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto mollitia excepturi autem atque sit? Animi labore corporis assumenda ipsa non obcaecati deleniti mollitia quisquam qui sit fuga fugit, officia recusandae.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum rerum, odio porro facere aperiam vitae illo vero, atque consectetur delectus reiciendis molestiae eius sed sapiente, laboriosam culpa perferendis similique sequi minus. Inventore esse maiores, perspiciatis incidunt itaque quis, fuga exercitationem vel sed omnis, autem aliquam quaerat! Unde dolorem numquam quidem.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat dicta delectus cupiditate quasi dolor accusantium nostrum labore voluptates reiciendis ut vero libero accusamus sapiente suscipit culpa excepturi, sequi doloribus earum totam ab in impedit non! Ipsam explicabo magnam vel necessitatibus temporibus esse quae vitae voluptatum velit, fugit aliquam. Non, aperiam.
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor possimus totam vero voluptatem nesciunt quisquam officiis eaque nisi! Magnam adipisci recusandae et tenetur soluta quae minus, assumenda illum nihil nisi, maiores distinctio animi ipsam nobis natus rerum fugit fuga quia qui hic. Recusandae alias porro enim! Explicabo cumque omnis dolor voluptates odit pariatur numquam porro officiis? Laudantium perspiciatis, totam quaerat, quas officiis, corrupti quisquam est omnis nisi unde animi harum sequi vitae! Ex quisquam asperiores ipsam amet exercitationem beatae vel nobis dolor eaque quasi itaque sint dignissimos quod, porro repellat ratione. Illum totam ea nostrum iste ipsam fuga voluptatibus sint?
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  )
}

