import styles from '../navbar.module.css'
import { NavLink} from 'react-router-dom';

const Navbar = () =>{
    return<nav>
    <ul>
        <li>
            {/* It can detect active links automatically unlike Links. You can add extra styling based on a.active */}
            <NavLink to="/"> Home </NavLink>           
        </li>
        <li>
            <NavLink to="/projects"> Projects </NavLink>    
        </li>
        <li>
            <NavLink to="/resume"> Download Resume </NavLink>    
        </li>
        <li>
            <NavLink to="/contact"> Contacts </NavLink>    
        </li>
    
    </ul>
    </nav>
}

export default Navbar;