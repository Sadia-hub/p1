import { useNavigate } from "react-router-dom";
const Home = () =>{

    const navigate = useNavigate();

    return <>
    <h1>This is Home</h1>
    <button
    onClick={()=>{
        navigate("/contact");
    }}
    >Contact Me</button>
    </>
}

export default Home;

//if you pass navigate(-1), then it will go back to the previou screen;