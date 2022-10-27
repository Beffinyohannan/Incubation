import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useCookies } from "react-cookie";
import { UserContext } from '../../../store/UseContext';


function Home() {

  const token = window.localStorage.getItem("token")
  const [cookies, setCookie] = useCookies();
  const [state, setState] = useState('')
  const {userdetails,setUserdetails}=useContext(UserContext)
  // const {usersdetails}=useContext(userContext)
  console.log("jkjk");
  console.log(userdetails);

  const [details,setDetails]=useState('')


  // console.log(cookies)
  useEffect(() => {
    axios.post('http://localhost:5000/homepage', { ...cookies }).then((response) => {
      console.log("mhgfghfhg", response.data.data)
      // setUserdetails(response.data.data)
      if (response.data.status == "errors") {
        console.log("No jwt provided")
        // window.location.href="/login"
        // console.log(userdetails,'errors');
         
      } else {
        setState(response.data.data)
        setDetails('true')
        // console.log(userdetails,'success');

      }

    }).catch((error) => {
      console.log("err catch", error.message);
    })


  }, [])



  return (
    <div className='text-center mt-10'>
      <h1 className='text-4xl font-bold mb-10'>welcome {state.username}</h1>
     {details ?  

     <div className='max-w-[400px] w-full mx-auto bg-white p-4'>
        <p>username: {state.username}</p>
        <p>Email: {state.email}</p>
        <p>Phone: {state.phone}</p> <br />
        <p className='font-medium'>Application Form </p>
        <button className='border w-full rounded-full my-2 py-2 max-w-[120px] bg-indigo-600  hover:bg-indigo-500  text-white' > <Link to={"/application-form"}> Click Here</Link></button>
      </div>
      : <div>
        <h3>Please Login....</h3>
      </div> }

    </div>
  )
}

export default Home