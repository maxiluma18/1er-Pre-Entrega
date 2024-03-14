import Logo from "../Logo/Logo.jsx";
import CartWidget from "../CartWidget/CartWidget.jsx";
import clases from "./NavBar.module.css" 
const NavBar =()=>{
    return(
        <nav className={clases.nav}>
            <Logo />
            <ul className={clases.list} ><a className={clases.enlaces}  href="#">Nuevo</a></ul> 
            <ul className={clases.list} ><a className={clases.enlaces}  href="#">Destacados</a></ul>
            <ul className={clases.list} ><a className={clases.enlaces}  href="#">Electronica</a></ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar