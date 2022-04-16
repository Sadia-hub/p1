import { useState } from "react";

const CounterRedux=()=>{

    const[count, setCount] = useState(1);

    return<>
        <div>
            <h1>{count}</h1>
        </div>
        <Button>Add</Button>
        <Button>Sub</Button>
    </>
}

export default CounterRedux;