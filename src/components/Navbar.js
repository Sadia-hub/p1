import styles from '../navbar.module.css'
import { Link } from 'react-router-dom';

const Navbar = () =>{
    return<nav>
    <ul style={{listStyle:"none", display:"flex", marginInline:20, alignItems:"center",justifyContent:"center", textDecoration:"none"}}>
        <li style={{margin:10, textDecoration:"none"}}>
            <Link to="/"> Home </Link>           
        </li>
        <li style={{margin:10}}>
            <Link to="/projects"> Projects </Link>    
        </li>
        <li style={{margin:10}}>
            <Link to="/resume"> Download Resume </Link>    
        </li>
        <li style={{margin:10}}>
            <Link to="/contact"> Contacts </Link>    
        </li>
    
    </ul>
    </nav>
}

export default Navbar;