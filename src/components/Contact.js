import {useNavigate} from 'react-router-dom';

const Contact = () =>{

    const navigate = useNavigate();

    return <>
    This is Contact
    {/* Clears the stack one step back */}
    <button onClick={()=>{navigate(-1)}}>GO Back</button>
    </>
}

export default Contact;