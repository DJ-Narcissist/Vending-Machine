import React from "react";
import snackOreos from '../src/Bag of Oreos.webp'
import './SnackStyles.css'


const Oreos = () => {
    return ( 
        <div>
            <h2>Oreos</h2>
                <img 
                     src= {snackOreos}
                    alt="Oreos"
                    className="snack-image"
                    style={{ maxWidth: '25%', height:'25%'}}
                    />
            <p>Summary of Oreos</p>
            <ul className="snack-details">
                <li>Per 1 Serving: 
                    <ul>140 calories</ul> 
                    <ul>7 g sat fat, 2 g sat fat ,0 g trans fat</ul> 
                    <ul> 85 mg sodium </ul>
                    <ul>21 g total carbohydrates</ul>
                    <ul> 13 g total sugars.</ul> 
                    <ul> 1 g protein</ul>
                </li>
            </ul>
        </div>
    );
};

export default Oreos;