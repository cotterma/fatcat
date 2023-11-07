import MenuNav from './MenuNav';
import Burger from './Burger';
import Lasagna from './Lasagna';
import Dessert from './Dessert';
import Drink from './Drink';
import {useEffect, useState} from 'react';

export default function Menu(){
    const [menu, setMenu] = useState("burger");

    useEffect(() => {
        console.log(menu);
        if(menu==="burger"){
            document.querySelector(".menu").style.backgroundColor = "#6A040F";
        } else if(menu==="lasagna"){
            document.querySelector(".menu").style.backgroundColor = "#004423";
        } else if (menu ==="dessert"){
            document.querySelector(".menu").style.backgroundColor = "#823400";
        } else if (menu==="drink"){
            document.querySelector(".menu").style.backgroundColor = "#019095";
        }
    }, [menu]);


    return (
        <div className="menu">
            <div className="menu-container">
                <MenuNav onChange={(section) => setMenu(section)}/>
                { menu==="burger" && <Burger />}
                {menu==="lasagna" && <Lasagna />}
                {menu==="dessert" && <Dessert/>}
                {menu==="drink" && <Drink/>}
            </div>
        </div>
    )
}