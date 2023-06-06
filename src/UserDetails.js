import React from 'react';

import {useSelector} from 'react-redux';
export const UserDetails = () => {
  const users=useSelector((state)=>state.users);
  return (
    <>
    <div>UserDetails</div>
    {users.map((x)=>{
      <div>
        <div>{x.name}</div>
      <div>{x.age}</div>
      <div>{x.hobbies}</div>
      <div>{x.email}</div>
      <div>{x.pwd}</div>


      </div>
      
    })}
    </>
    
  )
}

