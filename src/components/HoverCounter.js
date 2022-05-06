import counterHOC from "./counterHOC";

const HoverCounter = ({count, handleCounter, name="Sadia"})=>{

    return<>
    <h1
    onMouseOver={handleCounter}
    >
        I am hovered {count} times 
    </h1>
    </>
}

export default counterHOC(HoverCounter,2);