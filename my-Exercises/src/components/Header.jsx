import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav
        className="navbar navbar-expand-lg navbar-dark fw-bold border-bottom shadow-sm sticky-top"
        style={{ backgroundColor: "#670b43" }}
        dir="rtl"
      >
        <div className="container">
          <Link className="navbar-brand text-white fw-bold fs-4" to="/">
            متجري
          </Link>

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

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white fw-bold" to="/">
                  الرئيسية
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white fw-bold" to="/about">
                  حولنا
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-white fw-bold" to="/callus">
                  اتصل بنا
                </Link>
              </li>
            </ul>

            <div className="d-flex align-items-center gap-3">
              <form className="d-flex" role="search">
                <input
                  className="form-control form-control-sm"
                  type="search"
                  placeholder="ابحث هنا..."
                  aria-label="Search"
                />
              </form>

              <button
                className="btn btn-outline-light btn-sm fw-bold"
                type="button"
              >
                English
              </button>

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