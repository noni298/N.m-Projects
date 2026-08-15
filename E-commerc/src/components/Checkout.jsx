import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 1), 0);

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    cardNumber: "",
    expiry: "",
    cvv: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payment-success", { 
      state: { orderDetails: formData, totalPrice, items: cartItems } 
    });
  };

  return (
    <div className="container my-5" dir="rtl">
      <h2 className="fw-bold mb-4" style={{ color: "#670b43" }}>إتمام عملية الشراء</h2>

      <form onSubmit={handleSubmit}>
        <div className="row g-4">
          
          <div className="col-lg-7">
            <div className="card p-4 shadow-sm border-0 mb-4">
              <h4 className="fw-bold mb-3" style={{ color: "#670b43" }}>1. بيانات التوصيل</h4>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label fw-bold">الاسم الكامل</label>
                  <input type="text" name="fullName" className="form-control" required onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-bold">رقم الجوال</label>
                  <input type="tel" name="phone" className="form-control" required onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-bold">البريد الإلكتروني</label>
                  <input type="email" name="email" className="form-control" required onChange={handleChange} />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-bold">المدينة</label>
                  <input type="text" name="city" className="form-control" required onChange={handleChange} />
                </div>
                <div className="col-12">
                  <label className="form-label fw-bold">العنوان التفصيلي</label>
                  <textarea name="address" className="form-control" rows="2" required onChange={handleChange}></textarea>
                </div>
              </div>
            </div>

            <div className="card p-4 shadow-sm border-0">
              <h4 className="fw-bold mb-3" style={{ color: "#670b43" }}>2. طريقة الدفع</h4>
              
              <div className="form-check mb-3">
                <input  className="form-check-input"   type="radio"  name="payment"   id="card"  checked={paymentMethod === "card"}  onChange={() => setPaymentMethod("card")}  />
                <label className="form-check-label fw-bold me-2" htmlFor="card"> بطاقة ائتمان / مدى </label>
              </div>

              <div className="form-check mb-3">
                <input  className="form-check-input" type="radio"  name="payment"  id="cod"  checked={paymentMethod === "cod"}   onChange={() => setPaymentMethod("cod")}  />
                <label className="form-check-label fw-bold me-2" htmlFor="cod">  الدفع عند الاستلام  </label>
              </div>

              {paymentMethod === "card" && (
                <div className="row g-3 mt-2 p-3 bg-light rounded">
                  <div className="col-12">
                    <label className="form-label fw-bold">رقم البطاقة</label>
                    <input type="text" name="cardNumber" className="form-control" placeholder="**** **** **** ****" required={paymentMethod === "card"} onChange={handleChange} />
                  </div>
                  <div className="col-6">
                    <label className="form-label fw-bold">تاريخ الانتهاء</label>
                    <input type="text" name="expiry" className="form-control" placeholder="MM/YY" required={paymentMethod === "card"} onChange={handleChange} />
                  </div>
                  <div className="col-6">
                    <label className="form-label fw-bold">رمز الأمان (CVV)</label>
                    <input type="password" name="cvv" className="form-control" placeholder="123" maxLength="4" required={paymentMethod === "card"} onChange={handleChange} />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="col-lg-5">
            <div className="card p-4 shadow-sm border-0">
              <h4 className="fw-bold mb-3" style={{ color: "#670b43" }}>ملخص الطلب</h4>
              
              <div className="mb-3" style={{ maxHeight: "250px", overflowY: "auto" }}>
                {cartItems.map((item, index) => (
                  <div key={item.id || index} className="d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom">
                    <div className="d-flex align-items-center gap-2">
                      <img src={item.image} alt={item.title || item.name} style={{ width: "40px", height: "40px", objectFit: "contain" }} />
                      <div>
                        <p className="mb-0 fw-bold small text-truncate" style={{ maxWidth: "150px" }}>{item.title || item.name}</p>
                        <span className="text-muted small">الكمية: {item.quantity || 1}</span>
                      </div>
                    </div>
                    <span className="fw-bold small" style={{ color: "#670b43" }}>{((item.price || 0) * (item.quantity || 1)).toFixed(2)} ر.س</span>
                  </div>
                ))}
              </div>

              <div className="d-flex justify-content-between mb-2">
                <span>المجموع الفرعي:</span>
                <span>{totalPrice.toFixed(2)} ر.س</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>رسوم التوصيل:</span>
                <span className="text-success fw-bold">مجاناً</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between fs-5 fw-bold mb-4">
                <span>الإجمالي الكلي:</span>
                <span style={{ color: "#670b43" }}>{totalPrice.toFixed(2)} ر.س</span>
              </div>

              <button type="submit" className="btn text-white fw-bold w-100 py-3 fs-5" style={{ backgroundColor: "#670b43" }}>
                تأكيد ودفع الطلب
              </button>
            </div>
          </div>

        </div>
      </form>
    </div>
  );
}

export default Checkout;