import { useRef } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Student from "./components/Student"; 

function App() {
  const studentsList = [
    { id: 1, name: "محمد أحمد", track: "مسار الويب", gpa: 4.8 },
    { id: 2, name: "علي خالد", track: "الذكاء الاصطناعي", gpa: 4.5 },
    { id: 3, name: "فهد ناصر", track: "الأمن السيبراني", gpa: 4.9 },
  ];
  const imgRef = useRef(null);
  const handleResize = (e) => {
    if (imgRef.current) {
      imgRef.current.style.width = `${e.target.value}px`;
    }
  };
  return (
    <>
      <Header />
      <main className="container mt-4">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold text-dark">كل تمارين React.js</h2>
          <hr className="w-25 mx-auto mt-3" />
        </div>
        <section className="text-center mb-5 p-4 border rounded bg-light shadow-sm">
          <h3 className="text-primary mb-2">تمرين رقم 22</h3>
          <div className="my-3">
            <img ref={imgRef} src="images/sp.jpg" alt="صورة فضاء" style={{ width: "200px" }} />
          </div>
          <div className="w-50 mx-auto mt-3">
            <input type="range" className="form-range" min="50" max="400" defaultValue="200" onInput={handleResize} />
          </div>
        </section>
        <hr className="my-4" />
        <section className="mb-5 p-4 border rounded bg-light shadow-sm">
          <div className="text-center mb-4">
            <h3 className="text-primary mb-2">تمرين رقم 21</h3>
      
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}> {studentsList.map((s) => (
              <Student key={s.id} name={s.name} track={s.track} gpa={s.gpa} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
