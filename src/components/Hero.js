import MainNav from "./MainNav";
import fatcatlogo from "../assets/fatcatlogo.png"

export default function Hero(){
    return (
        <div className="hero">
            <MainNav />
            <img className="fatcatlogo" src={fatcatlogo} alt="fatcatlogo" />
            <h1 className="hero-title">FATCAT</h1>
        </div>
    )
}