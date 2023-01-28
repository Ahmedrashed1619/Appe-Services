import React, { useEffect , useContext } from 'react';
import { langContext } from '../../componants/Context/store';
import WOW from 'wowjs';
import $ from 'jquery';



export default function Privacy() {


  let { isEng } = useContext(langContext);

  useEffect(() => {
    $('.privacy').addClass('active');
    return () => {
      $('.privacy').removeClass('active');
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
              <h2 className='mb-3 text-white h1 wow fadeInDownBig text-capitalize' style={{fontWeight: '600'}} data-wow-duration="1s" data-wow-delay="0.5s">{isEng ? 'Privacy Policy' : 'سياســة الخصوصيــة'}</h2>
              <p className="mb-0 position-relative wow fadeIn" style={{color: '#ddd' , fontWeight: '400' , width: '80%'}} data-wow-duration="1s" data-wow-delay="1s">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.</p>
          </div>
      </header>

      {/* privacy */}
      <section className="py-5" dir={isEng ? 'ltr' : 'rtl'}>
          <div className="container">
              <p className='wow fadeInUp' data-wow-duration="1s" data-wow-delay="1s">Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nemo quo aliquid distinctio omnis similique cupiditate minus dolore itaque dolor alias, magni accusantium nesciunt! Amet deleniti voluptates nesciunt doloremque consectetur saepe, quaerat odio temporibus in placeat quibusdam accusantium ducimus pariatur labore voluptatem minima harum. Eligendi delectus cupiditate reprehenderit labore minima? Reiciendis quidem, ea blanditiis sit atque voluptate quos aliquam molestias! Et illo doloribus animi. Quibusdam corporis rerum suscipit similique nobis est impedit consequatur aliquam atque laboriosam minima, beatae corrupti quo hic ea. Aspernatur eius ratione aliquid quam! Exercitationem itaque minus, explicabo ipsa enim delectus porro unde ratione, voluptatem iure rem. Tempora, autem quidem ratione delectus quod eveniet impedit! Facilis saepe vel magnam modi iusto. Excepturi consequuntur, quisquam molestiae dicta, repudiandae qui aut fuga ratione enim cum commodi nostrum vel accusantium laboriosam in assumenda facilis inventore modi vero. A, eum. Assumenda necessitatibus aliquid vero cum et beatae quos esse numquam aut maiores? Et, voluptas nostrum sint maxime veniam facere repudiandae quasi expedita error est commodi reiciendis facilis ullam quibusdam quam iure veritatis fuga cum aspernatur temporibus? Obcaecati modi neque, labore qui natus, repudiandae id ipsam quis rerum officiis impedit iure deserunt vitae itaque sed assumenda repellat vel commodi molestias quidem fugit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus ipsum commodi in harum, laborum repudiandae culpa quos molestias corporis sunt illum! Fugiat numquam animi inventore ducimus ratione vel at facilis eligendi aliquid porro obcaecati qui cupiditate, dolorem facere neque veritatis quibusdam perspiciatis cum doloribus id culpa. Debitis, eaque ipsam? Facere a quos obcaecati voluptates at aut pariatur, sit exercitationem facilis porro quibusdam neque veritatis deserunt quod inventore incidunt sint consequuntur reprehenderit? Saepe, accusantium ipsam error dolore a tempora pariatur aspernatur odit facilis eaque provident, maxime rem eum excepturi et odio sit dolores atque! Optio error quia fugiat nam facere quos reprehenderit explicabo unde debitis quo sed, incidunt voluptates quasi quam delectus numquam, molestiae repellendus nulla dolore eligendi hic! Hic ipsa veniam id laudantium vero nihil, illum ad doloribus ullam. Ea velit a ducimus voluptates molestiae nemo qui dolorum tenetur ratione sed odit consectetur cumque ullam molestias dolore reiciendis accusantium aliquid soluta, sunt nesciunt minima culpa quibusdam! Esse, consequatur, hic debitis dignissimos voluptas quia voluptatem fugiat voluptatibus quam similique soluta. Quis eligendi aspernatur, ullam quae saepe velit repellendus. Fugit voluptatibus nihil ducimus rerum sed ratione quam ea earum, dolorem, beatae, provident error delectus! Nulla earum blanditiis iste porro consectetur recusandae iusto.</p>
          </div>
      </section>

    </>
  )
}

