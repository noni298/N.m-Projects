import { useLocation, Link } from "react-router-dom";
function PaymentSuccess() {
  const location = useLocation();
  const { orderDetails, totalPrice } = location.state || {};
  return (
    <div className="container my-5 text-center" dir="rtl">
      <div className="card p-5 shadow-sm border-0 mx-auto" style={{ maxWidth: "600px" }}>
        <div className="mb-3 display-1 text-success">✅</div>
        <h2 className="fw-bold mb-2" style={{ color: "#670b43" }}>تم استلام طلبك بنجاح!</h2>
        <p className="text-muted mb-4">شكراً لتسوقك معنا. تم إرسال تفاصيل الفاتورة إلى بريدك الإلكتروني.</p>
        {orderDetails && (
          <div className="bg-light p-3 rounded text-start mb-4">
            <h5 className="fw-bold mb-3 border-bottom pb-2" style={{ color: "#670b43" }}>تفاصيل الفاتورة</h5>
            <p className="mb-1"><strong>الاسم:</strong> {orderDetails.fullName}</p>
            <p className="mb-1"><strong>رقم الجوال:</strong> {orderDetails.phone}</p>
            <p className="mb-1"><strong>العنوان:</strong> {orderDetails.city} - {orderDetails.address}</p>
            <p className="mb-0"><strong>المبلغ المدفوع:</strong> <span className="fw-bold text-success">{totalPrice?.toFixed(2)} ر.س</span></p>
          </div>
        )}
        <Link to="/" className="btn text-white fw-bold px-4 py-2" style={{ backgroundColor: "#670b43" }}>  العودة للرئيسية </Link>
      </div>
    </div>
  );
}
export default PaymentSuccess;