import React from 'react';

function Footer() {
  return (
    <footer className="text-center py-3 mt-4 text-muted border-top rounded-4"  style={{ backgroundColor: '#670b43' }}>
      <p className="mb-0 fs-6 text-white ">جميع الحقوق محفوظة &copy; {new Date().getFullYear()} - نظامي الشامل</p>
    </footer>
  );
}

export default Footer;