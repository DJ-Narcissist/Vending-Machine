import React from "react";
import snackPopTart from '../src/images.jpg'
import "./SnackStyles.css"


const PopTart = () => {
    return ( 
        <div>
            <h2>PopTart</h2>
                <img 
                     src= {snackPopTart}
                    alt="Brown Sugar Cinnamon Poptart"
                    className="poptart-image"
                    style={{ maxWidth: '25%', height:'25%'}}
                    />
            <p>Summary of Poptart</p>
            <ul className="poptart-details">
                <li>Per 1 Serving: 
                    <ul>400 calories per 2 pastries</ul> 
                    <ul>7 g sat fat, 2.5 g sat fat ,0 g trans fat</ul> 
                    <ul> 170 mg sodium </ul>
                    <ul>35 g total carbohydrates</ul>
                    <ul> 30 g total sugars 2 pastries.</ul> 
                    <ul> 4 g protein per pastries</ul>
                </li>
            </ul>
            
        </div>
    );
};

export default PopTart;