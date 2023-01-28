import React, { useContext } from 'react';
// import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { langContext } from '../../componants/Context/store';
import imgFooter from '../../images/Home/logozari.png';
import $ from 'jquery';



export default function Footer() {


    let { isEng } = useContext(langContext);

    const scrollTop = () => {
        $('html , body').animate({ scrollTop: 0 }, 300);
    }


    const navigateLinks = [
        {
            path: 'home',
            class: 'home',
            nameEn: 'Home',
            nameAr: 'الرئيسية'
        },
        {
            path: 'about',
            class: 'about',
            nameEn: 'About',
            nameAr: 'من نحـن'
        },
        {
            path: 'services',
            class: 'services',
            nameEn: 'Services',
            nameAr: 'الخدمــات'
        },
        {
            path: 'portfolio',
            class: 'portfolio',
            nameEn: 'Portfolio',
            nameAr: 'معرض الأعمال'
        },
        {
            path: 'blogs',
            class: 'blogs',
            nameEn: 'Blogs',
            nameAr: 'المدونـات'
        },
        {
            path: 'packages',
            class: 'packages',
            nameEn: 'Packages',
            nameAr: 'الباقــات'
        },
    ]


    const supportLinks = [
        {
            path: 'news',
            class: 'news',
            nameEn: 'News',
            nameAr: 'الأخبـار'
        },
        {
            path: 'gallery',
            class: 'gallery',
            nameEn: 'Gallery',
            nameAr: 'المعرض'
        },
        {
            path: 'contact',
            class: 'contact',
            nameEn: 'Contact Us',
            nameAr: 'تواصل معنـا'
        },
        // {
        //     path: 'jobs',
        //     class: 'jobs',
        //     nameEn: 'Jobs',
        //     nameAr: 'الوظائـف'
        // },
        {
            path: 'terms',
            class: 'terms',
            nameEn: 'Terms of Services',
            nameAr: 'شروط الخدمة'
        },
        {
            path: 'privacy',
            class: 'privacy',
            nameEn: 'Privacy Policy',
            nameAr: 'سياسة الخصوصية'
        }
    ]



    return (
        <>
            <footer id='footer' className='footer pt-5 pb-4 main-bg position-relative' dir={isEng ? 'ltr' : 'rtl'}>
                <span id="btnTopFooter" onClick={scrollTop} className={`position-absolute top-0 end-0 translate-middle main-color`} style={{cursor : 'pointer'}}>
                    <i className="fa-solid fa-chevron-up fs-3 p-3 bg-white rounded-circle shadow-lg"></i>
                </span>
                <div className="container-fluid container-xl">
                    <div className="row justify-content-lg-start justify-content-center gy-5 gx-lg-3 gx-0">

                        <div className="col-lg-4 col-11">
                            <div className="logo-footer">
                            <div className="cont-imgFooter">
                                <img src={imgFooter} className='mb-3' style={{width : '50%'}} alt="logo" />
                            </div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, soluta.</p>
                            <h5 className='my-4'>{isEng ? 'Follow Us' : 'تابعنـا'}</h5>
                            <div className="icons-footer d-flex align-items-center mb-3">
                                <a target="_blank" rel="noopener noreferrer" className={isEng ? 'mr-15' : 'ml-15'} href="https://www.facebook.com/ZARISolutionksa"><i
                                        className="fa-brands fa-facebook-f"></i></a>
                                <a target="_blank" rel="noopener noreferrer" className={isEng ? 'mr-15' : 'ml-15'} href="https://twitter.com/SolutionZari"><i
                                        className="fa-brands fa-twitter"></i></a>
                                <a target="_blank" rel="noopener noreferrer" className={isEng ? 'mr-15' : 'ml-15'} href="https://www.instagram.com/zarisolutionksa/"><i
                                        className="fa-brands fa-instagram"></i></a>
                                <a target="_blank" rel="noopener noreferrer" className={isEng ? 'mr-15' : 'ml-15'} href="https://wa.me/+966566770235"><i
                                        className="fa-brands fa-whatsapp"></i></a>
                                <a target="_blank" rel="noopener noreferrer" className={isEng ? 'mr-15' : 'ml-15'} href="https://www.linkedin.com/in/zari-solution-ksa-12717623b/"><i
                                        className="fa-brands fa-linkedin-in"></i></a>
                            </div>
                            </div>
                        </div>

                        <div className="col-lg-8 col-11">
                            <div className="row gy-4 gx-0">
                                <div className="col-md-4 col-6">
                                    <div className="navigate mt-lg-5">
                                        <h4 className='mb-4'>{isEng ? 'Navigation' : 'روابط هامه'}</h4>
                                        {navigateLinks.map((link , i) => (
                                            <NavLink key={i} to={`${link.path}`} className={`nav-link ${link.class}`}>{isEng ? link.nameEn : link.nameAr}</NavLink>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-md-4 col-6">
                                    <div className="navigate mt-lg-5">
                                        <div className="navigate mt-lg-5">
                                            <h4 className='mb-4'>{isEng ? 'Support' : 'روابط الدعم'}</h4>
                                            {supportLinks.map((link , i) => (
                                                <NavLink key={i} to={`${link.path}`} className={`nav-link ${link.class}`}>{isEng ? link.nameEn : link.nameAr}</NavLink>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="links-foot d-flex justify-content-center flex-column">
                                        <div className="navigate mt-lg-5">
                                            <h4 className="mb-4 contact">{isEng ? 'Contact us' : 'تواصــل معنـــا'}</h4>
                                            <div className="phone d-flex justify-content-start align-items-center mb-2">
                                                <span className={`${isEng ? 'me-3' : 'ms-3'}`}><i className="fa-solid fa-location-dot text-black"></i></span>
                                                <a rel='noopener noreferrer' target="_blank" className='mb-1 location' href="https://www.google.com/maps/place/24%C2%B049'57.9%22N+46%C2%B040'52.1%22E/@24.832747,46.6789603,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xbb9f0e7b1014cb34!8m2!3d24.832747!4d46.681149">{isEng ? '8491 Othman Bin Affaan Road Al Narjas - Riyadh - KSA.' : 'مكتب الرياض: 8491 طريق انس بن مالك تقاطع طريق عثمان بن عفان النرجس - الرياض - المملكة العربية السعودية.'}</a>
                                            </div>
                                            <div className="phone d-flex justify-content-start align-items-center mb-2">
                                                <span className={`${isEng ? 'me-3' : 'ms-3'}`}><i className="fa-solid fa-phone text-black"></i></span>
                                                <a rel='noopener noreferrer' target="_blank" className='mb-1' href="tel:+966920024403">{isEng ? ' +966 92 002 4403' : '4403 002 92 966+ '}</a>
                                            </div>
                                            <div className="d-flex justify-content-start align-items-center">
                                                <span className={`${isEng ? 'me-3' : 'ms-3'}`}><i className="fa-solid fa-envelope text-black"></i></span>
                                                <a rel='noopener noreferrer' target="_blank" className='mb-1' href="mailto: info@zarisolution.com">info@zarisolution.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div style={{width: '100%' , height: '1px' , backgroundColor: 'rgba(238, 238, 238, 0.75)' , marginBottom: '10px'}}></div>

                <h6 className='text-center mb-0' style={{color: 'rgba(238, 238, 238, 0.75)'}}>Copyright © 2022 Appe. All rights reserved.</h6> */}
            </footer>
        </>
    )
}