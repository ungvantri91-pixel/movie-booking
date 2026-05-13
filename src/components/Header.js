import { Link, Outlet } from "react-router-dom";
import "./Header.css";
function Header() {
    return (
        <>
            <div className="Header">
                <Link to="/" className="Home">
                    <div className="logo">🎬</div>
                    <div className="title">
                        <span className="title-1">CINE</span>
                        <span className="title-2">MAX</span>
                    </div>
                </Link>
                <div className="order">Đặt vé ngay</div>
            </div>
            <Outlet/>
        </>
    )
}

export default Header;