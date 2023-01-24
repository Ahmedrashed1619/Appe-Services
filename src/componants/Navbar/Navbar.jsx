import React, { useEffect , useContext, useState } from 'react';
import imgLogo from '../../images/Home/logozari.png';
import { Link, NavLink } from 'react-router-dom';
import { langContext } from '../Context/store';
import $ from 'jquery';



export default function Navbar() {


    const [isActive, setActive] = useState(false);


    const handelClick = () => {
        setActive(!isActive);
    }


    const closeNavbar = () => {
        if(isActive === true && $('body, html').width() < 992) {
            setActive(!isActive)
            $('.navbar .navbar-toggler').attr('aria-expanded', 'false');
            $('.navbar .collapse').removeClass('show')
        }
    }


    let { isEng , changeLang } = useContext(langContext);


    function changeDir() {
        if (isEng === false) {
            $('.language i').css({'marginRight' : '0' , 'marginLeft' : '4px'});
        }

        else {
            $('.language i').css({'marginRight' : '4px' , 'marginLeft' : '0'});
        }
    }

    useEffect(() => {
        changeDir();

        return () => {
            changeDir();
        }
    }, [isEng]);



    const totalLinks = [
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
            nameAr: 'الحـزم'
        },
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
        {
            path: 'jobs',
            class: 'jobs',
            nameEn: 'Jobs',
            nameAr: 'الوظائـف'
        },
    ]



    return (
        
        <nav id='navbar' className="navbar navbar-expand-lg fixed-top py-3 nav-total" dir={isEng ? 'ltr' : 'rtl'}>
            <div className="container special-w">
                <NavLink to='home' className="navbar-brand"><img src={imgLogo} alt="zari logo" style={{width: '100px'}} /></NavLink>
                <button className={`navbar-toggler ${isActive ? 'convert' : ''}`} onClick={handelClick} type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className={`navbar-nav ${isEng ? 'me-auto' : 'ms-auto'} mb-2 mb-lg-0 ${isEng ? 'ms-0 ms-lg-3' : 'me-0 me-lg-3'} py-3 py-lg-0 fw-bold`}>

                        {totalLinks.map((link , i) => (
                            <li key={i} className="nav-item">
                                <NavLink to={`${link.path}`} onClick={closeNavbar} className={`nav-link ${link.class}`} aria-current="page">{isEng ? link.nameEn : link.nameAr}</NavLink>
                            </li>
                        ))}
                        
                    </ul>
                    <div className="d-flex justify-content-center align-items-center my-3 my-xl-0">
                        <div className="custome d-flex justify-content-center align-items-center">
                            <div className="language py-1 px-2" onClick={() => {
                                changeLang();
                                closeNavbar()
                            }}>
                                <i className="fa-solid fa-globe fs-6"></i>
                                {/* <button className='py-1'>{isEng ? 'العـربـيــة' : 'English'}</button> */}
                                <button className='py-1'>{isEng ? 'Ar' : 'En'}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}