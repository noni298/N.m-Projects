import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";
function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Produc, setProduct] = useState();
  sessionStorage.setItem("p1", "Saad Salem");
  const dispatch = useDispatch();
  const handleAddtoCart = () => {
    if (Produc) {
      dispatch(addToCart(Produc));
    }
  };
  const handleContinueShopping = () => {
    if (Produc) {
      dispatch(addToCart(Produc));
    }
    navigate("/");
  };
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);
  return (
    <div className="container my-5" dir="rtl">
      {Produc && (
        <div className="card border-0 shadow-sm p-3">
          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <img src={Produc.image} alt={Produc.title}  className="img-fluid p-4" style={{ maxHeight: "400px", objectFit: "contain" }}  />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <span className="badge text-white mb-2" style={{ backgroundColor: "#670b43" }}> {Produc.category}</span>
                <h2 className="fw-bold mb-3">{Produc.title}</h2>
                <p className="card-text fw-bold fs-4" style={{ color: "#670b43" }}> {Produc.price} ر.س </p>
                <p className="text-muted leading-relaxed mb-4">{Produc.description}</p>
                <div className="d-flex gap-3">
                  <button className="btn text-white fw-bold px-4 py-2" style={{ backgroundColor: "#670b43" }} onClick={handleAddtoCart}>  أضف إلى السلة </button>
                  <button className="btn btn-outline-dark fw-bold px-4 py-2" onClick={handleContinueShopping}>   متابعة التسوق </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default ProductDetails;