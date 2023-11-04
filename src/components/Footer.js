export default function Footer(){
    const footerStyle = {
        backgroundColor : "#FFBA08",
        color : "black",
        padding : "50px",
        border : "1px solid rgba(0, 0, 0, 0.24)",
    }

    return (
        <footer style={footerStyle}>
            <p>© Fat cat 2023</p>
        </footer>
    )
}