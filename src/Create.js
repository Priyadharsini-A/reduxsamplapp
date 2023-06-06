import React,{useState} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from './userReducer';

const Create=()=>{
    const[name,setName]=useState('');
    const[age,setAge]=useState(0);
    const[email,setEmail]=useState('');
    const[date,setDate]=useState('');
    const[hobbies,setHobbies]=useState('');
    const[pwd,setpwd]=useState('')
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const users=useSelector((state)=>state.users);
    const clickHandler=(e)=>{
        
        e.preventDefault();
        dispatch(addUser({id:users[users.length-1].id+1,name,age,email,pwd,date,hobbies}));
        navigate('/userdetails');

    }

    return(
        <div>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="number" value={age} onChange={(e)=>setAge(e.target.value)}/>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="date" value={date} onChange={(e)=>setDate(e.target.value)}/>
        <input type="checkbox" value={hobbies} onChange={(e)=>setHobbies(e.target.value)}>
            <option value="Reading">Reading</option>
            <option value="swimming"></option>
            </input> 
            <input type="password" value={pwd} onChange={(e)=>setpwd(e.target.value)}/>
        <button type="submit" onClick={clickHandler}>Add</button>
        </div>
    )


}
export default Create;
