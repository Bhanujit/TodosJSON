import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import Pagination from './Pagination'
//json-server db.json --port 8080 --watch
const List=styled.li`

    font-weight: bold;
    list-style: none;
    margin-left: 10px;
     
    
`
const Container= styled.div`
    height: 50px;
    /* border: 2px solid blue; */
    width: 200px;
    display: flex;
    align-items: center;
`

const Box=styled.div`
    height: 250px;
    width: 80%;
    margin: auto;
`


export const TodosList = ({data,getData}) => {
//Pagination
const[showPerPage,setShowPerPage] = useState(5)
const [pagination,setPagination] = useState({start:0,end:showPerPage})

function onShowChange(val){
  setShowPerPage(val)
  
}
const length = data.length
const limit = Math.ceil(length/showPerPage)
function onPagination(start,end){
  console.log(start,end)
  setPagination({start:start, end:end})
}




    const [state,setState] = useState("True")
    

    const Delete = async () => {
        const id = +state
        await axios.delete(`http://localhost:8080/tasks/${id}`)
        getData()
        setState("True") 
    }
    console.log(state)
   if(state !== "True"){
       Delete()
   }
    //3813566685
//  console.log(data)
  return (
    <div>
        
       <Box>
       {data.slice(pagination.start,pagination.end).map((e)=>
       <Container key={e.id}>
            <input type="checkbox" value={e.id} onClick={
                (e)=>{setState(e.target.value)}
            }/>
            <List >{e.name}</List>
            
            </Container>)}
       </Box>
            <Pagination showPerPage = {showPerPage} onChange={onPagination} onShowChange={onShowChange} 
                limit = {limit} />
    </div>
  )
}
