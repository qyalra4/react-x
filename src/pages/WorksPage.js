import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/WorksPage.css';
import worksData from '../pages/worksData';

// مكون الصفحة الرئيسية
function WorksPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // تصفية الأعمال بناءً على البحث
  const filteredWorks = worksData.filter(work =>
    work.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // الانتقال إلى صفحة التفاصيل
  const handleCardClick = (id) => {
    navigate(`/work/${id}`);
  };

  return (
    <div className="page-style">
      <h1 className='h1-style'>جميع الأعمال</h1>
      <input
        type="text"
        placeholder="ابحث عن عمل..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input-style"
      />

      {filteredWorks.length === 0 ? (
        // عرض رسالة الخطأ إذا لم توجد نتائج
        <div className="error-message">
          <p>⚠️ لم يتم العثور على أعمال تطابق بحثك: "{searchTerm}"</p>
          <button 
            className="clear-search-btn"
            onClick={() => setSearchTerm('')}
          >
            مسح البحث
          </button>
        </div>
      ) : (
        // عرض النتائج إذا وجدت
        <div className="grid-style">
          {filteredWorks.map(work => (
            <div
              key={work.id}
              className="card-style"
              onClick={() => handleCardClick(work.id)}
            >
              <img src={work.image} alt={work.title} className="image-style" />
              <h3>{work.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WorksPage;