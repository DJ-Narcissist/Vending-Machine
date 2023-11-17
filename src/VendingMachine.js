import React from "react";
import vendingMachineImage from "../src/30751.jpg"
import { NavLink } from "react-router-dom";

const VendingMachine = () => {
    return (
        <div>
            <h1>Vending Machine</h1>
            <div style={{ display:'flex', flexDirection:'row-reverse', fontSize:'55px'}}>
                <div style={{ marginTop:'400px' ,marginRight: '45px', marginLeft:'45px',padding:'125px'}}>
                    <h3>Snacks:</h3>
                    <ul>
                    <NavLink exact to="/"> Home</NavLink>
                    <NavLink exact to="/snack/poptart"> PopTart</NavLink>
                    <NavLink exact to="/snack/sprite"> Sprite</NavLink>
                    <NavLink exact to="/snack/oreos"> Oreos</NavLink>
                    </ul>
                </div>
            <img 
                src={vendingMachineImage}
                alt="Let's Eat"
                style={{ maxWidth: '75%', height: 'auto', padding:'50px', marginLeft:'75px', marginBottom: '350px'}}
                />
            </div>
        </div>
    );
};

export default VendingMachine;