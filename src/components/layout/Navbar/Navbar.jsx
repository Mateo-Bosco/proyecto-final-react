import { Link } from "react-router-dom";
import "./Navbar.css"
import { CartWidget } from "../../common/CartWidget"
import { menuNavigation } from "../../../router/menuNavigation";

export const Navbar = ()=>{
    return ( 
    <>
        <div className="nav-container">
            <div className="navbar">
                <Link className="links" to={"/"}>
                    <img className="navbar-logo" src="https://res.cloudinary.com/dkekabdhg/image/upload/v1707349283/logo_i50smu.png" alt="" />
                </Link>
                <ul className="categories">
            {menuNavigation.map(({ id, text, path }) => (
                <Link className="links" key={id} to={path}>
                {text}
                </Link>
            ))}
            </ul>
                <CartWidget />
            </div>
        </div>
    </>
    );
};
