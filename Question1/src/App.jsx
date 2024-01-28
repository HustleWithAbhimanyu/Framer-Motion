import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [users, setUsers] = useState([]);
  const [nums,setNums] = useState([1,2,3,4,5,6,7,8,9,10])

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response)=>response.json())
    // .then((json)=>console.log(json));
    .then((json)=>setUsers(json));

  }, [])

  // const mapData=()=>{
  //   let mappedArray=users.map((user)=>(user.id*2))
  //   console.log(mappedArray);
  // }
  // const mapData=()=>{
  //   let filterArray=users.filter((user)=>{
  //     return user.name === "Ervin Howell" 
  //   })
  //   console.log(filterArray);
  // }


  return (
    <>
      <h1>Question 1</h1>
      <div className="card"> 
      {/* {users.map((user,id)=>(
       
        
        <p>{user.name}</p>
        <p>{user.username}</p>
      </div>
      ))} */}
        

        {/* <div className='card-inner'>
         { nums.map((num) => (
         <div>(num)</div>
         )}
        </div> */}
        
        
        
        
      </div>
      <button onClick={mapData}>Buttn</button>
    </>
  )
}

export default App
