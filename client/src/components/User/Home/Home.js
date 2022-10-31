import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useCookies } from "react-cookie";
import { UserContext } from '../../../store/UseContext';
import { ApplicationContext } from '../../../store/ApplicationContext';
import homeImg from '../../../assets/home.webp'
import Swal from 'sweetalert2'




function Home() {

  const token = window.localStorage.getItem("token")
  const [cookies, setCookie,removeCookie] = useCookies();
  const [state, setState] = useState('')
  const {userDetails,setUserDetails} = useContext(UserContext)
  const{applications,setApplications}=useContext(ApplicationContext)
  const navigate =useNavigate()
  // const {usersdetails}=useContext(userContext)
  console.log("jkjk");
  console.log(userDetails);
  // console.log(applications);

  const [details,setDetails]=useState('')
  const userId= userDetails._id
    console.log(userId);


  // console.log(cookies)
  useEffect(() => {
    axios.post('http://localhost:5000/homepage', { ...cookies }).then((response) => {
      // console.log("mhgfghfhg", response.data.data)
      const userr = response.data.data
      console.log(userr,'hhhhhhhhhhhhhhhhhhhhhhhhhh');
      JSON.stringify(userr)
      console.log('userdetails');
      // console.log(userDetails,'errorssssssssss');
      if (response.data.status == "errors") {
        console.log("No jwt provided")
        removeCookie("token")

        // window.location.href="/login"
        
      } else {
        setUserDetails(userr)
        setState(response.data.data)
        setDetails('true')
        // console.log(userdetails,'success');

      }

    }).catch((error) => {
      console.log("err catch", error.message);
    })


  }, [])

  const handleForm=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:5000/check-application',{userId}).then((response)=>{
      console.log(response.data);
      if (response.data.status=="found") {
        // alert('your application is pending plese wait to approve it.')
        Swal.fire({
          position: 'top-end',
          icon: 'warning',
          title: 'your application is pending plese wait to approve it.',
          showConfirmButton: false,
          timer: 1500
        })
      }else{
        navigate("/application-form")
      }
    })
  }



  return (
    <div className='text-center mt-10'>
     {details ?  

     <div className='max-w-[400px] w-full mx-auto bg-white p-4'>
    <h1 className='text-4xl font-bold mb-10'>welcome {userDetails.username}</h1>
        <p>username: {state.username}</p>
        <p>Email: {state.email}</p>
        <p>Phone: {state.phone}</p> <br />
        <p className='font-medium'>Application Form </p>
        <button className='border w-full rounded-full my-2 py-2 max-w-[120px] bg-indigo-600  hover:bg-indigo-500  text-white' onClick={handleForm} > Click Here</button>
    <img  src={homeImg} alt="" />
      </div>
      : 
      <div>
        <h1 className='text-4xl font-bold mb-10'>welcome Entrepreneur....</h1>
       <h3>Please Login....</h3>
        <button className='border w-full rounded-full my-2 py-2 max-w-[120px] bg-indigo-600  hover:bg-indigo-500  text-white' > <Link to={"/login"}> Login</Link></button>
        
       <div className='flex justify-center'>
       <img className='w-2/5' src={homeImg} alt="" />
       </div>
       
      </div> }

    </div>
  )
}

export default Home