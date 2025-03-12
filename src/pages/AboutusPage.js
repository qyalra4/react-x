//----------- AboutusPage ------------
import React, { useState } from 'react';
import '../css/aboutus.css';

// استيراد الفيديوهات والصور المحلية
import video1 from '../videos/video1.mp4';
import video2 from '../videos/video2.mp4';
import video3 from '../videos/video1.mp4';
import mainImage from '../images/mainImage.png';
import thumb1 from '../images/box.jpg';
import thumb2 from '../images/box.jpg';
import thumb3 from '../images/box.jpg';

function AboutusPage() {
  // مصفوفة الفيديوهات المحلية مع الصور المصغرة
  const videos = [
    { id: 1, src: video1, thumbnail: thumb1 },
    { id: 2, src: video2, thumbnail: thumb2 },
    { id: 3, src: video3, thumbnail: thumb3 },
  ];
  const defaultVideoSource = videos[0].src;
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(defaultVideoSource);

  return (
    <div className="aboutusPage">
      {/* القسم الأول */}
      <header className='heroSection'>
        <div className='overlay'></div>
        <div className='heroContent'>
          <h1 className='heroTitle'>صناعة المستقبل الرقمي</h1>
          <p className='heroSubtitle'>
              شركة سوفت واير  الذكية منذ 2020   
          </p>
          <button className='ctaButton' onClick={() => setModalOpen(true)}>
            اكتشف المزيد
          </button>
        </div>
      </header>

      {/* قسم العرض (Tow Section) */}
      <section className="towSection">
        <h1 className="topTow">
          Build or extend your <span className="highlight">Software_</span> development team
        </h1>
        <div className="bottomtow">
          <img src={require ('../images/box.jpg')} alt="BoX" className="image"/>
          <div className="items">
            <h1>Strategies that get you on the path to success</h1>
            <h2>
              Scale your software operations through a custom engineering team. Meet the    of your company’s operations with a high-performing nearshore team skilled in the technologies you need.
            </h2>
          </div>
        </div>
      </section>

      {/* قسم الإحصائيات */}
      <section className='statsSection'>
        <div className='statsGrid'>
          <div className='statCard'>
            <div className='statIcon'>🚀</div>
            <h3 className='statNumber'>150+</h3>
            <p className='statText'>مشروع ناجح</p>
          </div>
          <div className='statCard'>
            <div className='statIcon'>👨🏻‍💻</div>
            <h3 className='statNumber'>98%</h3>
            <p className='statText'>عملاء سعداء</p>
          </div>
          <div className='statCard'>
            <div className='statIcon'>🏆</div>
            <h3 className='statNumber'>50+</h3>
            <p className='statText'>جائزة عالمية</p>
          </div>
        </div>
      </section>

      {/* قسم من نحن */}
      <section className='aboutSection'>
        <div className='aboutContent'>
          <div className='aboutText'>
            <h2 className='sectionTitle'>من نحن</h2>
            <p className='aboutDescription'>
              نقدم حلولًا برمجية مبتكرة تجمع بين الإبداع والتكنولوجيا الحديثة لتلبية احتياجات عملائنا وتحقيق رؤيتهم.
            </p>
            <ul className='featuresList'>
              <li className='featureItem'>
                <span className='checkIcon'>✓</span> تطوير برمجيات مخصصة
              </li>
              <li className='featureItem'>
                <span className='checkIcon'>✓</span> حلول الذكاء الاصطناعي
              </li>
              <li className='featureItem'>
                <span className='checkIcon'>✓</span> تصميم واجهات تفاعلية
              </li>
              <li className='featureItem'>
                <span className='checkIcon'>✓</span> دعم فني متواصل
              </li>
            </ul>
          </div>
          <div className='aboutImage'>
            <img src={mainImage} className='imageFrame' alt="من نحن" />
          </div>
        </div>
      </section>

      {/* قسم فريق الخبراء -- مصفوفة --*/}
      <section className='teamSection'>
        <h2 className='sectionTitle' dir='rtl'>فريق الخبراء</h2>
        <div className='teamGrid'>
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className='teamMemberCard'>
              <div className='memberPhoto'><img src={require ('../images/logo.jpg')} style={{width: '100%', height: '100%', borderRadius: 10,}}/></div>
              <h3 className='memberName'>محمد أحمد</h3>
              <p className='memberRole'>كبير المطورين</p>
              <div className='socialIcons'>
                <a href="#" className='socialLink'>LinkedIn</a>
                <a href="#" className='socialLink'>GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* قسم آراء العملاء */}
      <section className='testimonialSection'>
        <h2 className='sectionTitle' dir='rtl'>آراء العملاء</h2>
        <div className='testimonialGrid'>
          {[
            { id: 1, name: "أحمد", feedback: "خدمة ممتازة ودعم فني رائع." },
            { id: 2, name: "سارة", feedback: "تحول رقمي حقيقي بفضل تقنيات الشركة." },
            { id: 3, name: "يوسف", feedback: "حلول مبتكرة وفريق محترف." },
          ].map((testimonial) => (
            <div key={testimonial.id} className='testimonialCard'>
              <p className='testimonialFeedback'>"{testimonial.feedback}"</p>
              <h4 className='testimonialName'>{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* قسم الخدمات الجديد */}
      <section className="servicesSection">
        <h2 className="sectionTitle">خدماتنا</h2>
        <div className="servicesGrid">
          <div className="serviceCard">
            <div className="serviceIcon">💻</div>
            <h3>تطوير الويب</h3>
            <p>حلول متكاملة لتطوير مواقع حديثة تضمن الأداء العالي والتجاوب مع كافة الأجهزة.</p>
          </div>
          <div className="serviceCard">
            <div className="serviceIcon">📱</div>
            <h3>تطبيقات الهواتف</h3>
            <p>تصميم وبرمجة تطبيقات ذكية لأنظمة iOS وAndroid مع تجربة مستخدم متميزة.</p>
          </div>
          <div className="serviceCard">
            <div className="serviceIcon">🎨</div>
            <h3>تصميم واجهات المستخدم</h3>
            <p>ابتكار تصميمات جذابة وتفاعلية لتحسين تجربة المستخدم وتعزيز العلامة التجارية.</p>
          </div>
          <div className="serviceCard">
            <div className="serviceIcon">☁️</div>
            <h3>حلول السحابة</h3>
            <p>دمج وتطوير حلول سحابية ترفع من كفاءة العمليات التشغيلية وتحقق مرونة الأعمال.</p>
          </div>
        </div>
      </section>

      {/* قسم تواصل معنا */}
      <section className="contactSection">
        <h2 className="sectionTitle">تواصل معنا</h2>
        <form className="contactForm">
          <input type="text" placeholder="الاسم" required />
          <input type="email" placeholder="البريد الإلكتروني" required />
          <textarea placeholder="رسالتك" required></textarea>
          <button type="submit">إرسال</button>
        </form>
      </section>

      {/* النافذة المنبثقة للفيديو */}
      {isModalOpen && (
        <div className='modalOverlay'>
          <div className='modalContainer'>
            <button className='modalCloseButton' onClick={() => setModalOpen(false)}>
              &times;
            </button>
            <div className='modalContent'>
              {/* القسم الأيسر: عرض الفيديو */}
              <div className='modalLeft'>
                <video
                  src={currentVideo}
                  className='videoStyle'
                  autoPlay
                  loop
                  controls
                />
              </div>
              {/* القسم الأيمن: معلومات الشركة والاختيارات */}
              <div className='modalRight'>
                <div className='modalRightTop'>
                  <h2 className='companyName'> ياسين مثنى </h2>
                  <ul className='featuresListModal'>
                    <li className='featureItemModal'>✓ جودة عالية في التنفيذ</li>
                    <li className='featureItemModal'>✓ فريق متخصص ومحترف</li>
                    <li className='featureItemModal'>✓ حلول مبتكرة باستخدام أحدث التقنيات</li>
                    <li className='featureItemModal'>✓ دعم فني متواصل 24/7</li>
                  </ul>
                </div>
                <div className='modalRightBottom'>
                  {videos.map((video) => (
                    <img
                      key={video.id}
                      src={video.thumbnail}
                      alt={`Thumbnail ${video.id}`}
                      className='thumbnail'
                      onClick={() => setCurrentVideo(video.src)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


export default AboutusPage;
