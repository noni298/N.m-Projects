import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
function LandPage()
{
   
    const[Products,setProduct]=useState();
    const[loading,setloading]=useState(true)



      useEffect(()=>{
        fetch("https://fakestoreapi.com/products/") // request 
        .then((response)=>response.json())
        .then((data)=>{

            setProduct(data);
            setloading(false)

        });
      },[])
   

    if(loading)
        {
            return(

                <div className="text-center mt-5" >
                    <div className="spanner-border text-primary" role="status">
                    </div>
                    <p className="text-dark">جاري جلب البيانات </p>
                </div>
            );
        }  
    return(
        <>
         <div className="container py-5" dir="rtl">
               <h2 className="fw-bold" style={{ color: "#670b43" }}>  أهلا بك في متجر ألوان الإلكتروني </h2>
             <div className="row mt-2">
                {
                    Products.map((p)=>(
                        <div className="col-md-3 col-lg-2 px-2 mb-3" key={p.id}>
                          <div className="card h-100 shadow-sm">
                            <img src={p.image} className="card-img-top" width={200} height={150} alt={p.title} ></img>
                            <div className="card-body">
                                <h5 className="card-title">{p.title}</h5>
                                <p className="card-text fw-bold text-success">{p.price}</p>
                                <div className="row mt-1">
                                    <div className="col">
                                    <Link className="btn text-white fw-bold" style={{ backgroundColor: "#670b43" }} to={`/details/${p.id}`}>تفاصيل</Link>                                    </div>
                                </div>
                            </div>
                          </div>
                        </div>
                    ))
                }
             </div>
         </div>
        </>
    );
}
export default LandPage