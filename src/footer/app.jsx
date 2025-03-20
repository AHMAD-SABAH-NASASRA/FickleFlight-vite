
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./style.css"
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-mean-container">
      
        <div className="left">
          <h2 className="">FickleFlight</h2>
          <p className="text">
            
          Fickle Flight is your one-stop travel portal. We offer hassle free flight and
          </p>
          <p className="text">
           hotel bookings. We also have all your flight needs in you online shop.
          
          </p>
          <div className="icon3-container">
            <FaFacebookF className="icon3" />
            
            <FaInstagram className="icon3" />
            
            <FaTwitter className="icon3" />
          </div>
        </div>

      
      <div className="right">
         <div>
           <h3 className="">Company</h3>
           <ul className="">
             <li>About Us</li>
             <li>News</li>
             <li>Careers</li>
             <li>How we work</li>
           </ul>
         </div>

         <div>
          <h3 className="">Support</h3>
          <ul className="">
            <li>Account</li>
            <li>Support Center</li>
            <li>FAQ</li>
            <li>Accessibility</li>
          </ul>
        </div>
          

      
        <div>
          <h3 className="">More</h3>
          <ul className="">
            <li>Covid Advisory</li>
            <li>Airline Fees</li>
            <li>Tips</li>
            <li>Quarantine Rules</li>
          </ul>
        </div>
        </div>

      </div>

    </footer>
  );
}

export default Footer;