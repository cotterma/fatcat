import { useState } from "react";

export default function MenuNav(props) {

  const [menu, setMenu] = useState("burger");

 function setSection(section){
    setMenu(section);
    props.onChange(section);
 }

  return (
    <div className="menu-nav">
      <p>MENU</p>
      <ul className="menu-nav-list">
        <li onClick={() => setSection("burger")} style={{textDecoration : menu==="burger" ? 'underline' : ''}}>
          dog lovers
        </li>
        <li onClick={() => setSection("lasagna")} style={{textDecoration : menu==="lasagna" ? 'underline' : ''}}>
          cat lovers
        </li>
        <li onClick={() => setSection("drink")} style={{textDecoration : menu==="drink" ? 'underline' : ''}}>
          life enjoyers
        </li>
        <li onClick={() => setSection("dessert")} style={{textDecoration : menu==="dessert" ? 'underline' : ''}}>
          greed enjoyers
        </li>
      </ul>
    </div>
  );
}
