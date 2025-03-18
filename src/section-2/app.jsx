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
                <Icon icon ={<IoBed/>} string="Hotel"/>
                <Icon icon ={<IoTicket/>} string="Attractions"/>
                <Icon icon ={<PiForkKnifeFill/>} string="Eats"/>
                <Icon icon ={<FaBusSimple />} string="Commute"/>
                <Icon icon ={<FaTaxi />} string="Taxi"/>
                <Icon icon ={<BiMoviePlay />} string="Movies"/>
            </div>
        </div>
        </div>
    );
    }

    export default Section2;
