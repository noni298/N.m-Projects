function Student({ name, track, gpa }) {
  return (
    <div className="card m-2" style={{ width: "200px" }}>
      <div className="card-body">
        <h3 className="card-title h5">{name}</h3>
        <p className="card-text mb-1"><strong>المسار: </strong>{track}</p>
        <p className="card-text mb-0"><strong>المعدل: </strong>{gpa}</p>
      </div>
    </div>
  );
}
export default Student;