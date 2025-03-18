import Card1 from "./card-1/app";
import Card2 from "./card-2/app";
import Card3 from "./card=3/app";

import "./style.css";

const Section3 = () => {
  return (

  <div className="section">
    
    <div className="part">
        <div className="part2">
         <h1>Most Popular Destinations</h1> 
        </div>
        <div className="part3"> 
         <Card1 titel="Paris" bgImage="/src/section-3/img/c1img1.png" text="$699"  />
         <Card1 titel="Greece" bgImage="/src/section-3/img/c1img2.png" text="$699"/>
         <Card1 titel="Norway" bgImage="/src/section-3/img/c1img3.png" text="$699"/>
         <Card1 titel="Tuscany" bgImage="/src/section-3/img/c1img4.png" text="$699"/>
        </div>
     </div>
    
     <div className="part">
        <div className="part2">
         <h1>Recommended Holidays</h1> 
        </div>
        <div className="part3"> 
         <Card2></Card2>
         <Card2></Card2>
         <Card2></Card2>
         <Card2></Card2>   
        </div>
     </div>    

     <div className="part">
        <div className="part2">
         <h1>most popular</h1> 
        </div>
        <div className="part3"> 
         <Card3></Card3>
         <Card3></Card3>
         <Card3></Card3>
         <Card3></Card3>
        </div>
     </div>
    
  </div>
  );
};

export default Section3;
