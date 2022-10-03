import React from "react";

function MultiButton() {
  function handleClick(number) {
    console.log(`Button ${number} was clicked`);
  }

  return (
    <div>
      {/* in this the console messages will appear as soon as our component is rendered, not when the button is clicked */}
      {/* <button onClick={handleClick(1)}>Button 1</button>
      <button onClick={handleClick(2)}>Button 2</button>
      <button onClick={handleClick(3)}>Button 3</button> */}

      
      {/* in this the function will only be invocked after clicking */}
      <button onClick={() => handleClick(1)}>Button 1</button>
      <button onClick={() => handleClick(2)}>Button 2</button>
      <button onClick={() => handleClick(3)}>Button 3</button>
      {/* <button onClick={handleClick}>Button 1</button>
      <button onClick={handleClick}>Button 2</button>
      <button onClick={handleClick}>Button 3</button> */}
    </div>
  );
}

export default MultiButton;