import axios from 'axios';
import React,{useRef, useState} from 'react'
import {useNavigate} from 'react-router-dom'

function ApplicationForm() {
    const imgRef = useRef(null)
    const initialValues = { name: '', email: '',city:'',state:'',companyname:'',address:'', phone: '', password: '',image:'' }
    const [formValues, SetFormValues] = useState(initialValues)
    const navigate = useNavigate()
    // const fileUpload =(e)=>{
    //     SetFormValues({
    //         ...formValues,image:e.target.files[0]
    //     })
    // }

    const [error, setError] = useState({});

    const signupData = {
        ...formValues
    }

    const handleChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target
        SetFormValues({ ...formValues, [name]: value })
        imgRef.current.value=null
        console.log(formValues);
    }

    const handleSubmit=(e)=>{
        e.preventDefault()

        const errors = validateForm(signupData)
        setError(errors)
        // setIsSubmit(true)
        // console.log(firebase)
        console.log(Object.keys(errors).length, 'llkklk');
        if (Object.keys(errors).length == 0) {
            console.log("hello");

            axios.post('http://localhost:5000/application-from', { ...formValues }).then(() => {
                alert('Form Submitted sucessfully')
    
                navigate('/homepage')
            })
        }


    }

    const validateForm = (data) => {
        const error = {};
   
        if (!data.name) {
            error.name = "user name required"
        } 
        if (!data.email) {
            error.email = "email required"
        } 
        if (!data.city) {
            error.city = "city required"
        } 
        if (!data.state) {
            error.state = "state required"
        } 
        if (!data.companyname) {
            error.companyname = "company name required"
        } 
        if (!data.address) {
            error.address = "address required"
        } 
        // if (!data.image) {
        //     error.image = "image required"
        // } 
        if (!data.phone) {
            error.phone = " phone number required"
        } else if (data.phone.length != 10) {
            error.phone = "number should be 10 digits"
        }
        

        return error;
    }

  return (
    <div>
        <div className='grid grid-cols-1  h-screen w-full'>
                {/* <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="" /> */}
                <div className=' flex flex-col justify-center items-center' >
                    <form className='max-w-[400px] w-full mx-auto bg-white p-4' onSubmit={handleSubmit} >
                        <h2 className='text-4xl font-bold text-center pb-5'>Application Form </h2>
                        <div className='flex  py-2 '>

                            <div className='flex flex-col py-2 '>
                            <label htmlFor="">Name</label>
                            <input className='border p-2 ' name='name' type="text" value={formValues.name} onChange={handleChange} />
                            <p className='text-red-500'>{error.name}</p>
                            </div>

                            <div className='flex flex-col py-2 ml-5'>
                            <label htmlFor="">Email</label>
                            <input className='border p-2 ' name='email' type="text" value={formValues.email} onChange={handleChange} />
                            <p className='text-red-500'>{error.email}</p>
                            </div>

                        </div>

                        <div className='flex  py-2 '>

                            <div className='flex flex-col py-2 '>
                            <label htmlFor="">City</label>
                            <input className='border p-2 ' name='city' type="text" value={formValues.city} onChange={handleChange} />
                            <p className='text-red-500'>{error.city}</p>
                            </div>

                            <div className='flex flex-col py-2 ml-5'>
                            <label htmlFor="">State</label>
                            <input className='border p-2 ' name='state' type="text" value={formValues.state} onChange={handleChange} />
                            <p className='text-red-500'>{error.state}</p>
                            </div>

                        </div>

                        <div className='flex  py-2 '>

                            <div className='flex flex-col py-2 '>
                            <label htmlFor="">Company Name</label>
                            <input className='border p-2 ' name='companyname' type="text" value={formValues.companyname} onChange={handleChange} />
                            <p className='text-red-500'>{error.companyname}</p>
                            </div>

                            <div className='flex flex-col py-2 ml-5'>
                            <label htmlFor="">Phone</label>
                            <input className='border p-2 ' name='phone' type="number" value={formValues.phone} onChange={handleChange} />
                            <p className='text-red-500'>{error.phone}</p>
                            </div>

                        </div>
                        <div className='flex flex-col py-2'>
                            <label htmlFor="">Address</label>
                            <input className='border p-2 relative' name='address' type="text" value={formValues.address} onChange={handleChange} />
                            <p className='text-red-500'>{error.address}</p>
                        </div>
                        <div className='flex flex-col py-2'>
                        {/* <img  alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(formValues.image) : ''}></img> */}

                            <label htmlFor="">Image</label>
                            <input className='' name='image' ref={imgRef} type="file"  
                            // onChange={fileUpload} 
                            />
                             <p className='text-red-500'>{error.image}</p>
                        </div>
                        
                        <button className='border w-full my-5 py-2 bg-indigo-600  hover:bg-indigo-500  text-white'>Submit</button>
                       
                    </form>
                </div>
            </div>
    </div>
  )
}

export default ApplicationForm