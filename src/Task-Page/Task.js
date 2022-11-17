import React, { useState, useContext } from 'react'
import './Task.css'
import { Link, useSearchParams } from 'react-router-dom'
// import { Navigate } from 'react-router-dom';
import { stateContext } from '../Context/stateContext';
// import { initalvalue } from '../Context/reducer';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function Task() {
  const [param]=useSearchParams()
  console.log(param)
  const id=param.get("id")
  console.log("id",id)
  const [txt, setText] = useState("");
  const [msg, setMes] = useState("");
  const [date, setDate] = useState('');
  const[checkbox,setCheckbox]=useState('')
  // const [tasks, setevent] = useState([]);

  const { state, dispatch } = useContext(stateContext);
  console.log("statecontext", state.tasks);

  // const [param] = useSearchParams();
  // const navigate = useNavigate();
  // const id = parseInt(param.get("id"));


  const handleText = (tap) => {
    setText(tap.target.value);
  };

  const handleMes = (tap) => {
    setMes(tap.target.value);
  };

  const handleDate = (tap) => {
    setDate(tap.target.value);
  };
  
  const handleCheckbox = (tap) => {
    setCheckbox(tap.target.value);
  };

  const handleSum = (tap) => {
    tap.preventDefault();

    const temp = {
      id: state.tasks.length + 1,
      txt,
      msg,
      date,
      complete:false
    };
    console.log(state.tasks)
    setText("");
    setMes("");
    setDate("");
    setCheckbox("")

    // setevent([...tasks, temp]);
    dispatch({ type: "setevent",payload:[...state.tasks, temp] });
    console.log("state", temp);
  };

  return (
    <div className="task-flex">
      <Link to="/home"><button className='back'>Go Home</button></Link>
      <h1>Task</h1>
      {/* <h2>{state?.age}</h2> */}
      <div className="task-input">
          {/* <input value={txt} placeholder="Type" onChange={handleText} /> */}
          <TextField id="outlined-basic" label="Add to task" variant="outlined" value={txt} onChange={handleText} /><br></br>
          {/* <textarea value={msg} placeholder="Message" onChange={handleMes} /> */}
        <TextField id="outlined-basic" label="Message" variant="outlined" value={msg} onChange={handleMes} /><br></br>
        
          <TextField id="outlined-basic" type="date" variant="outlined"  value={date} onChange={handleDate} /><br></br>
          {/* <input value={date} type="date" onChange={handleDate}></input><br></br> */}
          {/* <button onClick={(tap) => handleSum(tap)}>Submit</button> */}
          <Button  id="button" onClick={(tap)=>handleSum(tap)}>Submit</Button>
        {/* {state.tasks.map((item, index) => <p key={index}>{item.txt}</p>)} */}
      </div>
    </div>
  )
}

export default Task