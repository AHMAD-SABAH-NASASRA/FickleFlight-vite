    import './style.css';
  
    import Flightbox from './Flightbox/app';
    import Icon from './Icons/app';
    import { IoBed } from "react-icons/io5";
    import { IoTicket } from "react-icons/io5";
    import { PiForkKnifeFill } from "react-icons/pi";
    import { FaBusSimple } from "react-icons/fa6";
    import { FaTaxi } from "react-icons/fa";
    import { BiMoviePlay } from "react-icons/bi";
   
   
    function Section2() {
        return (
        <div className='Flaight-mean-box'>
        <div className='Flaight-box-cotainer'>
            <h4>Recent Searches</h4>
            <div className='Flight-box'>
                <Flightbox/>
                <Flightbox/>
            </div>
        </div>
        <div className='mean-icon-container'>
            <p> Prepare for your trip</p>
            <div className='icon-container2'>
                <Icon icon ={<IoBed/>}  string="Hotel" bgColor="#FF6384" />
                <Icon icon ={<IoTicket/>} string="Attractions" bgColor="#FF9F40" />
                <Icon icon ={<PiForkKnifeFill/>} string="Eats" bgColor="#4BC0C0" />
                <Icon icon ={<FaBusSimple />} string="Commute" bgColor="#FFCD56" />
                <Icon icon ={<FaTaxi />} string="Taxi" bgColor="#36A2EB" />
                <Icon icon ={<BiMoviePlay />} string="Movies" bgColor="#7AC943" />
            </div>
        </div>
        </div>
    );
    }

    export default Section2;
