import React from 'react';
import { FaChartLine, FaCheckCircle, FaHeartbeat, FaTrophy, FaSmile } from 'react-icons/fa';

function SummaryPage({ tasks = [], meds = [], sports = [] }) {
  const totalMeds = meds.length;
  const completedMeds = meds.filter(m => m.completed).length;
  const medsPercentage = totalMeds > 0 ? Math.round((completedMeds / totalMeds) * 100) : 0;

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.completed).length;

  const totalSportsSessions = sports.reduce((acc, curr) => acc + Number(curr.sessionsCount || 0), 0);

  const sugarValues = sports.map(s => Number(s.sugarLevel)).filter(v => v > 0);
  const avgSugar = sugarValues.length > 0 ? Math.round(sugarValues.reduce((a, b) => a + b, 0) / sugarValues.length) : 0;

  let encouragementMessage = "أنت تبدأ رحلة جديدة رائعة، استمر ولا تتوقف!";
  let badgeColor = "bg-info";

  if (medsPercentage === 100 && totalMeds > 0) {
    encouragementMessage = "رائع جداً! لقد أخذت كافة علاجاتك والتزمت بها بنسبة 100%. صحتك تتحسن بفضل التزامك! ⭐";
    badgeColor = "bg-success";
  } else if (medsPercentage >= 50) {
    encouragementMessage = "أداء ممتاز! أنت تسير في الطريق الصحيح نحو حياة صحية ومنظمة. واصل التقدم! 💪";
    badgeColor = "bg-primary";
  } else if (totalMeds === 0 && sports.length === 0) {
    encouragementMessage = "ابدأ بإضافة مهامك وعلاجاتك اليومية لتظهر لك إحصائياتك وعباراتك التشجيعية هنا! 🚀";
    badgeColor = "bg-secondary";
  }

  return (
    <div className="card shadow-lg flex-grow-1 p-4 border-0 rounded-4 bg-white">
      <div className="text-center mb-4 border-bottom pb-3">
        <h1 className="fw-bold display-6" style={{ color: '#670b43' }}>
          <FaChartLine className="ms-2" /> ملخص النشاط والسكر والالتزام بالعلاج
        </h1>
        <p className="text-muted fs-5 m-0">نظرة شاملة على إنجازاتك الصحية واليومية</p>
      </div>

      <div className={`p-4 mb-4 rounded-4 text-white shadow ${badgeColor} d-flex align-items-center`}>
        <div className="fs-1 ms-3">
          <FaTrophy />
        </div>
        <div>
          <h4 className="fw-bold mb-1">رسالة اليوم :</h4>
          <p className="fs-5 mb-0">{encouragementMessage}</p>
        </div>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <div className="card border-0 shadow-sm bg-light p-3 text-center rounded-3">
            <h5 className="text-muted">التزام العلاجات والأبر</h5>
            <h2 className="fw-bold" style={{ color: '#670b43' }}>{medsPercentage}%</h2>
            <p className="small text-secondary m-0">({completedMeds} من أصل {totalMeds} تم أخذها)</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm bg-light p-3 text-center rounded-3">
            <h5 className="text-muted">إجمالي التمارين الرياضية</h5>
            <h2 className="fw-bold text-success">{totalSportsSessions} جلسات</h2>
            <p className="small text-secondary m-0">مسجلة في النظام</p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 shadow-sm bg-light p-3 text-center rounded-3">
            <h5 className="text-muted">متوسط مستوى السكر</h5>
            <h2 className="fw-bold text-primary">{avgSugar > 0 ? `${avgSugar} mg/dL` : 'لا توجد بيانات'}</h2>
            <p className="small text-secondary m-0">بحسب القياسات المسجلة</p>
          </div>
        </div>
      </div>

      <div className="bg-light p-4 rounded-3 border">
        <h4 className="mb-3 border-bottom pb-2" style={{ color: '#670b43' }}>
          <FaHeartbeat className="ms-2" /> ملخص المهام المنجزة
        </h4>
        <div className="row">
          <div className="col-md-6 fs-5">
            <p>✅ إجمالي المهام المنجزة: <span className="fw-bold text-success">{completedTasks}</span> من {totalTasks}</p>
          </div>
          <div className="col-md-6 fs-5">
            <p>💊 حالة الأدوية والفيتامينات: <span className="fw-bold" style={{ color: '#670b43' }}>{completedMeds} مسجلة كـ "تم الأخذ"</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SummaryPage;