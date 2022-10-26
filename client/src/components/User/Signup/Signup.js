import React, { useState } from 'react'
import loginImg from '../../../assets/login.jpg'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'



function Signup() {

    const initialValues = { username: '', email: '', phone: '', password: '' }
    const [formValues, SetFormValues] = useState(initialValues)
    const navigate = useNavigate()
    const [error, setError] = useState({});

    const signupData = {
        ...formValues
    }

    const handleChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target
        SetFormValues({ ...formValues, [name]: value })
        console.log(formValues);
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const errors = validateForm(signupData)
        setError(errors)
        // setIsSubmit(true)
        // console.log(firebase)
        console.log(Object.keys(errors).length, 'llkklk');
        if (Object.keys(errors).length == 0) {
            console.log("hello");


            axios.post('http://localhost:5000/signup', { ...formValues }).then(() => {

                navigate('/login')
            })
        }

    }


    const validateForm = (data) => {
        const error = {};
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const userRegex = /^[A-Za-z0-9_-]{3,15}$/;
        if (!data.username) {
            error.username = "user name required"
        } else if (!userRegex.test(data.username)) {
            error.username = "Invalide user name"
        }
        if (!data.email) {
            error.email = "email required"
        } else if (!regex.test(data.email)) {
            error.email = "enter valide email address"
        }
        if (!data.phone) {
            error.phone = " phone number required"
        } else if (data.phone.length != 10) {
            error.phone = "number should be 10 digits"
        }
        if (!data.password) {
            error.password = "password required"
        } else if (data.password.length != 6) {
            error.password = "password should be 6 digit"
        }

        return error;
    }

    return (
        <div>
            <div className='grid grid-cols-1  h-screen w-full'>
                <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="" />
                <div className=' flex flex-col justify-center items-center' >
                    <form className='max-w-[400px] w-full mx-auto bg-white p-4' onSubmit={handleSubmit} >
                        <h2 className='text-4xl font-bold text-center'>SIGN UP</h2>
                        <div className='flex flex-col py-2'>
                            <label htmlFor="">User name</label>
                            <input className='border p-2 relative' name='username' type="text" value={formValues.username} onChange={handleChange} />
                            <p className='text-red-500'>{error.username}</p>
                        </div>
                        <div className='flex flex-col py-2'>
                            <label htmlFor="">Email</label>
                            <input className='border p-2 relative' name='email' type="text" value={formValues.email} onChange={handleChange} />
                            <p className='text-red-500'>{error.email}</p>
                        </div>
                        <div className='flex flex-col py-2'>
                            <label htmlFor="">Phone</label>
                            <input className='border p-2 relative' name='phone' type="number" value={formValues.phone} onChange={handleChange} />
                            <p className='text-red-500'>{error.phone}</p>
                        </div>
                        <div className='flex flex-col py-2'>
                            <label htmlFor="">Password</label>
                            <input className='border p-2 relative' name='password' type="Password" value={formValues.password} onChange={handleChange} />
                            <p className='text-red-500'>{error.password}</p>
                        </div>
                        <button className='border w-full my-5 py-2 bg-indigo-600  hover:bg-indigo-500 relative text-white'>Signup</button>
                        <div>
                            <p className='flex relative '  >Already have account : <Link to={'/login'}><h4 className='ml-2' >  Login</h4></Link>  </p>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup