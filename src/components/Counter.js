import counterHOC from "./counterHOC";

const Counter = ({count, handleCounter, name}) =>{

    return <>
    <h1>I am clicked {count} times {name}</h1>
    <button
    onClick={handleCounter}
    >Counter</button>
    </>
}

export default counterHOC(Counter,4);