import React,{useContext} from 'react'
import {useCookies} from 'react-cookie'
import {Link,useNavigate} from 'react-router-dom'
import { UserContext } from '../../../store/UseContext';
import {confirmAlert} from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';
import './Header.css'
import Swal from 'sweetalert2'


function Header() {

  const [cookies, setCookie,removeCookie] = useCookies('');
  const {userDetails,setUserDetails} = useContext(UserContext)
  const navigate = useNavigate()
  console.log('xxxxxxxxxxxxxxxxxxxxxx');
  console.log(userDetails,'bbbbbbbbbbbbbbbbbbbbb');


 const logout=(()=>{
  // console.log('gfdghsfgdfjgjhkj');
  // removeCookie("token")
  // alert('Logout Sucessfully')
  // window.location.href="/login"
  confirmAlert({
    title: 'Confirm to submit',
    message: 'Are you sure to Logout.',
    buttons: [
      {
        label: 'Yes',
        onClick: () => {
             removeCookie("token")
              // navigate('/login')
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'You are successfully logged out',
                showConfirmButton: false,
                timer: 1500
              }).then(()=>{
                navigate('/login')
              })
        }
      },
      {
        label: 'No',
        // onClick: () => alert('Click No')
      }
    ]
  });
})

  return (
    <div>
        <div className='bg-blue-500 flex justify-between p-4'>
           <Link to={"/"}><h1 className='ml-5 font-semibold'>HELLO</h1></Link>
           {userDetails ? 
            <button className='border w-50 px-4 rounded-full  bg-slate-700  hover:bg-slate-600  text-white' onClick={logout}>Logout</button>
        :  <button className='border w-50 px-4 rounded-full  bg-slate-700  hover:bg-slate-600  text-white' ><Link to={"/login"}> Login</Link></button>
      } 
        </div>
    </div>
  )
}

export default Header