import './style.css';

 function Icon(props) {

    return (
    <div className='icon-mean-container'>
     
     <div className='icon-container'  style={{ backgroundColor: props.bgColor }}>
        <div className='icon'>   
         {props.icon }
        </div>
     </div>
     <p>{props.string}</p>
      
    </div>
  );
  }

  export default Icon;
  