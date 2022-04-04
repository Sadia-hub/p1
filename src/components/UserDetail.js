import { useParams, useNavigate } from "react-router-dom";


const UserDetail = () =>{
    const params = useParams();
    const id = params.userId;
    return <>
    This is UserDetail with id {id}
    
    </>
}

export default UserDetail;