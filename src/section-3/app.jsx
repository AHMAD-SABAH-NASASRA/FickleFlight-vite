import Card1 from "./card-1/app";
import Card2 from "./card-2/app";
import Card3 from "./card-3/app";

import "./style.css";

const Section3 = () => {
  return (

  <div className="section">
    
    <div className="part">
        <div className="part2">
         <h1>Most Popular Destinations</h1> 
        </div>
        <div className="part3"> 
         <Card1 titel="Paris" bgImage="/img/c1img1.png" text="$699"  />
         <Card1 titel="Greece" bgImage="/img/c1img2.png" text="$1079"/>
         <Card1 titel="Norway" bgImage="/img/c1img3.png" text="$895"/>
         <Card1 titel="Tuscany" bgImage="/img/c1img4.png" text="$1245"/>
        </div>
     </div>
    
     <div className="part">
        <div className="part2">
         <h1>Recommended Holidays</h1> 
        </div>
        <div className="part3"> 
         <Card2 price="$500" bgImage="/img/c2img1.png" titel="Bali" time="4D3N"/>
         <Card2 price="$500" bgImage="/img/c2img2.png" titel="Swiss" time="6D5N"/>
         <Card2 price="$500" bgImage="/img/c2img3.png" titel="Boracay" time="5D4N"/>
         <Card2 price="$500" bgImage="/img/c2img4.png" titel="Palawan"    time="4D3N"/>
        </div>
     </div>    

     <div className="part">
        <div className="part2">
         <h1>Popular Stays</h1> 
        </div>
        <div className="part3"> 
         <Card3 price="$575/night" img="/img/c3img1.png" discription="Entire bungalow" title="Matterhorn Suites" Rating="4.9"/>
         <Card3 price="$360/night" img="/img/c3img2.png" discription="2-Story beachfront suite" title="Discovery Shores" Rating="4.8"/>
         <Card3 price="$420/night" img="/img/c3img3.png" discription="Single deluxe hut" title="Arctic Hut " Rating="4.7"/>
         <Card3 price="$244/night" img="/img/c3img4.png" discription="Deluxe King Room" title="Lake Louise Inn" Rating="4.6"/>
         </div>
     </div>
    
  </div>
  );
};

export default Section3;
