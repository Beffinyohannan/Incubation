import React from 'react'
import {useCookies} from 'react-cookie'
import {Link} from 'react-router-dom'
function Header() {

  const [cookies, setCookie,removeCookie] = useCookies('');

 const logout=(()=>{
  console.log('gfdghsfgdfjgjhkj');
  removeCookie("token")
  window.location.href="/login"
})

  return (
    <div>
        <div className='bg-blue-500 flex justify-between p-4'>
           <Link to={"/"}><h1 className='ml-5 font-semibold'>HELLO</h1></Link> 
            <button className='border w-50 px-4 rounded-full  bg-slate-700  hover:bg-slate-600  text-white' onClick={logout}>Logout</button>

        </div>
    </div>
  )
}

export default Header