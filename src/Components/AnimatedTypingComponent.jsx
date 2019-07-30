// import React from "react";
// import { useState, useEffect, useRef } from "react";
// import useTypewriter from "react-typewriter-hook";


// const warmWelcome = [
//   "Warmer",
// ];
// let index = 0;

// export default function AnimatedTypingComponent() {
//   const [magicName, setMagicName] = useState("Warmer");
//   const intervalRef = useRef({});
//   const name = useTypewriter(magicName);
//   useEffect(() => {
//     intervalRef.current = setInterval(() => {
//       // index = index + 1 > 2 ? 0 : ++index + 1;
//       index = index > 2 ? 0 : ++index;
//       setMagicName(warmWelcome[index]);
//     }, 5000);
//     return function clear() {
//       clearInterval(intervalRef.current);
//     };
//   }, [magicName]);
//   return <h1 className="cursor">{name}</h1>;
// }
