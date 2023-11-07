import chocolate from '../assets/chocolate.png';
import icecream from '../assets/icecream.png';

const steakStyle={
    width : "200px",
    transform : "translateX(-700px) scale(8)"
}

const chickenStyle={
    width : "200px",
    transform : "translateX(500px) translateY(-20px) scale(8)"
}


export default function Dessert(){
    return (
        <div className="burger-container">
            <div className="burger1">
                <img src={chocolate} style={steakStyle} alt="burger"></img>
                <div className="burger1-info">
                    <p>Good greed</p>
                    <p className="burger-description">Elevate your chocolatey cravings with our Chocolate Crunch. This delectable treat is a symphony of textures and flavors, where rich, velvety chocolate meets crispy, crunchy perfection. With a base of high-quality dark chocolate, we've added an irresistible blend of roasted nuts and crisped rice for that delightful crunch. </p>
                </div>
            </div>
            <div className="burger2">
                <div className="burger2-info">
                    <p>Great greed</p>
                    <p className="burger-description">Delight in a scoop of pure happiness with our artisanal ice cream. We've carefully crafted each flavor to be a celebration of taste and texture. Whether you prefer the rich, creamy decadence of classics like Chocolate Fudge Brownie or the refreshing burst of fruitiness in our Mango Sorbet, our ice cream is a sweet symphony that caters to all cravings.</p>
                </div>
                <img src={icecream} style={chickenStyle} alt="burger"></img>
            </div>
        </div>
    )
}