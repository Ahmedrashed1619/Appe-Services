
import React from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Layout from './componants/Layout/Layout';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import ServiceDetails from './pages/ServiceDetails/ServiceDetails';
import Portfolio from './pages/Portfolio/Portfolio';
import PortfolioDetails from './pages/PortfolioDetails/PortfolioDetails';
import Blogs from './pages/Blogs/Blogs';
import BlogDetails from './pages/BlogDetails/BlogDetails';
import Packages from './pages/Packages/Packages';
import News from './pages/News/News';
import NewsDetails from './pages/NewsDetails/NewsDetails';
import Gallery from './pages/Gallery/Gallery';
import Contact from './pages/Contact/Contact';
import Jobs from './pages/Jobs/Jobs';
import JobDetails from './pages/JobDetails/JobDetails';
import Privacy from './pages/Privacy/Privacy';
import Terms from './pages/Terms/Terms';
import Notfound from './pages/Notfound/Notfound';





export default function App() {


    let routers = createHashRouter([
      { path: '/' , element: <Layout /> , children: [

        { index: true , element: <Home /> },
        { path: 'about' , element: <About /> },
        { path: 'services' , element: <Services /> },
        { path: 'services/:id' , element: <ServiceDetails /> },
        { path: 'portfolio' , element: <Portfolio /> },
        { path: 'portfolio/:id' , element: <PortfolioDetails /> },
        { path: 'blogs' , element: <Blogs /> },
        { path: 'blogs/:id' , element: <BlogDetails /> },
        { path: 'packages' , element: <Packages /> },
        { path: 'news' , element: <News /> },
        { path: 'news/:id' , element: <NewsDetails /> },
        { path: 'gallery' , element: <Gallery /> },
        { path: 'contact' , element: <Contact /> },
        { path: 'jobs' , element: <Jobs /> },
        { path: 'jobs/:id' , element: <JobDetails /> },
        { path: 'privacy' , element: <Privacy /> },
        { path: 'terms' , element: <Terms /> },
        { path: '*' , element: <Notfound /> }
        
      ]}
    ])



  return (
    <>
      <RouterProvider router={routers} />
    </>
  )
}

