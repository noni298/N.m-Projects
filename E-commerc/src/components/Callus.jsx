import { useState } from "react";

function Callus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <div dir="rtl">
      <section className="py-5 text-center text-white" style={{ backgroundColor: "#9a4184" }}>
        <div className="container py-3">
          <h1 className="fw-bold display-5 mb-3">اتصل بنا</h1>
          <p className="lead opacity-75 max-w-xl mx-auto">
            يسعدنا تواصلك معنا، فريقنا متواجد دائماً للإجابة عن استفساراتك ومساعدتك.
          </p>
        </div>
      </section>

      <section className="py-5 bg-light">
        <div className="container">
          <div className="row g-4">

            <div className="col-lg-5">
              <div className="card border-0 shadow-sm h-100 p-4 rounded-3">
                <h3 className="fw-bold mb-4 pb-2 border-bottom" style={{ color: "#670b43" }}> معلومات التواصل </h3>
                <div className="row g-3">
                  <div className="col-12">
                    <div className="p-3 bg-light rounded-3 d-flex align-items-center border">
                      <div className="fs-4 me-3 text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "45px", height: "45px", backgroundColor: "#670b43", flexShrink: 0 }}>
                        📍
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1" style={{ color: "#670b43" }}>العنوان</h6>
                        <p className="text-muted mb-0 small">المملكة العربية السعودية - الرياض</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="p-3 bg-light rounded-3 d-flex align-items-center border">
                      <div className="fs-4 me-3 text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "45px", height: "45px", backgroundColor: "#670b43", flexShrink: 0 }}>
                        📞
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1" style={{ color: "#670b43" }}>رقم الهاتف / واتساب</h6>
                        <p className="text-muted mb-0 small" dir="ltr">+966 50 000 0000</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="p-3 bg-light rounded-3 d-flex align-items-center border">
                      <div className="fs-4 me-3 text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "45px", height: "45px", backgroundColor: "#670b43", flexShrink: 0 }}>
                        ✉️
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1" style={{ color: "#670b43" }}>البريد الإلكتروني</h6>
                        <p className="text-muted mb-0 small">support@store.com</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="p-3 bg-light rounded-3 d-flex align-items-center border">
                      <div className="fs-4 me-3 text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: "45px", height: "45px", backgroundColor: "#670b43", flexShrink: 0 }}>
                        🕐
                      </div>
                      <div>
                        <h6 className="fw-bold mb-1" style={{ color: "#670b43" }}>أوقات العمل</h6>
                        <p className="text-muted mb-0 small">
                          الأحد - الخميس: 9:00 ص - 9:00 م<br />
                          الجمعة والسبت: 4:00 م - 10:00 م
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="col-lg-7">
              <div className="card border-0 shadow-sm p-4 rounded-3">
                <h3 className="fw-bold mb-4 pb-2 border-bottom" style={{ color: "#670b43" }}>  أرسل لنا رسالة </h3>

           
                {submitted && (
                  <div className="alert alert-success fw-bold text-center" role="alert">
                    شكراً لتواصلك معنا! تم إرسال رسالتك بنجاح وسنرد عليك في أقرب وقت. ✨
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12">
                      <label className="form-label fw-bold">الاسم الكامل</label>
                      <input type="text" name="name"  value={formData.name} onChange={handleChange}  className="form-control py-2" placeholder="أدخل اسمك" required />
                    </div>
                    <div className="col-12">
                      <label className="form-label fw-bold">البريد الإلكتروني</label>
                      <input type="email"  name="email" value={formData.email} onChange={handleChange}  className="form-control py-2" placeholder="example@domain.com"   required/>
                    </div>

                    <div className="col-12">
                      <label className="form-label fw-bold">موضوع الرسالة</label>
                      <input type="text" name="subject" value={formData.subject}  onChange={handleChange} className="form-control py-2"  placeholder="كيف يمكننا مساعدتك؟"  required />
                    </div>

                    <div className="col-12">
                      <label className="form-label fw-bold">الرسالة</label>
                      <textarea name="message"  value={formData.message}   onChange={handleChange} className="form-control py-2" rows="4"  placeholder="اكتب تفاصيل استفسارك هنا..." required ></textarea>
                    </div>

                    <div className="col-12">
                      <button type="submit"  className="btn text-white fw-bold px-5 py-2 fs-5 w-100 mt-2" style={{ backgroundColor: "#670b43" }}>
                        إرسال الرسالة 🚀
                      </button>
                    </div>
                  </div>
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Callus;