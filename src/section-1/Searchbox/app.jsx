import React, { useState } from 'react';
import './style.css'; 

function Searchbox() {
 
    const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    alert(`Searching for: ${query}`);
  };

  return (
  <div className="searchbox-container">
      
    <div className='uper'>
     
   <h4> Search flights</h4>


    </div>
      <div className='lower'> 
       <input
         type="text"
         className="searchbox-input"
         placeholder="Singapore (SIN)"
         value={query}
         onChange={handleInputChange}
       />
       <input
         type="text"
         className="searchbox-input"
         placeholder="Los Angeles (LA)"
         value={query}
         onChange={handleInputChange}
       />
       <input
         type="date"
         className="searchbox-input"
         value={query}
         onChange={handleInputChange}
       />
       <button className="searchbox-button" onClick={handleSearch}>
        Search flights
       </button>
      </div>
  </div>

  );
}

export default Searchbox;
