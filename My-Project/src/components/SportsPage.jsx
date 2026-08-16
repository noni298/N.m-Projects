import React, { useState } from 'react';
import { FaDumbbell, FaRunning, FaSwimmer, FaBiking, FaPlus, FaTrash } from 'react-icons/fa';

function SportsPage({ sports = [], setSports }) {
  const daysMap = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
  const currentRealDay = daysMap[new Date().getDay()];

  const [sportType, setSportType] = useState('مشي / جري');
  const [sessionsCount, setSessionsCount] = useState('');
  const [sugarLevel, setSugarLevel] = useState('');
  const [selectedDay, setSelectedDay] = useState(currentRealDay);

  const sportsList = [
    { name: 'مشي / جري', icon: <FaRunning /> },
    { name: 'تمارين مقاومة / حديد', icon: <FaDumbbell /> },
    { name: 'سباحة', icon: <FaSwimmer /> },
    { name: 'دراجة هوائية', icon: <FaBiking /> },
  ];

  const daysOfWeek = ['الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت', 'الأحد'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!sessionsCount || !sugarLevel) return;

    setSports([
      ...sports,
      {
        id: Date.now(),
        sportType,
        sessionsCount,
        sugarLevel,
        day: selectedDay,
      },
    ]);

    setSessionsCount('');
    setSugarLevel('');
  };

  const deleteRecord = (id) => {
    setSports(sports.filter((r) => r.id !== id));
  };

  const filteredRecords = sports.filter((r) => r.day === selectedDay);

  return (
    <div className="card shadow-lg flex-grow-1 p-4 border-0 rounded-4 bg-white">
      <div className="text-center mb-4 border-bottom pb-3">
        <h1 className="fw-bold display-6" style={{ color: '#670b43' }}>
          <FaDumbbell className="ms-2" /> تسجيل الرياضة ومستوى السكر
        </h1>
        <p className="text-muted fs-5 m-0">
          اليوم في الواقع: <span className="fw-bold text-dark">{currentRealDay}</span>
        </p>
      </div>

      <div className="d-flex justify-content-center flex-wrap gap-2 mb-4">
        {daysOfWeek.map((d, idx) => (
          <button
            key={idx}
            className={`btn px-4 py-2 ${selectedDay === d ? 'shadow' : 'btn-outline-secondary'}`}
            onClick={() => setSelectedDay(d)}
            style={selectedDay === d ? { backgroundColor: '#670b43', color: 'white', borderColor: '#670b43', fontWeight: 'bold' } : {}}
          >
            {d} {d === currentRealDay ? '(اليوم)' : ''}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="row g-3 mb-4 p-3 bg-light rounded-3 shadow-sm border">
        <div className="col-md-4">
          <label className="form-label fw-bold">اختر نوع الرياضة:</label>
          <select className="form-select" value={sportType} onChange={(e) => setSportType(e.target.value)}>
            {sportsList.map((s, idx) => (
              <option key={idx} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-3">
          <label className="form-label fw-bold">عدد التمارين / الجلسات:</label>
          <input
            type="number"
            className="form-control"
            placeholder="مثال: 3"
            value={sessionsCount}
            onChange={(e) => setSessionsCount(e.target.value)}
          />
        </div>

        <div className="col-md-3">
          <label className="form-label fw-bold">مستوى السكر (mg/dL):</label>
          <input
            type="number"
            className="form-control"
            placeholder="مثال: 120"
            value={sugarLevel}
            onChange={(e) => setSugarLevel(e.target.value)}
          />
        </div>

        <div className="col-md-2 d-flex align-items-end">
          <button className="btn w-100 text-white" type="submit" style={{ backgroundColor: '#670b43' }}>
            <FaPlus className="ms-1" /> حفظ
          </button>
        </div>
      </form>

      <div className="flex-grow-1 bg-white p-4 rounded-3 border shadow-sm">
        <h4 className="mb-3 border-bottom pb-2" style={{ color: '#670b43' }}>
          سجل الرياضة ليوم: {selectedDay}
        </h4>

        {filteredRecords.length === 0 ? (
          <div className="text-center text-muted py-5 fs-5">لا توجد تمارين مسجلة لهذا اليوم.</div>
        ) : (
          <div className="list-group">
            {filteredRecords.map((record) => (
              <div
                key={record.id}
                className="list-group-item d-flex justify-content-between align-items-center p-3 mb-2 rounded shadow-sm border"
              >
                <div className="d-flex align-items-center">
                  <span className="fs-3 ms-3" style={{ color: '#670b43' }}>
                    <FaRunning />
                  </span>
                  <div>
                    <h5 className="mb-1 fw-bold">{record.sportType}</h5>
                    <p className="mb-0 text-muted">
                      عدد الجلسات/التمارين: <span className="text-dark fw-bold">{record.sessionsCount}</span> | 
                      مستوى السكر: <span className="text-dark fw-bold">{record.sugarLevel} mg/dL</span>
                    </p>
                  </div>
                </div>

                <button className="btn btn-outline-danger" onClick={() => deleteRecord(record.id)}>
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SportsPage;