import React, { useState } from 'react'
import loginImg from '../../../assets/login.jpg'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useCookies } from 'react-cookie';


function CreateSlot() {

    const initialValues ={name:"",id:""}
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

            axios.post('http://localhost:5000/admin/create-slot',{...formValues}).then((response)=>{
                // console.log('hhhhhhhhhhhhhhhhhhhhhhh');
                console.log(response.data);
                if (response.data.state=="ok") {
                    alert("Slot Created sucessfully")
                  //  window.localStorage.setItem("token",response.data.data)
                    // window.location.href="/"
                }else {
                    console.log('else condition');
                    alert(response.data)
                }
            })
        }


    }

    
    const validateForm = (data) => {
        const error = {};
        
        if (!data.name) {
            error.name = "name required"
        } 
        
        if (!data.id) {
            error.id = "id required"
        } 
 
        return error;
    }

  return (
    <div  className='w-4/5'>
         <div className='grid grid-cols-1  h-screen w-full'>
  {/* <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt=""  /> */}
        <div className=' flex flex-col justify-center items-center' >
            <form onSubmit={handleSubmit} className='max-w-[400px] w-full mx-auto bg-rose-200 p-5'>
                <h2 className='text-4xl font-bold text-center pb-5'>Create Booking Slot</h2>
                <div className='flex flex-col py-2'>
                    <label htmlFor="">Slot Name</label>
                    <input className='border p-2 relative' name='name' type="text" value={formValues.name} onChange={handleChange} />
                    <p className='text-red-500'>{error.name}</p>
                </div>
                <div className='flex flex-col py-2'>
                    <label htmlFor="">Slot Id</label>
                    <input className='border p-2 relative' name='id' type="text" value={formValues.id} onChange={handleChange} />
                    <p className='text-red-500'>{error.id}</p>
                </div>
               
                <button className='border w-full rounded-full my-5 py-2 bg-slate-900  hover:bg-slate-800 relative text-white'>Create Slot</button>
                <div>

                </div>
            </form>
        </div>
    </div>
    </div>
  )
}

export default CreateSlot