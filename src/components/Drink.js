import pineapple from '../assets/pineapple.png';
import strawberry from '../assets/strawberry.png';

const steakStyle={
    width : "200px",
    transform : "translateX(-500px) scale(8)"
}

const chickenStyle={
    width : "200px",
    transform : "translateX(500px) translateY(-20px) scale(8)"
}


export default function Dessert(){
    return (
        <div className="burger-container">
            <div className="burger1">
                <img src={pineapple} style={steakStyle} alt="burger"></img>
                <div className="burger1-info">
                    <p>Early waker</p>
                    <p className="burger-description">Quench your thirst and transport yourself to a tropical paradise with our Pineapple Delight drink. We've captured the essence of sun-ripened pineapples in a refreshing and revitalizing beverage. Each sip is a burst of pure, natural pineapple sweetness, perfectly balanced to enhance your taste buds without overwhelming them. </p>
                </div>
            </div>
            <div className="burger2">
                <div className="burger2-info">
                    <p>Late waker</p>
                    <p className="burger-description">Elevate your taste buds with our Strawberry Bliss drink. We've harnessed the vibrant, sun-kissed essence of ripe strawberries to create a refreshing elixir that's both sweet and invigorating. With every sip, you'll experience the pure, natural sweetness of freshly picked strawberries, harmoniously blended to perfection.</p>
                </div>
                <img src={strawberry} style={chickenStyle} alt="burger"></img>
            </div>
        </div>
    )
}