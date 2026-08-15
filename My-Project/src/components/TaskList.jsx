import React from 'react';
import { FaTrash, FaCheck, FaTimes } from 'react-icons/fa';

const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  const daysOfWeek = ['الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة'];

  return (
    <div className="table-responsive">
      <h4 className="mb-3 text-end" style={{ color: '#670b43', fontWeight: 'bold' }}>تقويم المهام الأسبوعي</h4>
      <table className="table table-bordered align-middle text-center shadow-sm bg-white">
        <thead>
          <tr>
            {daysOfWeek.map((day, idx) => (
              <th key={idx} style={{ width: '20%', backgroundColor: '#670b43', color: 'white' }}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {daysOfWeek.map((day, dIdx) => {
              const dayTasks = tasks.filter(t => t.day === day);

              return (
                <td key={dIdx} style={{ height: '180px', verticalAlign: 'top', padding: '10px' }}>
                  {dayTasks.length === 0 ? (
                    <div className="border border-light rounded bg-light text-muted small h-100 d-flex align-items-center justify-content-center" style={{ minHeight: '120px' }}>
                      فارغ
                    </div>
                  ) : (
                    dayTasks.map(task => (
                      <div 
                        key={task.id} 
                        className={`p-2 mb-2 rounded border d-flex flex-column align-items-center ${task.completed ? 'bg-success text-white bg-opacity-75' : 'bg-white'}`}
                        style={{ borderColor: '#670b43 !important' }}
                      >
                        <span 
                          style={{ 
                            textDecoration: task.completed ? 'line-through' : 'none',
                            fontSize: '0.85rem',
                            wordBreak: 'break-word',
                            color: task.completed ? '#fff' : '#670b43',
                            fontWeight: 'bold'
                          }}
                        >
                          {task.text}
                        </span>
                        <div className="mt-2">
                          <button 
                            className={`btn btn-sm me-1 ${task.completed ? 'btn-light' : 'btn-outline-success'}`}
                            onClick={() => toggleTask(task.id)}
                            title="إنجاز"
                          >
                            {task.completed ? <FaTimes /> : <FaCheck />}
                          </button>
                          <button 
                            className="btn btn-sm btn-outline-danger" 
                            onClick={() => deleteTask(task.id)}
                            title="حذف"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    ))
                  )}
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TaskList;