import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react'
import { ApplicationContext } from '../../../store/ApplicationContext'


function ApprovedList() {
    const [state, setState] = useState([])
    const [showModal, setShowModal] = useState(false);
    const { applications, setApplications } = useContext(ApplicationContext)
    // const [errorMessage, setErrorMessage] = useState('')
    const [modalData, setModalData] = useState({
        name: '', address: '', email: '',
        phone: '', company_name: '',
        //  Incubation: '',
        image: '', status: ''
    });

    useEffect(() => {
        axios.get("http://localhost:5000/admin/approved-list").then((response) => {
            // console.log(response.data);
            const { data } = response
            if (response.data) {
                setState(data)
                // console.log(state, 'yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy');

            }
        }).catch((error)=>{
            console.log(error.message);
        })
    })

    const fullDetails = (id) => {
        state.filter((obj) => {
            if (obj._id === id) {
                setModalData({
                    name: obj.name, address: obj.address, email: obj.email,
                    phone: obj.phone, company_name: obj.company_name, Incubation: obj.Incubation,
                    image: obj.image, status: obj.status
                })
                setShowModal(true)
            }
        })
    }
  
  return (
    <div className='w-4/5'>
         <div className='m-6 pb-2 pr-7'>
                <button className='border w-50 px-4 py-1 rounded-full float-right  bg-slate-700  hover:bg-slate-600  text-white' >Logout</button>

            </div>
        <div class="bg-white p-8 rounded-md  ">
           
            <div class=" flex items-center justify-between pb-6 ">

                <div>
                    <h2 class="text-gray-600 font-semibold">INCUBATION LIST</h2>
                    <span class="text-xs">Approved Companies</span>
                </div>
                {/* <p>{errorMessage}</p> */}
                <div class="flex items-center justify-between">
                    <div class="flex bg-gray-50 items-center p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd" />
                        </svg>
                        <input class="bg-gray-50 outline-none ml-1 block " type="text" name="" id="" placeholder="search..." />
                    </div>
                    {/* <div class="lg:ml-40 ml-10 space-x-8">
                        <button class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">New Report</button>
                        <button class="bg-indigo-600 px-4 py-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">Create</button>
                    </div> */}
                </div>
            </div>
            <div>
                <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                        <table class="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        ID
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Email
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Company Name
                                    </th>

                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                        Action
                                    </th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    state.map((obj, index) => {

                                        return (

                                            <tr>
                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <div class="flex items-center">
                                                        {/* <div class="flex-shrink-0 w-10 h-10">
                                                <img class="w-full h-full rounded-full"
                                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                                                    alt="" />
                                            </div> */}
                                                        <div class="ml-3">
                                                            <p class="text-gray-900 whitespace-no-wrap">
                                                                {obj._id}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p class="text-gray-900 whitespace-no-wrap">{obj.email}</p>
                                                </td>
                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <p class="text-gray-900 whitespace-no-wrap">
                                                        {obj.companyname}
                                                    </p>
                                                </td>

                                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                    <span
                                                        class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                        <span aria-hidden
                                                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"></span>
                                                        <span class="relative">{obj.status}</span>
                                                    </span>
                                                </td>
                                                <td className='flex m-3'>

                                                    <button className='border w-full  my-1 py-2 px-2 rounded-full bg-indigo-600  hover:bg-indigo-500 relative text-white' onClick={(e) => { fullDetails(obj._id) }}>Open</button>
                                                    {/* <button className='border w-full ml-5  my-1 py-2 px-3 rounded-full bg-zinc-600  hover:bg-zinc-500 relative text-white' onClick={(e) => { approveForm(obj._id) }} >Approve</button> */}
                                                    {/* <button className='border w-full ml-5 my-1 py-2 px-3 rounded-full bg-slate-800  hover:bg-slate-600 relative text-white' onClick={(e) => { rejectForm(obj._id) }} >Reject</button> */}
                                                </td>

                                            </tr>
                                        )
                                    })
                                }




                            </tbody>
                        </table>
                        {showModal ? (
                            <>
                                <div
                                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                >
                                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                        {/*content*/}
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                            {/*header*/}
                                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                <h3 className="text-3xl font-semibold">{modalData.company_name}</h3>
                                                <button
                                                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                        ×
                                                    </span>
                                                </button>
                                            </div>
                                            {/*body*/}
                                            <div className="relative p-6 flex-auto">
                                                <table>
                                                    <tbody className='flex flex-col '>
                                                        <tr className='pt-2'>
                                                            <th className='text-right pr-2 w-[35%]'>Name : </th>
                                                            <td width="200px">{modalData.name}</td>
                                                        </tr>
                                                        <tr className='pt-2'>
                                                            <th className='text-right pr-2 w-[35%]'>Email : </th>
                                                            <td width="200px">{modalData.email}</td>
                                                        </tr>
                                                        <tr className='pt-2'>
                                                            <th className='text-right pr-2 w-[35%]'>Phone : </th>
                                                            <td width="200px">{modalData.phone}</td>
                                                        </tr>
                                                        <tr className='pt-2'>
                                                            <th className='text-right pr-2 w-[35%] align-top'>Address : </th>
                                                            <td width="200px">{modalData.address}</td>
                                                        </tr>
                                                        <tr className='pt-2'>
                                                            <th className='text-right pr-2 w-[35%]'>Incubation : </th>
                                                            <td width="200px"> {modalData.Incubation}</td>
                                                        </tr>
                                                        <tr className='pt-2'>
                                                            <th className='text-right pr-2 w-[35%]'>Status : </th>
                                                            <td width="200px">{modalData.status}</td>
                                                        </tr>
                                                        {/* <tr className='pt-2'>
                                            <th className='text-right pr-2 w-[35%] align-top'>Logo : </th>
                                            <td width="200px"><img src={`/images/${modalData.image}`} alt="" className='w-[100px] ' /></td>
                                        </tr> */}
                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                        ) : null}

                        <div
                            class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                            <span class="text-xs xs:text-sm text-gray-900">
                                Showing 1 to 10 of 50 Entries
                            </span>
                            <div class="inline-flex mt-2 xs:mt-0">
                                <button
                                    class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-l">
                                    Prev
                                </button>
                                &nbsp; &nbsp;
                                <button
                                    class="text-sm text-indigo-50 transition duration-150 hover:bg-indigo-500 bg-indigo-600 font-semibold py-2 px-4 rounded-r">
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >

)
}

export default ApprovedList