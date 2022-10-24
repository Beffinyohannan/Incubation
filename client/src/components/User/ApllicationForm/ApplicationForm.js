import axios from 'axios';
import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

function ApplicationForm() {
    const initialValues = { name: '', email: '',city:'',state:'',companyname:'',address:'', phone: '', password: '',image:'' }
    const [formValues, SetFormValues] = useState(initialValues)
    const navigate = useNavigate()

    const handleChange = (e) => {
        console.log(e.target);
        const { name, value } = e.target
        SetFormValues({ ...formValues, [name]: value })
        console.log(formValues);
    }

    const handleSubmit=(e)=>{
        e.preventDefault()

        axios.post('http://localhost:5000/application-from', { ...formValues }).then(() => {

            navigate('/homepage')
        })
    }
  return (
    <div>
        <div className='grid grid-cols-1  h-screen w-full'>
                {/* <img className='absolute w-full h-full object-cover mix-blend-overlay' src={loginImg} alt="" /> */}
                <div className=' flex flex-col justify-center items-center' >
                    <form className='max-w-[400px] w-full mx-auto bg-white p-4' onSubmit={handleSubmit} >
                        <h2 className='text-4xl font-bold text-center'>Application Form</h2>
                        <div className='flex  py-2 '>

                            <div className='flex flex-col py-2 '>
                            <label htmlFor="">Name</label>
                            <input className='border p-2 ' name='name' type="text" value={formValues.name} onChange={handleChange} />
                            </div>

                            <div className='flex flex-col py-2 ml-5'>
                            <label htmlFor="">Email</label>
                            <input className='border p-2 ' name='email' type="text" value={formValues.email} onChange={handleChange} />
                            </div>

                        </div>

                        <div className='flex  py-2 '>

                            <div className='flex flex-col py-2 '>
                            <label htmlFor="">City</label>
                            <input className='border p-2 ' name='city' type="text" value={formValues.city} onChange={handleChange} />
                            </div>

                            <div className='flex flex-col py-2 ml-5'>
                            <label htmlFor="">State</label>
                            <input className='border p-2 ' name='state' type="text" value={formValues.state} onChange={handleChange} />
                            </div>

                        </div>

                        <div className='flex  py-2 '>

                            <div className='flex flex-col py-2 '>
                            <label htmlFor="">Company Name</label>
                            <input className='border p-2 ' name='companyname' type="text" value={formValues.companyname} onChange={handleChange} />
                            </div>

                            <div className='flex flex-col py-2 ml-5'>
                            <label htmlFor="">Phone</label>
                            <input className='border p-2 ' name='phone' type="number" value={formValues.phone} onChange={handleChange} />
                            </div>

                        </div>
                        <div className='flex flex-col py-2'>
                            <label htmlFor="">Address</label>
                            <input className='border p-2 relative' name='address' type="text" value={formValues.address} onChange={handleChange} />
                        </div>
                        <div className='flex flex-col py-2'>
                        {/* <img  alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(formValues.image) : ''}></img> */}

                            <label htmlFor="">Image</label>
                            <input className='' name='image' type="file" value={formValues.image} onChange={handleChange} />
                        </div>
                        
                        <button className='border w-full my-5 py-2 bg-indigo-600  hover:bg-indigo-500  text-white'>Submit</button>
                       
                    </form>
                </div>
            </div>
    </div>
  )
}

export default ApplicationForm