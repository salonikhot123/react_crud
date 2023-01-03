import React,{useState,useEffect} from "react";
function Saloni(){
  const[count,setCount]=useState(0);
  useEffect(()=>{
    setTimeout(()=>{
      setCount((count) => count+1);
    },1000);
  });
  return(
    <>
      <p><h2>You clicked {count} times</h2></p>
    </>
  );
}
export default Saloni;