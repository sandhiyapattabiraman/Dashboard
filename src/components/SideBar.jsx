import '../App.css'
import { Home, Component, ListTodo, Settings, Handshake, CirclePlus, Info, CircleMinus, IndentDecrease, IndentIncrease } from 'lucide-react'
import { motion } from 'framer-motion';
import {FaCrown} from 'react-icons/fa'

function SideBar({ isOpen, setIsOpen }) {
    return (
        <>
                <motion.div 
                    className={`fixed ${isOpen ? 'w-[18%] ' : 'w-[6%] pt-10 '}  rounded-r-2xl shadow-lg/40 h-screen flex flex-col justify-between  px-5 pb-5 pt-1  transition-all duration-300`}
                >
                    <div className='flex items-center justify-start '>
                        <img src="./src/assets/logip_logo.png" alt="" className={`h-30 transition-all duration-300 ${!isOpen ? 'w-full h-auto' : ''}`} />
                    </div>

                    <div className='flex flex-col px-2 gap-5 '>
                        <div className='flex gap-3 text-zinc-600 font-medium hover:text-black cursor-pointer items-center'
                            title={!isOpen ? "Home" : undefined}
                        >
                            <Home />
                            {isOpen && <h3>Home</h3>}
                        </div>
                        <div className='flex justify-between items-center '>
                            <div className='flex gap-3 text-zinc-600 font-medium hover:text-black cursor-pointer items-center'
                                title={!isOpen ? "Projects" : undefined}
                            >
                                <Component className='rotate-45 ' />
                                {isOpen && <h3>projects</h3>}
                            </div>
                            {isOpen && <div><CirclePlus className='cursor-pointer text-zinc-600 hover:text-black' /></div>}
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-3 text-zinc-600 font-medium hover:text-black cursor-pointer items-center'
                                title={!isOpen ? "Tasks" : undefined}
                            >
                                <ListTodo />
                                {isOpen && <h3>Tasks</h3>}
                            </div>
                            {isOpen && <div><CirclePlus className='cursor-pointer text-zinc-600 hover:text-black' /></div>}
                        </div>
                        <div className='flex gap-3 text-zinc-700 font-medium hover:text-black cursor-pointer items-center'
                            title={!isOpen ? "Teams" : undefined}
                        >
                            <Handshake />
                            {isOpen && <h3>Teams</h3>}
                        </div>
                        <div className='flex gap-3 text-zinc-600 font-medium hover:text-black cursor-pointer items-center'
                            title={!isOpen ? "Settings" : undefined}
                        >
                            <Settings />
                            {isOpen && <h3>Settings</h3>}
                        </div>
                    </div>
                    {isOpen ? (
                        <div >
                            <div className=' p-6 rounded-3xl flex flex-col gap-4 bg-gradient-to-b from-blue-100 to-white justify-center items-center ' >
                                <h2 className='font-bold text-lg'>Upgrade to pro</h2>
                                <p className='font-semibold text-center text-zinc-700'>Get 1-month free and unlock</p>
                                <button className='bg-blue-200 py-2 px-6 rounded-4xl cursor-pointer font-semibold'>Upgrade</button>
                            </div>
                        </div>
                    )
                   :(
                        <div title={!isOpen ? "Upgrade" : undefined}>
                            <FaCrown className='text-yellow-400 text-4xl pl-2 cursor-pointer'/>
                        </div>
                    )} 
                    <div className={`flex gap-4 flex-col ${!isOpen ? 'pl-2' : ''}`}>
                        <div className='flex gap-4 text-zinc-600 font-medium hover:text-black cursor-pointer items-center'
                            title={!isOpen ? "Help & Information" : undefined}
                        >
                            <Info />
                            {isOpen && <p>Help & Information</p>}
                        </div>
                        <div className='flex gap-4 text-zinc-600 font-medium hover:text-black cursor-pointer items-center'
                            title={!isOpen ? "Log Out" : undefined}
                        >
                            <CircleMinus />
                            {isOpen && <p>Log Out</p>}
                        </div>
                    </div>
                </motion.div>
                <div 
                    className={` fixed z-10 top-4  bg-gray-100 rounded-full h-10 w-10 flex items-center justify-center cursor-pointer transition-all duration-300 ${!isOpen ? 'ml-[7%]' : 'ml-[19%]'}`}
                    onClick={() => setIsOpen(prev => !prev)}
                >
                    {isOpen ? <IndentDecrease /> : <IndentIncrease />}
                </div>
        </>
    )
}

export default SideBar;