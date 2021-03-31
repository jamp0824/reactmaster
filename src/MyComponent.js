import React from 'react';

// function MyComponent(){
//     return <div>나의 컴포넌트</div>
// }
const MyComponent = (props) => {
    //비구조화 할당 법
    const {name,children} = props;
    //const[1,2]=new Array(2,1);
    return (
    <div>
    <div>나의 {name}컴포넌트</div>
    <div>children 값{children}</div>
    </div>   
        )
};

MyComponent.defaultProps ={
    name: '기본 이름'
}
export default MyComponent;