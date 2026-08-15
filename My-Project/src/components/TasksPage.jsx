import React, { useState } from 'react';
import { FaCheck, FaTimes, FaTrash, FaPlus, FaTasks } from 'react-icons/fa';

export default function TasksPage() {
  const daysMap = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
  const currentRealDay = daysMap[new Date().getDay()];

  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');
  const [selectedDay, setSelectedDay] = useState(currentRealDay);

  const daysOfWeek = ['الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت', 'الأحد'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setTasks([...tasks, { id: Date.now(), text, day: selectedDay, completed: false }]);
    setText('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(t => t.day === selectedDay);

  return (
    <div className="card shadow-lg flex-grow-1 p-4 border-0 rounded-4 bg-white">
      <div className="text-center mb-4 border-bottom pb-3">
        <h1 className="fw-bold display-6" style={{ color: '#670b43' }}>
          <FaTasks className="ms-2" /> صفحة المهام اليومية
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

      <form onSubmit={handleSubmit} className="input-group mb-4 shadow-sm">
        <input 
          type="text" 
          className="form-control form-control-lg" 
          placeholder={`أضف مهمة جديدة ليوم ${selectedDay}...`} 
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn btn-lg px-4 text-white" type="submit" style={{ backgroundColor: '#670b43' }}>
          <FaPlus className="ms-1" /> إضافة مهمة
        </button>
      </form>

      <div className="flex-grow-1 bg-light p-4 rounded-3 border">
        <h4 className="mb-3 border-bottom pb-2" style={{ color: '#670b43' }}>
          المهام المجدولة ليوم: {selectedDay}
        </h4>

        {filteredTasks.length === 0 ? (
          <div className="text-center text-muted py-5 fs-5">لا توجد مهام مسجلة لهذا اليوم.</div>
        ) : (
          <div className="list-group">
            {filteredTasks.map(task => (
              <div 
                key={task.id} 
                className={`list-group-item d-flex justify-content-between align-items-center p-3 mb-2 rounded shadow-sm border ${task.completed ? 'bg-light text-muted' : 'bg-white'}`}
              >
                <span style={{ textDecoration: task.completed ? 'line-through' : 'none', fontSize: '1.1rem' }}>
                  {task.text}
                </span>
                <div>
                  <button className={`btn me-2 ${task.completed ? 'btn-secondary' : 'btn-success'}`} onClick={() => toggleTask(task.id)}>
                    {task.completed ? <FaTimes /> : <FaCheck />} {task.completed ? 'إلغاء الصح' : 'وضع صح'}
                  </button>
                  <button className="btn btn-outline-danger" onClick={() => deleteTask(task.id)}>
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