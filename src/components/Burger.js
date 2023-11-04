import steak from '../assets/steak.png';
import chicken from '../assets/chicken.png';

const steakStyle={
    width : "200px",
    transform : "translateX(-700px) scale(8)"
}

const chickenStyle={
    width : "200px",
    transform : "translateX(700px) translateY(-20px) scale(8)"
}


export default function Burger(){
    return (
        <div className="burger-container">
            <div className="burger1">
                <img src={steak} style={steakStyle} alt="burger"></img>
                <div className="burger1-info">
                    <p>Bulldog lover</p>
                    <p className="burger-description">Indulge in the ultimate burger experience with our succulent steak burger – a perfectly seasoned, seared patty nestled in a fresh artisanal bun, layered with fresh veggies and a secret sauce that will leave your taste buds craving for more.</p>
                </div>
            </div>
            <div className="burger2">
                <div className="burger2-info">
                    <p>Retriever lover</p>
                    <p className="burger-description">Elevate your taste buds with our Chicken Burger – a perfectly seasoned, tender chicken patty served in a freshly baked artisanal bun, complemented by crisp vegetables and a secret sauce that will have you coming back for more.</p>
                </div>
                <img src={chicken} style={chickenStyle} alt="burger"></img>
            </div>
        </div>
    )
}