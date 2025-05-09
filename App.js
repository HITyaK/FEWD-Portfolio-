/*import React from 'react';
//import Inc from './Inc';
import "./App.css";
import ChildComponent from './ChildComponent';
import ParentComponent from './ParentComponent';

function App() {
  return (
  
    <ParentComponent/>
  
  );

}*/
/*
import React from 'react';
import Weather from './Weather';

function App(){
  return(
    <div>
      <p> Welcom to weather website</p>
      <Weather/>

    </div>
  );
}


export default App;
*/

import React, { useState } from 'react';
import Counter from './Counter';

function App() {
  const [showCounter, setShowCounter] = useState(true);

  const toggleCounter = () => {
    setShowCounter((prevShow) => !prevShow);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <button onClick={toggleCounter}>
        {showCounter ? 'Hide' : 'Show'} Counter
      </button>
      {showCounter && <Counter />}
    </div>
  );
}

export default App;





   

