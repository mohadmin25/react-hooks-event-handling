import React from "react";

function Tickler() {
  return <button onClick={() => console.log("Teehee!")}>Tickle me!</button>; // use arrow function on 1 line conditions
}
// function Tickler() {
//   function tickle() {
//     console.log("Teehee!");
//   }

//   return <button >Tickle me!</button>;
// }

export default Tickler;