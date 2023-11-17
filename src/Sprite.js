import React from "react";
import snackSprite from '../src/Sprite.jpg'

import "./SnackStyles.css"

const Sprite = () => {
    return ( 
        <div>
            <h2>Sprite</h2>

                    <img 
                        src= {snackSprite}
                        alt="Sprite"
                        className="snack-image"
                        style={{ maxWidth:'50%', height:'50%' }}
                    />
            <p>Summary of Sprite:
            <ul className="snack-details">
                <li>Per 1 Can Serving: 
                    <ul>140 calories</ul> 
                    <ul>0 g sat fat (0% DV)</ul> 
                    <ul>65 mg sodium (3% DV)</ul>
                    <ul> 38 g total sugars. No caffeine.</ul> 
                    A product of The Coca-Cola Company.
                </li>
            </ul>
            </p>
        </div>
    );
};

export default Sprite;