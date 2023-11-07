import lasagna from '../assets/lasagna.png';
import vegan from '../assets/vegan.png';

const steakStyle={
    width : "200px",
    transform : "translateX(-700px) scale(8)"
}

const chickenStyle={
    width : "200px",
    transform : "translateX(700px) translateY(-20px) scale(8)"
}


export default function Lasagna(){
    return (
        <div className="burger-container">
            <div className="burger1">
                <img src={lasagna} style={steakStyle} alt="burger"></img>
                <div className="burger1-info">
                    <p>Persian lover</p>
                    <p className="burger-description">Indulge in the ultimate comfort food experience with our Classic Lasagna. Layers of delicate pasta sheets envelop a rich and hearty meat sauce, each one generously coated with a luscious blend of three premium cheeses. Baked to perfection, this lasagna emerges from our kitchen with a golden, bubbling crown of mozzarella. </p>
                </div>
            </div>
            <div className="burger2">
                <div className="burger2-info">
                    <p>Bengal lover</p>
                    <p className="burger-description">Satisfy your palate and your values with our Vegan Lasagna. We've taken the essence of traditional lasagna and reimagined it into a plant-based masterpiece. Layers of tender, oven-roasted vegetables, including zucchini, eggplant, and spinach, are embraced by sheets of wholesome, vegan-friendly pasta. Our rich tomato and herb sauce, crafted with love, infuses each layer with vibrant flavor.</p>
                </div>
                <img src={vegan} style={chickenStyle} alt="burger"></img>
            </div>
        </div>
    )
}