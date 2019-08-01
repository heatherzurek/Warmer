// import React from "react";
// import { useState, useEffect, useRef } from "react";
// import useTypewriter from "react-typewriter-hook";


// const warmWelcome = [
//   "2016 ​was the warmest year on record",
// ];
// let index = 0;

// export default function AnimatedTypingComponent() {
//   const [magicName, setMagicName] = useState("2016 ​was the warmest year on record");
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
//   return <p className="cursor">{name}</p>;
// }
