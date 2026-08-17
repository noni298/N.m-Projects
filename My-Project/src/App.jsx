import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import TasksPage from './components/TasksPage';
import MedsPage from './components/MedsPage';
import SportsPage from './components/SportsPage';
import SummaryPage from './components/SummaryPage';
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
        
        <Header />

        <div className="flex-grow-1 d-flex flex-column">
          <Routes>
            <Route path="/" element={<SummaryPage tasks={tasks} meds={meds} sports={sports} />} />
            <Route path="/tasks" element={<TasksPage tasks={tasks} setTasks={setTasks} />} />
            <Route path="/meds" element={<MedsPage meds={meds} setMeds={setMeds} />} />
            <Route path="/sports" element={<SportsPage sports={sports} setSports={setSports} />} />
          </Routes>
        </div>

        <Footer />

      </div>
    </Router>
  );
}

export default App;