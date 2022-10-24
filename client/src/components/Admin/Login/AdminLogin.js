import React,{useState} from 'react'

function AdminLogin() {

    const initialValues ={email:"",password:""}
    const [formValues,setFormValues]=useState(initialValues)

  //  const [cookies, setCookie] = useCookies(['user']);

    const handleChange=(e)=>{
        console.log(e.target);
        const {name,value}=e.target
        setFormValues({...formValues,[name]:value})
        console.log(formValues);

    }

    const handleSubmit=(e)=>{

    }


  return (
    <div className='grid grid-cols-1  h-screen w-full'>
         <div className=' flex flex-col justify-center items-center' >
            <form onSubmit={handleSubmit} className='max-w-[400px] w-full mx-auto bg-white p-4'>
                <h2 className='text-4xl font-bold text-center'>ADMIN LOGIN</h2>
                <div className='flex flex-col py-2'>
                    <label htmlFor="">Email</label>
                    <input className='border p-2 relative' name='email' type="text" value={formValues.email} onChange={handleChange} />
                </div>
                <div className='flex flex-col py-2'>
                    <label htmlFor="">Password</label>
                    <input className='border p-2 relative' name='password' type="text" value={formValues.password} onChange={handleChange} />
                </div>
                <button className='border w-full my-5 py-2 bg-indigo-600  hover:bg-indigo-500 relative text-white'>Login</button>
                <div>

                </div>
            </form>
        </div>
    </div>
  )
}

export default AdminLogin