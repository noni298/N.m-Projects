import React, { useState } from 'react';
import AlertMessage from './AlertMessage';

const TaskForm = ({ addTask }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('الإثنين');
  const [alert, setAlert] = useState({ message: '', type: '' });

  const daysOfWeek = ['الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'];

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => setAlert({ message: '', type: '' }), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      showAlert('الرجاء إدخال نص المهمة!', 'danger');
      return;
    }
    addTask({ id: Date.now(), text, day, completed: false });
    setText('');
    showAlert('تمت إضافة المهمة بنجاح!', 'success');
  };

  return (
    <div>
      <AlertMessage message={alert.message} type={alert.type} />
      <form onSubmit={handleSubmit} className="row g-2 mb-4 p-3 bg-white rounded-3 shadow-sm border">
        <div className="col-md-7">
          <input 
            type="text" 
            className="form-control" 
            placeholder="أدخل نص المهمة..." 
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <select className="form-select" value={day} onChange={(e) => setDay(e.target.value)}>
            {daysOfWeek.map((d, idx) => <option key={idx} value={d}>{d}</option>)}
          </select>
        </div>
        <div className="col-md-2">
          <button className="btn custom-btn w-100" type="submit">إضافة</button>
        </div>
      </form>
    </div>
  );
};
export default TaskForm;