import axios from 'axios'
import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import { useCookies } from "react-cookie";


function Home() {

  const token = window.localStorage.getItem("token")
  const [cookies, setCookie] = useCookies();
  const [state,setState]=useState('')


// console.log(cookies)
  useEffect(() => {
   axios.post('http://localhost:5000/homepage',{...cookies}).then((response)=>{
    console.log("mhgfghfhg",response.data.status)
    if(response.data.status == "errors"){
      console.log("No jwt provided")
      window.location.href="/login"
    }else{
      setState(response.data.data)
    }

   }).catch((error)=>{
    console.log("err catch",error.message);
   })
  
    
  }, [])
  


  return (
    <div className='text-center mt-10'>
        <h1 className='text-4xl font-bold mb-10'>welcome to Home Page</h1>
       <div className='max-w-[400px] w-full mx-auto bg-white p-4'>
       <p>username: {state.username}</p>
        <p>Email: {state.email}</p>
        <p>Phone: {state.phone}</p> <br />
        <p>Application Form </p>
        <button className='border w-full my-2 py-2 max-w-[100px] bg-indigo-600  hover:bg-indigo-500  text-white' > <Link to={"/application-form"}> Click Here</Link></button>
       </div>
    </div>
  )
}

export default Home