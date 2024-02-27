import Logo from "../Logo/Logo.jsx";
import CartWidget from "../CartWidget/CartWidget.jsx";
import clases from "./NavBar.module.css" 
const NavBar =()=>{
    return(
        <nav className={clases.nav}>
            <Logo />
            <ul className={clases.list} ><a className={clases.enlaces}  href="#">Telefonos</a></ul> 
            <ul className={clases.list} ><a className={clases.enlaces}  href="#">Mecheros</a></ul>
            <ul className={clases.list} ><a className={clases.enlaces}  href="#">Sillas</a></ul>
            <CartWidget />
        </nav>
    )
}

export default NavBar