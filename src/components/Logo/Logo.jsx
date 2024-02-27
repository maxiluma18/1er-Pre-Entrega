import logo from "./assets/logo.jpeg"
import clase from "./Logo.module.css";
const Logo =()=>{
    return(
        <div>
            <a href="#"><img className={clase.logo}   src={logo} alt="Logo Subaaton" /></a>
            
        </div>
    )
}

export default Logo
