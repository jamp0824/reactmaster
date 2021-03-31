import React, {Component}from 'react';

class Counter extends Component{
    constructor(props){
        
        super(props);
        console.log(props)
        // state의 초기값 설정
        this.state={
            number:0,
            name:'리액트'
        };
    }
    render(){
       // console.log(this.props);
        const{number,name} = this.state;
        return(
            <div>
            <h1>{number}</h1>
            <h1>{name}</h1>
            <input type='text' onChange={e=> this.setState({name: e.target.value})}/>
            <button onClick={()=>this.setState({number:number+1})}>+1</button>
            <button onClick={()=>this.setState({number:number-1})}>-1</button>

            </div>
        )
    }
}

export default Counter;