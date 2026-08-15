import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const cartitems = useSelector((state) => state.cart.cartItems || []);
  const totalCount = cartitems.reduce((total, items) => total + items.quantity, 0);

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-dark fw-bold border-bottom shadow-sm sticky-top"
        style={{ backgroundColor: "#670b43" }}
        dir="rtl"
      >
        <div className="container">
          {/* اسم التطبيق */}
          <Link className="navbar-brand text-white fw-bold fs-4" to="/">
            E-Commerce
          </Link>

          {/* زر القائمة في الجوال */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* القائمة */}
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* روابط الصفحات */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* الرئيسية */}
              <li className="nav-item">
                <Link className="nav-link text-white fw-bold" to="/">
                  الرئيسية
                </Link>
              </li>

              {/* حولنا */}
              <li className="nav-item">
                <Link className="nav-link text-white fw-bold" to="/about">
                  حولنا
                </Link>
              </li>

              {/* اتصل بنا */}
              <li className="nav-item">
                <Link className="nav-link text-white fw-bold" to="/callus">
                  اتصل بنا
                </Link>
              </li>
            </ul>

            {/* الأزرار */}
            <div className="d-flex align-items-center gap-2">
              {/* سلة المشتريات */}
              <Link
                to="/cart"
                className="btn btn-outline-light position-relative fw-bold"
                title="سلة المشتريات"
              >
                🛒 <span className="ms-1">السلة</span>
                {/* عدد المنتجات */}
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {totalCount}
                </span>
              </Link>

              {/* زر اللغة */}
              <button
                className="btn btn-outline-light btn-sm fw-bold"
                type="button"
              >
                English
              </button>

              {/* تسجيل الدخول */}
              <Link
                to="/login"
                className="btn btn-light text-dark btn-sm px-3 fw-bold"
              >
                تسجيل الدخول
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;