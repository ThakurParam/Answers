import React, {useState} from "react";








function Toggleswitch() {

    const [isToggled, setToggled] = useState(false);

    const Toggleswitch = () => {
        console.log('ToggleClicked');
        setToggled(!isToggled);
    }


    return (
        <>
            <div className="divx ">
                <p className="text"> the switch toggle between on & off </p>
                <p className="texts">{ isToggled ? 'on':'off'}</p>
    <p className="texts">{ isToggled ? 'True':'False'}</p>
                <button onClick={Toggleswitch} className="btn2"> Toggleswitch</button>
            </div>
        </>

    );
}

export default Toggleswitch;
