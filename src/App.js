
import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios';
import { Todo } from './componetns/Todo/Todo';



function App() {
  const[data,setAPIData] = useState([])
  const getData = async ()=>{
       await axios.get(`http://localhost:8080/tasks`)
      .then((response) => {
          setAPIData(response.data);
      })
  }
   useEffect(()=>{
       getData()
   },[])
  
  return (
    < div className="App">
      hello
      <Todo getdata ={getData} data={data}/>
    </div>
  );
}

export default App;
