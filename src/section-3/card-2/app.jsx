
const Card2 = (props) => {
    return (
      <div className="card" style={{ width: '18rem' }}>
        <img src={props.bgImage} className="card-img-top" alt="..." />
        <div className="card-body" style={{

    display: "flex", 
   justifyContent: "space-between", 
   alignItems: "start",
   height: "100%" 

        }}>
           
           <div>
          <h5 className="card-title">{props.titel}</h5>
          <p className="card-text">
          {props.time}
          </p>
          </div>
          <span className="price-tag" style={{fontSize: "30px",fontWeight: "bold"}} >{props.price}</span>
        
        </div>
      </div>
    );
  };
  
  export default Card2;
  