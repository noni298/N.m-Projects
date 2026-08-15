function Products(props)
{
     return(
        <>
          <div className="row ">
            {

                props.car.map((p)=>(

                 <div className="col">
                    <div className="card ">
                        <div className="card-body" >
                            <div className="row">
                                <div className="col">
                                 <img src={`images/${p.img}`} alt={p.name} width={100}  height={100}/>
                                </div>

                                <div className="col">
                                  <h1>{p.name}</h1>
                               price   <p className="badge bg-danger">{p.price}</p>
                               <br/>
                               KM   <p className="badge bg-info">{p.KM}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>


                ))
            }
          </div>
        </>
     )
}


export default Products