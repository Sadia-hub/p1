import { NavLink, Outlet } from "react-router-dom";




const Projects = () =>{
    return <>
    <h1>This is Projects</h1>
    <nav>
        <ul style={{listStyle:"none", display:"flex", marginInline:20, alignItems:"center",justifyContent:"center", textDecoration:"none"}}>
            <li 
            style={{margin:10, textDecoration:"none"}}>
                <NavLink 

                to="react">React</NavLink>
            </li>
            <li style={{margin:10, textDecoration:"none"}}>
                <NavLink to="android">Android</NavLink>
            </li>
        </ul>
       
        
    </nav>
    {/* Outlet would render the nested element here */}
    <Outlet/>
    </>
}

export default Projects;