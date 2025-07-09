import { CalendarDays, ThumbsUp, Activity, Ellipsis } from 'lucide-react';
import { FaCaretDown, FaCaretUp, FaChevronDown, FaClock, FaSearch } from 'react-icons/fa'
import { PiChartLineUpBold, PiTerminalWindowBold} from "react-icons/pi";
import '../App.css'
import {
    LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer
} from 'recharts';
import { MdOutlineTimer } from 'react-icons/md';




function Content({ isOpen, drawerIsOpen }) {

    const data = [
        { name: '01', Thismonth: 6, Lastmonth: 4 },
        { name: '02', Thismonth: 4, Lastmonth: 6 },
        { name: '03', Thismonth: 8, Lastmonth: 4 },
        { name: '04', Thismonth: 4, Lastmonth: 8 },
        { name: '05', Thismonth: 6, Lastmonth: 3 },
        { name: '06', Thismonth: 7, Lastmonth: 7 },
        { name: '07', Thismonth: 3, Lastmonth: 8 },
    ];

    return (
        <>
            <div className={`${isOpen ? 'w-[82%] ml-[22%]' : 'w-[94%] ml-[10%]'} ${drawerIsOpen ? 'mr-[23%]' : ''} mx-18 my-10 transition-all duration-300`}>

                <div className=" w-full border-b pb-5 border-gray-400 flex justify-between items-center">

                    <div className='flex flex-col gap-2'>
                        <h1 className='text-4xl font-bold text-black'>Hello, Margaret</h1>
                        <p className='text-lg text-gray-700 '>Track team progress here. You almost reach a goal!</p>
                    </div>

                    <div className='flex gap-4 justify-center items-center'>
                        <p>16 May, 2023</p>
                        <div className='bg-zinc-100 rounded-full flex justify-center items-center h-10 w-10'>
                            <CalendarDays />
                        </div>
                    </div>

                </div>

                <div className='flex  justify-between items-center py-10 border-b-1 border-gray-400 '>
                    <div className='flex gap-6 justify-center items-center'>
                        <div className='bg-zinc-100 rounded-full flex justify-center items-center h-15 w-15'>
                            <ThumbsUp />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='font-semibold'>Finished</p>
                            <div className='flex gap-2 items-end justify-center'>
                                <p className='text-xl font-semibold'>18</p>
                                <p className='flex text-sm text-blue-400 pb-0.5'> <FaCaretDown className='mt-1 ' /> +8 tasks</p>
                            </div>
                        </div>
                    </div>
                    <div className='h-15 w-0.5 bg-gray-400' />
                    <div className='flex gap-6 justify-center items-center '>
                        <div className='bg-zinc-100 rounded-full flex justify-center items-center h-15 w-15'>
                            <MdOutlineTimer className='size-7' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='font-semibold'>Tracked</p>
                            <div className='flex gap-2 items-end'>
                                <p className='text-xl font-semibold'>31h</p>
                                <p className='flex text-sm text-red-400 pb-0.5'> <FaCaretUp className='mt-1 ' /> -6 hours</p>
                            </div>
                        </div>

                    </div>
                    <div className='h-15 w-0.5 bg-gray-400' />
                    <div className='flex gap-6 justify-center items-center'>
                        <div className='bg-zinc-100 rounded-full flex justify-center items-center h-15 w-15'>
                            <PiChartLineUpBold className='size-6' />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='font-semibold'>Efficiency</p>
                            <div className='flex gap-2 items-end'>
                                <p className='text-xl font-semibold'>93%</p>
                                <p className='flex text-sm text-blue-400 pb-0.5'> <FaCaretDown className='mt-1 ' /> +12%</p>
                            </div>
                        </div>

                    </div>
                </div>


                <div className='mt-10'>
                    <div className='flex justify-between'>

                        <h2 className='font-bold text-3xl tracking-tight'>
                            Performance
                        </h2>

                        <div className='flex items-center justify-center gap-1 cursor-pointer  bg-zinc-200 px-4 py-2 rounded-3xl'>
                            <p>01-07 May </p><FaChevronDown className='mt-1' />
                        </div>
                    </div>

                    <div className="w-full h-64 mt-5">
                        <ResponsiveContainer>
                            <LineChart data={data}>
                                <XAxis dataKey="name" />
                                <YAxis domain={[0, 12]} />
                                <Tooltip />
                                <Line type="monotone" dataKey="Thismonth" stroke="#8884d8" />
                                <Line type="monotone" dataKey="Lastmonth" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className='flex justify-between items-center mt-10'>
                    <div className='flex items-center gap-10'>
                        <h2 className='font-bold text-3xl tracking-tight'>Current Tasks</h2>
                        <div className='h-5 w-0.5 bg-zinc-400' />
                        <p className='text-xl font-medium'>Done 30%</p>
                    </div>
                    <div className='flex items-center justify-center gap-2 border-1 cursor-pointer border-gray-400 px-4 py-1 rounded-3xl'>
                        <p className='text-lg font-normal '>Week</p> <FaChevronDown />
                    </div>
                </div>

                <div className='mt-10 flex flex-col gap-6'>

                    <div className='flex gap-2 items-center justify-between'>
                        <div className='flex gap-2 items-center   w-[85%]'>
                        <div className='bg-zinc-200 flex justify-center items-center p-2 h-10 w-10 rounded-full'>
                            <Activity />
                        </div>
                        <p className='font-medium text-lg'>Product Review for UI8 Market</p>
                        </div>
                        <div className='flex gap-2 items-center w-[40%]'>
                            <div className='h-2 w-2 bg-orange-400 rounded-full'/>
                            <p>In progress</p>
                        </div>

                        <div className='flex gap-2 items-center  w-[40%]'>
                            <FaClock/>
                            <p>4h</p>
                        </div>
                        <div>
                            <Ellipsis/>
                        </div>
                        
                    </div>

                    <div className='flex gap-2 items-center '>
                        <div className='flex gap-2 items-center  w-[85%]'>
                        <div className='bg-red-100 flex justify-center items-center p-2 h-10 w-10 rounded-full'>
                            <FaSearch className='size-4.5'/>
                        </div>
                        <p className='font-medium text-lg'>UX Research for Products</p>
                        </div>
                        <div className='flex gap-2 items-center w-[40%] '>
                            <div className='h-2 w-2 bg-indigo-500 rounded-full'/>
                            <p>On hold</p>
                        </div>

                        <div className='flex gap-2 items-center w-[40%] '>
                            <FaClock/>
                            <p>8h</p>
                        </div>
                        <div>
                            <Ellipsis/>
                        </div>
                    </div>

                    <div className='flex gap-2 items-center justify-between'>
                        <div className='flex gap-2 items-center  w-[85%]'>
                        <div className='bg-zinc-100 flex justify-center items-center p-2 h-10 w-10 rounded-full'>
                            <PiTerminalWindowBold />
                        </div>
                        <p className='font-medium text-lg'>App design and development</p>
                        </div>
                        <div className='flex gap-2 items-center w-[40%]'>
                            <div className='h-2 w-2 bg-sky-400 rounded-full'/>
                            <p>Done</p>
                        </div>

                        <div className='flex gap-2 items-center w-[40%]'>
                            <FaClock/>
                            <p>32h</p>
                        </div>
                        <div>
                            <Ellipsis/>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default Content;