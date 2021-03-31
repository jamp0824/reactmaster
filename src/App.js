// import logo from './logo.svg';
import './App.css';
//import React,{Component} from 'react';
import React from 'react';
//import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
//함수형
const App=()=> {
  // console.log(`var ${i}`)
  // for(var i = 0; i < 10; i++){
  //   console.log(i);
  // }
  // console.log('var ${i}')


  // let x = 'inner x';{
  // console.log(x);
  // let y = 'inner y';
  //  console.log(y);
  // }
 //상수 참조형
//  let obj1 = {a:1, b:2};
//  let obj2= {...obj1};
//  obj1.a = 4;

//  console.log(obj1,obj2);
//  let array1 = [1,2,3,4];
//  const array2 =[...array1];
//  array2[0] =5;
//  console.log(array1,array2);
 
//  console.log(array1[0],array1[2])
//  const [c, d] = array1;
 
//  console.log(c);
//  console.log(d);
 //console.log(`1+1:${new Date().getDate+1}`)
 

 //const str = 'a';
//  str = 'b'
//  const conObj = obj;
 


// conObj.a = 3;
// const {a,b} = conObj;

//비구조화 할당법
//const{a,b} = c
 
// // console.log(conObj);

//console.log(b);
const array = [1,2,3,4,5];
var sum = 0;
array.forEach((v,i,a) => {
  sum+=v;
  console.log(v);
})
console.log(sum);

/*
* v = value 
* i = index
* a = array
*/

array.map((v,i,a)=>{
  console.log(v);
});

//배열을 한번씩 실행시키고 새로운 배열을 만듬
const mapArr = array.map((v,i,a) => {
  return v*10;
})
.map((num => num*20));
console.log(mapArr);

//배열의 첫 번째 요소부터 마지막 요소까지의 합성 곱 처리
/**
 * prev 이전 요소를 처리한 함수의 반환 값
 * v = value
 * i = index
 * a = array
 */
// var redu = array.reduce((prev,value)=>{
//   console.log(prev,value);
//   return prev+value;
// })
// console.log(redu)
var max = array.reduce((prev,value)=> {
  return(prev>value)? prev:value;
})
console.log(max);

const str=['aasd','asdadsb','ss','ds'];
//조건에 해당하는 새로운 배열을 생성
const aaa = str.filter((v,i,a)=>
v.length<=2);
return (
    
 
  <Counter name={1}/>

  );
};

// //클래스형
// class App extends Component {
//   render(){
//     const name = '리액트';
//     return <div className='react'>{name}</div>
  
//   }
// }
export default App;
