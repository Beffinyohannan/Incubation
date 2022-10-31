import axios from 'axios'
import React, { useEffect, useState,useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


function BookSlot() {

    const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);
    const [applicationList, setApplicationList] = useState([]);
    const [state, setState] = useState([])
    const Navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [selected, setSelected] = useState({
        id: '',
        index: ''
    });
    console.log(selected,'gggggggggg');

    useEffect(() => {
        axios.get("http://localhost:5000/admin/booking-slot").then((response) => {
            // console.log(response);
            if (response.status == 200) {
                console.log(response.data);
                setState(response.data)
            }
        }).catch((error) => {
            console.log(error.message);
        })

        axios.get("http://localhost:5000/admin/approved-list").then((response)=>{
            if (response) {
                console.log(response.data);
                setApplicationList(response.data)
            }
        }).catch((error)=>{
            console.log(error.message);
        })
    },[Navigate,reducerValue])

    const fullDetails = (sloatNo) => {
        setSelected({
            ...selected,
            index: sloatNo
        })
        setShowModal(true)
    }

    const bookSloat = ()=>{
        axios.get(`http://localhost:5000/admin/slotBooking?slotId=${selected.index}&companyId=${selected.id}`).then((response => {
            forceUpdate()
            setShowModal(false)
            // alert('sucess')
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'slot booked successfully',
                showConfirmButton: false,
                timer: 1500
              })
        })).catch(error => console.log(error))
        
    }


    return (
        <div className='w-4/5'>
            <h2 class="text-gray-600 font-semibold m-10 " >Slot Booking</h2>


            <div className='grid grid-cols-8 ml-3  justify-center'>

                {
                    state.map((item) => {
                        return (
                            <div className={`mt-3  text-center  w-28 h-28 ml-2 cursor-pointer bg-blue-300  ${item.status ? "bg-blue-700" : "bg-blue-300"}`} onClick={() => item.status ? 
                            // alert("This slot is Already Booked")
                            Swal.fire({
                                position: 'top-end',
                                icon: 'warning',
                                title: "This slot is Already Booked",
                                showConfirmButton: false,
                                timer: 1500
                              }) : fullDetails(item.id)}> <p className='p-5'>{item.id}</p>
                            {item.status ? <div className='w-16 ml-6'><p className='text-xs text-center text-slate-200' >Booked by: {item.bookedId}</p></div>:null}
                            </div>

                        )
                    })
                }

            </div>

            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full min-w-[400px] bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Choose Company
                                    </h3>
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
                                <div className="relative p-6 flex justify-center">
                                    <select label="Select Version border-solid border-2 border-gray " onChange={(e) => { setSelected({
                                        ...selected,
                                        id: e.target.value,
                                    }) }}>
                                        <option hidden selected>Select</option>
                                        {
                                            applicationList.map((iteams, index)=>{
                                                return(
                                                    <option value={iteams.companyname} >{iteams.companyname}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)} >
                                        Close
                                    </button>
                                    <button
                                        className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => selected.id ? bookSloat() : ''}
                                    >
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </div>
    )
}

export default BookSlot