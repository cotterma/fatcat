import MainNav from "./MainNav";
import fatcatlogo from "../assets/fatcatlogo.png"

export default function Hero(){
    return (
        <div className="hero">
            <MainNav />
            <img className="fatcatlogo" src={fatcatlogo} alt="fatcatlogo" />
            <svg className="hero-title" viewBox="-6 0 65 14">
                <text x="0" y="12" fill="white"> FATCAT</text>
            </svg>
        </div>
    )
}