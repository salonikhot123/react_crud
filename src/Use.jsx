import { useState } from "react";
const MultipleSateVare = ()=>{
    const [age ,setAge]=useState(21)
    const [siblingsNum,setSiblingsNum]=useState(1)
    const handleAge = ()=> setAge(age+1)
    const handleSiblingsNum = ()=> setSiblingsNum(siblingsNum+1)
    return(
        <div>
        <p>Today I am {age} Years of Age</p>
        <p> I have {siblingsNum} siblings</p>
        <div>
        <button onClick={handleAge}>Get older!</button>
        <button onClick={handleSiblingsNum}>More siblings!</button>
        </div>
        </div>
    )
}
{/*const UpdateStateVar = () => {
    const [age ,setAge]=useState(21)
    const  handleClick=()=>setAge(age+1)
    return(
    <div>
    Today I am {age} Years of Age
  <div>
  <button onClick={handleClick}>Get older!</button>
   </div>
  </div>
    )*/}
    

export default MultipleSateVare;