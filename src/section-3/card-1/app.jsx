
const Card1 = (props) => {
  return (
    <div className="card" style={{ 
       
        width: '18rem', 
        minHeight: '200px',
        backgroundImage: `url(${props.bgImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white' 
      

     } }>
       
      <div className="card-body">
        <h5 className="card-title">{props.titel}</h5>
        <p className="card-text" style={
          {  position: "absolute", 
            top: "10px",  
           right: "10px",  
           textAlign: "right",
           fontSize: "40px",  
           fontWeight: "bold" 
        }}>
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default Card1;
