import { NavLink, Outlet } from "react-router-dom";
const Projects = () =>{
    return <>
    This is Projects
    <nav>
        <ul>
            <li>
                <NavLink to="mern">MERN</NavLink>
            </li>
            <li>
                <NavLink to="android">Android</NavLink>
            </li>
        </ul>      
    </nav>
    <h1>For showing child routes below use Outlet</h1>
    <Outlet/>
    </>
}

export default Projects;