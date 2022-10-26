import React, { useState } from 'react'
import loginImg from '../../../assets/login.jpg'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useCookies } from 'react-cookie';

function Login() {

    const initialValues ={email:"",password:""}
    const [formValues,setFormValues]=useState(initialValues)
    const [cookies, setCookie] = useCookies(['user']);

    const [error, setError] = useState({});

    const signupData = {
        ...formValues
    }

    const handleChange=(e)=>{
        console.log(e.target);
        const {name,value}=e.target
        setFormValues({...formValues,[name]:value})
        console.log(formValues);

    }

  const  handleSubmit=(e)=>{
        e.preventDefault()

        const errors = validateForm(signupData)
        setError(errors)
        // setIsSubmit(true)
        // console.log(firebase)
        console.log(Object.keys(errors).length, 'llkklk');
        if (Object.keys(errors).length == 0) {
            console.log("hello");

            axios.post('http://localhost:5000/login',{...formValues}).then((response)=>{
                console.log(response.data.error);
                if (response.data.state=="ok") {
                    alert("login sucessful")
                    setCookie('token', response.data.data, { path: '/' });
                  //  window.localStorage.setItem("token",response.data.data)
                    window.location.href="/"
                }
            })
        }


    }

    
    const validateForm = (data) => {
        const error = {};
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        
        if (!data.email) {
            error.email = "email required"
        } else if (!regex.test(data.email)) {
            error.email = "enter valide email address"
        }
        
        if (!data.password) {
            error.password = "password required"
        } else if (data.password.length != 6) {
            error.password = "password should be 6 digit"
        }
        
        
        
       

        return error;
    }

  return (
    <div className='grid grid-cols-1  h-screen w-full'>
  <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt=""  />
        <div className=' flex flex-col justify-center items-center' >
            <form onSubmit={handleSubmit} className='max-w-[400px] w-full mx-auto bg-white p-4'>
                <h2 className='text-4xl font-bold text-center'>LOGIN</h2>
                <div className='flex flex-col py-2'>
                    <label htmlFor="">Email</label>
                    <input className='border p-2 relative' name='email' type="text" value={formValues.email} onChange={handleChange} />
                    <p className='text-red-500'>{error.email}</p>
                </div>
                <div className='flex flex-col py-2'>
                    <label htmlFor="">Password</label>
                    <input className='border p-2 relative' name='password' type="text" value={formValues.password} onChange={handleChange} />
                    <p className='text-red-500'>{error.password}</p>
                </div>
                <button className='border w-full my-5 py-2 bg-indigo-600  hover:bg-indigo-500 relative text-white'>Login</button>
                <div>
                <p className='flex relative '  >create an account : <Link to={"/signup"}> <h4 className='ml-2'> Signup</h4></Link> </p>

                </div>
            </form>
        </div>
    </div>
  )
}

export default Login