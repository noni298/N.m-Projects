import React,{ useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TasksPage from './components/TasksPage';
import MedsPage from './components/MedsPage';
import SportsPage from './components/SportsPage';
import SummaryPage from './components/SummaryPage';
import { FaTasks, FaPills, FaDumbbell, FaChartPie } from 'react-icons/fa';
import './App.css';

function App() {
  const daysMap = ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'];
  const currentRealDay = daysMap[new Date().getDay()];

  const [tasks, setTasks] = useState([]);
  const [meds, setMeds] = useState([
    { id: 1, name: 'فيتامين د', type: 'فيتامين', time: 'الصباح', day: currentRealDay, completed: false },
    { id: 2, name: 'إبرة السكر', type: 'إبرة سكر', time: 'قبل الوجبة', day: currentRealDay, completed: false },
  ]);
  const [sports, setSports] = useState([]);

  return (
    <Router>
      <div className="container-fluid min-vh-100 d-flex flex-column p-4 bg-light" style={{ direction: 'rtl' }}>
        
        <nav className="navbar navbar-expand-lg navbar-dark rounded-4 shadow-sm mb-4 px-4" style={{ backgroundColor: '#670b43' }}>
          <span className="navbar-brand fw-bold fs-4">نظامي الشامل</span>
          <div className="navbar-nav ms-auto d-flex flex-row gap-3 flex-wrap">
            <Link className="nav-link text-white d-flex align-items-center gap-1 fs-5" to="/">
              <FaChartPie /> الملخص والتشجيع
            </Link>
            <Link className="nav-link text-white d-flex align-items-center gap-1 fs-5" to="/tasks">
              <FaTasks /> المهام
            </Link>
            <Link className="nav-link text-white d-flex align-items-center gap-1 fs-5" to="/meds">
              <FaPills /> العلاجات
            </Link>
            <Link className="nav-link text-white d-flex align-items-center gap-1 fs-5" to="/sports">
              <FaDumbbell /> الرياضة والسكر
            </Link>
          </div>
        </nav>

        <div className="flex-grow-1 d-flex flex-column">
          <Routes>
            <Route path="/" element={<SummaryPage tasks={tasks} meds={meds} sports={sports} />} />
            <Route path="/tasks" element={<TasksPage tasks={tasks} setTasks={setTasks} />} />
            <Route path="/meds" element={<MedsPage meds={meds} setMeds={setMeds} />} />
            <Route path="/sports" element={<SportsPage sports={sports} setSports={setSports} />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;