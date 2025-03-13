import React from 'react';
import { useParams, Link } from 'react-router-dom';
import DemoHeader from '../components/DemoHeader';
import worksData from './worksData';
import '../css/iframe.css';

function DemoFramePage() {
  const { id } = useParams();
  const work = worksData.find(work => work.id === parseInt(id));

  if (!work) {
    return <div className='error'>العمل غير موجود</div>;
  }

  return (
    <div className="demo-frame-container">
      <DemoHeader id={id} title={work.title} />
     <iframe 
       src={process.env.PUBLIC_URL + '/demos/pro1.html'}
       title={`تجربة برنامج ${work.title}`}
       className="demo-frame"
       allowFullScreen
/>


      <iframe width="560" height="280" className="demo-phone"
         src="https://www.youtube.com/embed/YEQqHbWJUCY?si=zMn9UG3fpvTZhhJV" 
         title="YouTube video player" 
         frameborder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         referrerpolicy="strict-origin-when-cross-origin" 
         allowfullscreen>
          
      </iframe>

      <div className='phone'>
        عزيزي المستخدم لتجربة البرنامج يجب عليك فتح الموقع من جهاز PS او Laptop لأتمام العملية 
      </div>

    </div>
  );
}

export default DemoFramePage;
