import { click } from "@testing-library/user-event/dist/click";
import React from "react"; 



const ClickButton = () =>{

    const buttonClicked = () =>{
    console.log(' clicked button ');

}
return(
<>
<div  className='div '>
<button  onClick={buttonClicked} className="btn">Click Me</button>
</div>

</>

);

};

export default  ClickButton;