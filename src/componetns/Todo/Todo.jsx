import React from 'react'
import { useState,useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { TodosList } from './TodosList'






    //styled components
    const Container = styled.div`
        height: 350px;
        width: 300px;
        box-sizing: border-box;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
        margin: 50px auto;
        border-radius: 20px;
        padding: 20px;
    `
    const InputDiv = styled.div`
        height: 31px;
        width: 80%;
        border: 0.1px solid black;
        border-radius: 13px;
        background-color: white;
        border: 2px solid black;
        display: flex;
        align-items: center;
        box-sizing: border-box;

    `
    const TextInput = styled.input`
        border:none;
        outline:none;
        width: 90%;
    `
    const Input = styled.input`
        border:none;
        background-color: white;

    `



export const Todo = ({getdata,data}) => {
 // posting value
 const[value,setValue]=useState("");
 const changeHandler = (e)=>{
    setValue(e.target.value)
}
 //console.log(value)
 const submit = ()=>{
    axios.post('http://localhost:8080/tasks', {
        name: value,
        status: false
    }).then(()=>{
        getdata()
    })
    document.getElementById("data").value=""
}

//getting Value
  return (
    <Container>
       <InputDiv>
       <form onSubmit={submit} >
            <TextInput type="text" onChange={changeHandler} id="data" />
            <Input type="submit" value={"+"}/>
        </form>
       </InputDiv>
       <TodosList data={data} getData={getdata} />
    </Container>
  )
}












// import React,{useState,useEffect} from "react";
// import axios from "axios";
// import styled from 'styled-components'
// // import './todos.css'
// export const Todo = ()=>{
//     const[data,setData]=useState([]);
//     const[value,setValue]=useState("");
//     const [status,setStatus] = useState(false)
//     useEffect(()=>{ 
//         getData()
//     },[])
//     const changeHandler = (e)=>{
//         setValue(e.target.value)
//     }
//     async function getData(){
//         await fetch('http://localhost:8000/tasks')
//         .then((d)=>d.json())
//         .then((data)=>{
//             setData(data)
//         })
//     }

//     const submit = (e)=>{
//         e.preventDefault()
//         axios.post('http://localhost:8000/tasks', {
//             name: value,
//             status:status
//         }).then(()=>{
//             getData()
//         })
//         document.getElementById("data").value=""
//     }

// //     const Container = styled.div`
// //     height: 500px;
// //     width: 300px;
// //     box-sizing: border-box;
// //     box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
// //     display: flex;
// //     flex-direction: column;
// //     /* justify-content: center; */
// //     align-items: center;
// //     margin: 50px auto;
// //     border-radius: 20px;
// // `

//     return (
//         <div className="container">
//             <h1 className="dancing">Todos.com</h1>
            
//             <form onSubmit={submit} >
//              <input type="text" onChange={changeHandler} id="data"/>
//             <input type="submit" value={"Submit"} />
//             </form>

//             <h3>yet to do</h3>
//             {data.map(t=>(<div className="list-cont source-code-pro"><input type="checkbox"  />{t.name}
//             </div>))}
  
//         </div>
//     )
// }
