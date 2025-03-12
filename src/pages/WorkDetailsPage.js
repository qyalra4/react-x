import React from 'react';
import { useParams, Link } from 'react-router-dom';
import '../css/WorksPage.css';
import worksData from './worksData';

function WorkDetailsPage() {
  const { id } = useParams();
  const work = worksData.find(work => work.id === parseInt(id));

  if (!work) {
    return <div>العمل غير موجود</div>;
  }

  return (
    <div className="page-style detailss">
      
      <div className="details-container">
        <div className="details-image">
          <img src={work.image_main} alt={work.title} className="image-style" />
          <div className="imagesPro">
            <img src={work.sub_1} alt={work.title} className="imageItems" />
            <img src={work.sub_2} alt={work.title} className="imageItems" />
            <img src={work.sub_3} alt={work.title} className="imageItems" />
          </div>
        </div>
        <div className="details-info">
          <p className="title"><strong>العنوان:</strong> {work.title}</p>
          <p className="description"><strong>الوصف:</strong> {work.description}</p>
          <p className="datacate"><strong>الفئة:</strong> {work.category}</p>
          <p className="datacate"><strong>تاريخ الإنشاء:</strong> {work.date}</p>
          <Link to={`/demo/${work.id}`} className="back-button">
            تجربة البرنامج
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WorkDetailsPage;
