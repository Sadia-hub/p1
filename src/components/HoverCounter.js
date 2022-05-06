const HoverCounter = ({count, increment}) =>{
    return <>
    <h1
    onMouseOver = {increment}
    >Hovered {count} times</h1>
    </>
}

export default HoverCounter;