import './style.css';
import { IoAirplane } from "react-icons/io5";
 function Flightbox() {

    return (
    <div className='Flaight-box'>
      <div className='uper-Flaight-box'> 
         <h5>SIN</h5> 
         <div className='icon3'>       
          <IoAirplane/>
         </div>
         <h5>LAX</h5>
      </div>
      <div className='lower-Flaight-box'>
          <label className='label1'>Depart on: </label>
          <label className='label2'> 7 Sep 2021</label>
      </div>
    </div>
  );
  }

  export default Flightbox;
