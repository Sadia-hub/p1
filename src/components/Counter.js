import React, {Component} from 'react';
class Counter extends Component{
    constructor(props){
        super(props);
        this.state={
            counter:0
        }
    }

    incrementCounter=()=>{
        this.setState(prev=>{
            return {
                counter:prev.counter+1
            }
        });
    }

    render(){
        const {counter} = this.state;
        console.log(counter);
        return <>
        <button
        onClick={this.incrementCounter}
        >Counter {counter}</button>
        </>
    }
}

export default Counter;