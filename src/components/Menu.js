import MenuNav from './MenuNav';
import Burger from './Burger';

export default function Menu(){
    return (
        <div className="menu">
            <div className="menu-container">
                <MenuNav />
                <Burger />
            </div>
        </div>
    )
}