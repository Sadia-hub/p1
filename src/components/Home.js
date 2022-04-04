import { useNavigate } from "react-router-dom";
const Home = () =>{

    //used for navigating programmatically
    const navigate = useNavigate();

    return <>
    <h1>This is Home</h1>
    <button
    onClick={()=>{navigate("/contact")}}
    >Contact Me</button>
    </>
}

export default Home;