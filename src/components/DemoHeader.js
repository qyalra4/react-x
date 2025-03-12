import React from 'react';
import { Link } from 'react-router-dom'; 
import '../css/DemoHeader.css';

function DemoHeader({ id, title }) {
  return (
    <header className="demo-header">
      <nav>
        <Link 
          to={`/work/${id}`} 
          className="demo-home-link"
        >
          «   
        </Link>

        <p className='titles'>{title}</p>
        <h1 className="demo-title">تجربة البرنامج #{id}</h1>
      </nav>
    </header>
  );
}

export default DemoHeader;