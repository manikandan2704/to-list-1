import React, { useContext } from 'react'
import { createSearchParams, Link,useNavigate } from 'react-router-dom';
import './Home.css';  
import { stateContext } from '../Context/stateContext';
import { Checkbox } from '@mui/material';
import Button from '@mui/material/Button';
// import { type } from '@testing-library/user-event/dist/type';


const Home = () => {
  const { state, dispatch } = useContext(stateContext);
  console.log("state", state);  

  const navigate = useNavigate();

  // const listitems = () => {
  //   navigate("/Task")
  // }

  const deleteitems = (id) => {
    dispatch({type:"deltask",payload:id})
  }

  const edititems = (id) => {
    navigate({
      pathname: "/Task",
      search: createSearchParams({
        id:id
      }).toString()
    })    
  }
 const handlecomplete = (index) =>{
  let temp = [...state.tasks];
  const data =temp?.map((obj,i) =>{
  if(i===index){
    return{
      ...obj,
      complete:!obj.complete
    }
  }else return obj
})
dispatch({type:"complete",payload:data})
 }
  const asending =()=>{
    let sort = state.tasks.sort((a,b) => (a.date > b.date ) ? 1 : -1)
    dispatch({type:"asending",payload:sort})
  }
  const desending =()=>{
    let sort = state.tasks.sort((a,b) => (a.date > b.date ) ? -1 : 1)
    dispatch({type:"desending",payload:sort})
  }
  


  return (
    <div className="home-flex">
      <div className="container">
        {/* <h1>{state?.age}</h1> */}
        <div className="home-head">
          <h1><button id='button'><Link to={"/"}>Go Back</Link></button></h1>
          <h1><button id='button'><Link to={"/Task"}>Add Task</Link></button></h1>
          {/* <h1><button onClick={asending}>Ascending</button></h1> */}
          <h1><Button id="button" onClick={asending}>Ascending</Button></h1>
          <h1><Button  id="button" onClick={desending}>Descending</Button></h1>
        </div><hr></hr>

        {state.tasks?.map((item, index) => {
          return (
            <div key={index} className="ed-del">
              {item.txt}<br></br>{item.msg}<br></br>{item.date} <br></br>  
                <button id='buts' onClick={()=> edititems(item.id)}>edit</button>
                <button id='buts' onClick={()=> deleteitems(item.id)}>delete</button>
                <input type="checkbox" control= {<Checkbox checked={item.complete}/>} onChange={()=>handlecomplete(index)}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home