import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import {confirmAlert} from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';
import './sideBar.css'
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'


// import swal from 'sweetalert'



function Sidebar() {
   
const [cookies, setCookie,removeCookie] = useCookies('');
const navigate = useNavigate()



const logout=(()=>{
    console.log('gfdghsfgdfjgjhkj');
    // removeCookie("admin-token")
    // alert('Logout Sucessfully')
    // window.location.href="/admin-login"
    confirmAlert({
        title: 'Confirm to submit',
        message: 'Are you sure to Logout.',
        buttons: [
          {
            label: 'Yes',
            onClick: () => {
                 removeCookie("admin-token")
                //    navigate("/admin-login")
                   Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'You are successfully logged out',
                    showConfirmButton: false,
                    timer: 1500
                  }).then(()=>{
                    navigate('/admin-login')
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
        <div
            class="z-20  w-1/5   h-screen overflow-y-auto bg-white dark:bg-gray-800 md:block flex-shrink-0"
        >
            <div class="py-4 text-gray-500 dark:text-gray-400">
                <Link
                    class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
                    
                >
                    Company
                </Link>
                <ul class="mt-6">
                    <li class="relative px-6 py-3">
                      {/* { state.dashboard ? <span
                            class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                            aria-hidden="true"
                        ></span>:""} */}
                        <Link
                            class="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                           to={'/admin-dashboard'}
                        >
                            <svg
                                class="w-5 h-5"
                                aria-hidden="true"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                ></path>
                            </svg>
                            <span class="ml-4" id="dashboard" >Dashboard</span>
                        </Link>
                    </li>
                    
                    <li class="relative px-6 py-3">

                    {/* { state.approved ? <span
                            class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                            aria-hidden="true"
                        ></span>:""} */}
                        <Link
                            class="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                            to={'/admin-approved-list'}
                        >

                            <span class="ml-4" id="approved" >Approved List</span>
                        </Link>
                    </li>

                    <li class="relative px-6 py-3">

                        <Link
                            class="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                           to={'/admin-rejected-list'}
                        >

                            <span class="ml-4">Rejected List</span>
                        </Link>
                    </li>
                    <li class="relative px-6 py-3">

                        <Link
                            class="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                            to={'/admin-Book-slot'}
                        >

                            <span class="ml-4">Booking Slot</span>
                        </Link>
                    </li>
                    <li class="relative px-6 py-3">

                        <Link
                            class="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
                            to={'/admin-progress'}
                        >

                            <span class="ml-4">Progress Status</span>
                        </Link>
                    </li>
                    



                </ul>

                <div class="px-6 my-6">
                    <Link
                        class="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                        to={'/admin-create-slot'}
                    >
                        Create Solt
                        <span class="ml-2" aria-hidden="true">+</span>
                    </Link>
                </div>
                <div class="px-6 my-6">
                    <button
                        class="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-green-900 border border-transparent rounded-lg active:bg-green-700 hover:bg-green-800 focus:outline-none focus:shadow-outline-purple"
                       onClick={logout}
                    >
                        Logout
                        {/* <span class="ml-2" aria-hidden="true">+</span> */}
                    </button>
                </div>
            </div>
        </div >


    )
}

export default Sidebar