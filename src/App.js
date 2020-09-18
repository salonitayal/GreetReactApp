import React from 'react';

function App() {
  // INLINE CSS
  let currDate = new Date();
  let currTime = currDate.getHours();
  let greeting = "";
  const cssStyle = {};

  if(currTime > 4 && currTime < 12)
  {
      greeting = "Good Morning";
      cssStyle.color = "green";
  }
  else if(currTime >= 12 && currTime < 16)
  {
      greeting = "Good Afternoon";
      cssStyle.color = "orange";
  }
  else 
  {
      greeting = "Good Night";
      cssStyle.color = "blue";
  }

  return (
      <>
         <div>
             <h1>
                 Hello Sal, <span style={cssStyle}> {greeting} </span>
             </h1>
         </div>
      </>
  );
}

export default App;
