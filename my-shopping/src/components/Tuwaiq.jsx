
function Tuwaiq(props) {

  return (
    <> 
        <div className="row mt-5">
           {
          props.student.map((p)=>(

             <div className="col">
              <div className="card">
                <div className="card-body">
                  <p>id : {p.id}</p>
                  <h1> {p.name}</h1>
                  <small>Age : {p.age}</small>
                </div>
              </div>
             </div>

          ))
        }
        </div>
        
    
    </>
       
  );
}
export default Tuwaiq;