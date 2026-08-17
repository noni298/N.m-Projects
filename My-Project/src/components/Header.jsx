import React from 'react';
import { Link } from 'react-router-dom';
import { FaTasks, FaPills, FaDumbbell, FaChartPie } from 'react-icons/fa';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark rounded-4 shadow-sm mb-4 px-4" style={{ backgroundColor: '#670b43' }}>
      <span className="navbar-brand fw-bold fs-4">نظامي الشامل</span>
      <div className="navbar-nav ms-auto d-flex flex-row gap-3 flex-wrap">
        <Link className="nav-link text-white d-flex align-items-center gap-1 fs-5" to="/">
          <FaChartPie /> الملخص والتشجيع
        </Link>
        <Link className="nav-link text-white d-flex align-items-center gap-1 fs-5" to="/tasks">
          <FaTasks /> المهام
        </Link>
        <Link className="nav-link text-white d-flex align-items-center gap-1 fs-5" to="/meds">
          <FaPills /> العلاجات
        </Link>
        <Link className="nav-link text-white d-flex align-items-center gap-1 fs-5" to="/sports">
          <FaDumbbell /> الرياضة والسكر
        </Link>
      </div>
    </nav>
  );
}

export default Header;