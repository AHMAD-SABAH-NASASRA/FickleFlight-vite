import { FaStar } from "react-icons/fa";
const Card3 = (props) => {
    return (
      <div className="card" style={{ width: '18rem' }}>
        <div className="w-100 h-50" style={{
          position:"relative",
          top :"10px",
         display: "flex",
         justifyContent: "center",  
         alignItems: "center"   
        }}>
        <img src={props.img} className="card-img-top" alt="..." style={{ width: "80%", height: "10%", objectFit: "cover" }} />
        </div>
        <div className="card-body">
          <p> {props.discription} </p>
          <h5 className="card-title"> {props.title}</h5>
          <span>{props.price}</span>
          <p className="card-text">
          <FaStar style={{ color: "gold", fontSize: "24px" }}/><label>{props.Rating}</label>
          </p>
          <a href="#" className="btn w-100 rounded border border-dark">
          More details
          </a>
        </div>
      </div>
    );
  };
  
  export default Card3;
  