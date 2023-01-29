import {useDispatch, useSelector } from "react-redux";
import {useEffect, useState} from 'react';

function App() {
  const dispatch = useDispatch();
  const onDelete =({target})=>{
   if( window.confirm(`Bạn có chắc chắn muốn xóa ${target.name}?`)){
      dispatch ({type: 'DELETE_BY_ID', payload:target.id})
    }
  }

  const onShow = ()=>{
      dispatch ({type: 'FETCH_USER', payload:''})
  }
  useEffect(()=>{

  })

  const users = useSelector(state => state.users);
  return (
    <div>
      <h1>User list</h1>
      <button onClick={onShow}>Get Users</button>
      <br></br>
      {
        users.length>0? 
        <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.website}</td>
              <td><button id={user.id} 
                name ={user.username} 
                onClick={onDelete}>Delete User</button></td>
            </tr>
          ))}
        </tbody>
      </table>:<></>
      }
      
    </div>
  );
}
export default App;