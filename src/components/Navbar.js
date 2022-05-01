import styles from '../navbar.module.css'
import { NavLink } from 'react-router-dom';

const NavStyles = ({isActive}) =>{
    return isActive?{
            fontWeight:"bold"
        }:{
            fontWeight:"normal"
        }
    
}

const Navbar = () =>{
    return<nav>
    <ul style={{listStyle:"none", display:"flex", marginInline:20, alignItems:"center",justifyContent:"center", textDecoration:"none"}}>
        <li style={{margin:10, textDecoration:"none"}}>
            {/* Navlink helps to find the active links. So, we can apply styles to them using 
            javascript or css
            */}
            <NavLink 
            style={NavStyles}
            to="/"> Home </NavLink>           
        </li>
        <li style={{margin:10}}>
            <NavLink 
            style={NavStyles}
            to="/projects"> Projects </NavLink>    
        </li>
        <li style={{margin:10}}>
            <NavLink
            style={NavStyles}
            to="/resume"> Download Resume </NavLink>    
        </li>
        <li style={{margin:10}}>
            <NavLink 
            style={NavStyles}
            to="/contact"> Contacts </NavLink>    
        </li>
    
    </ul>
    </nav>
}

export default Navbar;