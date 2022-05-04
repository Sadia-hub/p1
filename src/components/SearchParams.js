import { useSearchParams } from "react-router-dom";

const users=[
    {id:1, name:"Sadia", age:22},
    {id:2, name:"Nadia", age:20},
    {id:3, name:"Sadaf", age:17},
    {id:4, name:"Mehak", age:9},
    {id:5, name:"Bilal", age:15},
    {id:6, name:"Ali", age:13},
];

const SearchParams = () =>{

    const [SearchParams, setSearchParams] = useSearchParams(); 
    const ageParams = SearchParams.get('age') || 0;
    return <>
    <button
    onClick={()=>{setSearchParams({age:12});}}
    >Age greater than 12</button>
    <button
    onClick={()=>{setSearchParams({});}}
    >Any Age</button>
    <br/>
    
    {
        users.map((user,i)=>{
            const {name, age} = user;
            if(ageParams==12 && age>12){
                console.log(ageParams);
                return <>
                   <h1 key={user.id}>{`I am ${name} and my age is ${age}`}</h1> 
                </>
            }else if(ageParams==0){
                return <>
                <h1 key={user.id}>{`I am ${name} and my age is ${age}`}</h1> 
             </> 
            }
            
        })
    }
    </>
}

export default SearchParams;