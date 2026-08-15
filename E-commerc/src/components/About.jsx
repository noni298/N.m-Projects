function About() {
  return (
    <div dir="rtl">
      <section className="bg-light py-5">
        <div className="container py-4">
          <div className="row align-items-center">

            <div className="col-md-6 mb-4 mb-md-0">
              <h1 className="fw-bold text-primary mb-3"> من نحن</h1>

              <p className="lead text-muted">
                نحن متجر إلكتروني يهدف إلى توفير تجربة تسوق سهلة
                وسريعة ومميزة لجميع عملائنا.
              </p>

              <p className="text-secondary">
                نوفر مجموعة متنوعة من المنتجات مع الحرص على تقديم
                منتجات عالية الجودة وأسعار مناسبة، بالإضافة إلى
                تجربة مستخدم بسيطة وآمنة.
              </p>
            </div>

            <div className="col-md-6 text-center">
              <div className="p-5 bg-white rounded shadow-sm">
                <h2 className="fw-bold text-primary mb-3"> E-Commerce</h2>
                <p className="text-muted mb-0">
                  تسوق بسهولة، اختر ما يناسبك واستمتع بتجربة مميزة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="container">

          <h2 className="text-center fw-bold mb-5">  لماذا نحن؟</h2>
          <div className="row g-4">

            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4">

                <div className="fs-1 mb-3">
                  🛍️
                </div>

                <h4 className="fw-bold"> منتجات متنوعة </h4>

                <p className="text-muted">
                  نوفر مجموعة متنوعة من المنتجات التي تناسب
                  احتياجات العملاء المختلفة.
                </p>

              </div>
            </div>


            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4">

                <div className="fs-1 mb-3">
                  🚚
                </div>

                <h4 className="fw-bold"> توصيل سريع</h4>
                <p className="text-muted">
                  نسعى إلى توفير خدمة توصيل سريعة وموثوقة
                  لجميع الطلبات.
                </p>

              </div>
            </div>


            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm text-center p-4">

                <div className="fs-1 mb-3">
                  🔒
                </div>

                <h4 className="fw-bold"> تجربة آمنة  </h4>
                <p className="text-muted">
                  نهتم بأمان المستخدم ونحرص على تقديم تجربة
                  تسوق بسيطة وموثوقة.
                </p>

              </div>
            </div>

          </div>

        </div>
      </section>
      <section className="bg-primary text-white py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4 mb-md-0">
              <h2 className="fw-bold">  +100  </h2>
              <p className="mb-0"> منتج</p>
            </div>

            <div className="col-md-4 mb-4 mb-md-0">
              <h2 className="fw-bold"> +500  </h2>
              <p className="mb-0">   عميل </p>
            </div>

            <div className="col-md-4">
              <h2 className="fw-bold"> 24/7</h2>
              <p className="mb-0"> خدمة العملاء </p>
            </div>

          </div>

        </div>
      </section>
      <section className="py-5">
        <div className="container text-center">

          <h2 className="fw-bold mb-3">
            رؤيتنا
          </h2>

          <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
            نسعى إلى بناء متجر إلكتروني يوفر تجربة تسوق عصرية
            وسهلة، ويجمع بين جودة المنتجات وسهولة الاستخدام
            ورضا العملاء.
          </p>

        </div>
      </section>

    </div>
  );
}

export default About;