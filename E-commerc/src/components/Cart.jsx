import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems || []);

  const totalPrice = cartItems.reduce(
    (total, item) => total + (item.price || 0) * (item.quantity || 1),
    0
  );

  return (
    <div className="container my-5" dir="rtl">
      <h2 className="fw-bold mb-4" style={{ color: "#670b43" }}> سلة المشتريات</h2>
      {cartItems.length === 0 ? (
        <div className="text-center p-5 border rounded bg-light">
          <h3>السلة فارغة حالياً </h3>
          <Link   to="/" className="btn text-white fw-bold mt-3" style={{ backgroundColor: "#670b43" }}>
            العودة للرئيسية
          </Link>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-8">
            {cartItems.map((item, index) => (
              <div key={item.id || index} className="card mb-3 p-3 shadow-sm">
                <div className="row align-items-center">
                  <div className="col-md-3 text-center">
                    <img  src={item.image}  alt={item.title || item.name} style={{ width: "80px", height: "80px", objectFit: "contain" }} />
                  </div>
                  <div className="col-md-6">
                    <h5>{item.title || item.name}</h5>
                    <p className="text-muted small">{item.description}</p>
                    <p className="fw-bold" style={{ color: "#670b43" }}> السعر: {item.price} ر.س </p>
                  </div>
                  <div className="col-md-3 text-center">
                    <span className="badge bg-secondary fs-6">  الكمية: {item.quantity || 1} </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-md-4">
            <div className="card p-3 shadow-sm">
              <h4 className="fw-bold mb-3" style={{ color: "#670b43" }}>  الملخص  </h4>
              <h5>الإجمالي: {totalPrice.toFixed(2)} ر.س</h5>
              
              <Link to="/checkout"   className="btn text-white fw-bold w-100 mt-3 d-block text-center" style={{ backgroundColor: "#670b43" }}>
                إتمام الشراء
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;