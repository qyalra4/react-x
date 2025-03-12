import React from 'react';
import { Link } from 'react-router-dom';
import '../css/App.css';


function HomePage() {
  return (
    <div className='pageStyle'>
       
     {/* ....... الرىيسية ....... */}

     <div className='mainTop'>
       <section className='topLeft'>
        <h1 className='trtlemain'> ياسين مثنى #1 </h1>

        <h2 className='titlesMain'> توفر أعمال تصميم برامج الكمبيوتر حلولاً تساعدك على إدارة أعمالك رقميًا والحصول على النتائج المرجوة. </h2>
        <h2 className='titlesMain'> تصميم برامج حاسوبية (قواعد بيانات) لكافة الأعمال الإدارية حسب الطلب. </h2>
        <h2 className='titlesMain'> تصميم واستضافة المواقع الإلكترونية للشركات والمؤسسات التجارية. </h2>
        <h2 className='titlesMain'> الاستراتيجيات المبنية على البيانات </h2>
        <h2 className='titlesMain'> التميز الإبداعي </h2>
        <h2 className='titlesMain'> زيارات لأماكن العمل لإتمام العمل عند الطلب </h2>
        
        <h2 className='titleserror'> 
        <Link to="/works" className="buttonPro"> اكتشف المشاريع </Link>
        </h2>
       </section>

       <section className='topRight'>
       <img src={ require('../images/mainImage.png')}  alt="main" className="image" />
       </section>

       <hr className='breack'/>
     </div>
     {/* ....... المشاريع ....... */}
     
      <h1 className='proNews' dir='rtl'>أحدث مشاريعنا</h1>

     <div className='projectsNews'>
      <div className='pro-cards'>
        <Link to={'/'} className='Links'>
        <div className='card' dir='rtl'>
          <img src={require ('../images/1.jpg')} className='image-card' />
          <h2 > برنامج ادارة العيادات الطبية  </h2>
        </div>
        </Link>

        <Link to={'/'} className='Links'>
        <div className='card' dir='rtl'>
          <img src={require ('../images/2.jpg')} className='image-card' />
          <h2 > برنامج ادارة شركات تصنيع احدث اصدار </h2>
        </div>
        </Link>

        <Link to={'/'} className='Links'>
        <div className='card' dir='rtl'>
          <img src={require ('../images/3.jpg')} className='image-card' />
          <h2 > برنامج ادارة شركات تصنيع احدث اصدار </h2>
        </div>
        </Link>

        <Link to={'/'} className='Links'>
        <div className='card' dir='rtl'>
          <img src={require ('../images/4.jpg')} className='image-card' />
          <h2 > برنامج ادارة شركات تصنيع احدث اصدار </h2>
        </div>
        </Link>
      </div>
     </div>

     <h1 className='proNews' dir='rtl'>أفضل المشاريع</h1>
     <div className='projectsNews'>
      <div className='pro-cards'>
        <Link to={'/'} className='Links'>
        <div className='card' dir='rtl'>
          <img src={require ('../images/5.jpg')} className='image-card' />
          <h2 > برنامج ادارة شركات تصنيع احدث اصدار </h2>
        </div>
        </Link>

        <Link to={'/'} className='Links'>
        <div className='card' dir='rtl'>
          <img src={require ('../images/6.jpg')} className='image-card' />
          <h2 > برنامج ادارة شركات تصنيع احدث اصدار </h2>
        </div>
        </Link>

        <Link to={'/'} className='Links'>
        <div className='card' dir='rtl'>
          <img src={require ('../images/7.jpg')} className='image-card' />
          <h2 > برنامج ادارة شركات تصنيع احدث اصدار </h2>
        </div>
        </Link>

        <Link to={'/'} className='Links'>
        <div className='card' dir='rtl'>
          <img src={require ('../images/8.jpg')} className='image-card' />
          <h2 > برنامج ادارة شركات تصنيع احدث اصدار </h2>
        </div>
        </Link>
      </div>
     </div>
     
    </div>
  );
}

export default HomePage;
