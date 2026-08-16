import React, { useState } from 'react';
import { FaCheck, FaTimes, FaTrash, FaPlus, FaPills, FaSyringe } from 'react-icons/fa';

export default function MedsPage({ meds = [], setMeds }) {
  const daysMap = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
  const currentRealDay = daysMap[new Date().getDay()];

  const [name, setName] = useState('');
  const [type, setType] = useState('فيتامين');
  const [time, setTime] = useState('الصباح');
  const [selectedDay, setSelectedDay] = useState(currentRealDay);

  const daysOfWeek = ['الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت', 'الأحد'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    setMeds([...meds, { id: Date.now(), name, type, time, day: selectedDay, completed: false }]);
    setName('');
  };

  const toggleMed = (id) => {
    setMeds(meds.map(m => m.id === id ? { ...m, completed: !m.completed } : m));
  };

  const deleteMed = (id) => {
    setMeds(meds.filter(m => m.id !== id));
  };

  const filteredMeds = meds.filter(m => m.day === selectedDay);

  return (
    <div className="card shadow-lg flex-grow-1 p-4 border-0 rounded-4 bg-white">
      <div className="text-center mb-4 border-bottom pb-3">
        <h1 className="fw-bold display-6" style={{ color: '#670b43' }}>
          <FaPills className="ms-2" /> صفحة العلاجات والفيتامينات وأبر السكر
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

      <form onSubmit={handleSubmit} className="row g-2 mb-4 p-3 bg-light rounded-3 shadow-sm border">
        <div className="col-md-4">
          <input 
            type="text" 
            className="form-control" 
            placeholder="اسم الدواء أو الإبرة..." 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <select className="form-select" value={type} onChange={(e) => setType(e.target.value)}>
            <option value="فيتامين">فيتامين</option>
            <option value="إبرة سكر">إبرة سكر</option>
            <option value="دواء عادي">دواء عادي</option>
          </select>
        </div>
        <div className="col-md-3">
          <input 
            type="text" 
            className="form-control" 
            placeholder="الوقت (مثال: بعد العشاء)" 
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <button className="btn w-100 text-white" type="submit" style={{ backgroundColor: '#670b43' }}>
            <FaPlus className="ms-1" /> إضافة
          </button>
        </div>
      </form>

      <div className="flex-grow-1 bg-white p-4 rounded-3 border shadow-sm">
        <h4 className="mb-3 border-bottom pb-2" style={{ color: '#670b43' }}>
          جرعات يوم: {selectedDay}
        </h4>

        {filteredMeds.length === 0 ? (
          <div className="text-center text-muted py-5 fs-5">لا توجد علاجات مسجلة لهذا اليوم.</div>
        ) : (
          <div className="list-group">
            {filteredMeds.map(med => (
              <div 
                key={med.id} 
                className={`list-group-item d-flex justify-content-between align-items-center p-3 mb-2 rounded shadow-sm border ${med.completed ? 'bg-light text-muted' : 'bg-white'}`}
              >
                <div className="d-flex align-items-center">
                  <span className="fs-3 ms-3" style={{ color: '#670b43' }}>
                    {med.type === 'إبرة سكر' ? <FaSyringe /> : <FaPills />}
                  </span>
                  <div>
                    <h5 className="mb-1" style={{ textDecoration: med.completed ? 'line-through' : 'none' }}>
                      {med.name}
                    </h5>
                    <span className="badge bg-secondary ms-2">{med.type}</span>
                    <small className="text-muted">الوقت: {med.time}</small>
                  </div>
                </div>

                <div>
                  <button className={`btn me-2 ${med.completed ? 'btn-secondary' : 'btn-success'}`} onClick={() => toggleMed(med.id)}>
                    {med.completed ? <FaTimes /> : <FaCheck />} {med.completed ? 'إلغاء الأخذ' : 'أخذت الجرعة (صح)'}
                  </button>
                  <button className="btn btn-outline-danger" onClick={() => deleteMed(med.id)}>
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}