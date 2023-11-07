export default function MainNav(){
    function scrollToLocations(){
        document.querySelector(".locations").scrollIntoView({behavior: "smooth"});
    }

    function scrollToMenu(){
        document.querySelector(".menu").scrollIntoView({behavior: "smooth"});
    }

    return (
        <ul className="main-nav">
            <li onClick={() => scrollToMenu()}>Menu</li>
            <li onClick={() => scrollToLocations()}>Locations</li>
        </ul>
    );
}
