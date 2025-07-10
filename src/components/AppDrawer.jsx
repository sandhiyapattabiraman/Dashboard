import { EllipsisVertical, MessageCircle, Mic, Paperclip, Phone, Smile, Video } from 'lucide-react';
import '../App.css'
import { motion } from 'framer-motion';
import { MdDownloadForOffline } from 'react-icons/md';


function AppDrawer({drawerIsOpen, setDrawerIsOpen, IsToggle}){


    return(
        <>
        <div className={`fixed h-10 w-10 p-2 ml-[96%] mt-3 z-20   rounded-full cursor-pointer ${drawerIsOpen ? 'bg-white' : 'bg-zinc-100'}`} onClick={() => setDrawerIsOpen(prev => !prev)}>
            <MessageCircle/>
        </div>
        {drawerIsOpen && (
        <motion.div className={`fixed ml-[80%] w-[20%] flex flex-col p-4 h-screen  gap-6  z-10 ${IsToggle ?  'border-l-1 border-gray-400' : 'rounded-l-lg shadow-lg/40' } transition-all duration-300`}>
            <div className='bg-zinc-100 rounded-lg p-6 gap-4 flex flex-col justify-center items-center '>
                    <img src="https://media.themoviedb.org/t/p/w500/A14lLCZYDhfYdBa0fFRpwMDiwRN.jpg" alt="" className=' h-20 w-20 rounded-full object-cover'/>
                    <div className='flex flex-col justify-center items-center gap-2'>
                    <h2>Emma Watson</h2>
                    <p className='text-xs text-zinc-400'>@emmawatson</p>
                    </div>

                    <div className='flex gap-2 '>
                        <div className='h-10 w-10 rounded-full flex justify-center items-center cursor-pointer bg-white'>
                            <Phone/>
                        </div>
                        <div className='h-10 w-10 rounded-full flex justify-center items-center cursor-pointer bg-white'>
                            <Video/>
                        </div>
                        <div className='h-10 w-10 rounded-full flex justify-center items-center cursor-pointer bg-white'>
                            <EllipsisVertical/>
                        </div>
                    </div>
            </div>

            <div className='flex justify-center items-center gap-3'>
                <div className='h-0.5 w-full bg-zinc-100 '/>
                <p className={`${IsToggle ? 'text-white ' : 'text-black'}`}>Activity</p>
                <div className='h-0.5 w-full bg-zinc-100'/>
            </div>

            <div className='gap-4 flex flex-col'>
                <div className='flex gap-3'>
                    <div>
                        <img src="https://resources.tidal.com/images/c79e7e8c/d859/4884/9ffb/8eba8a6a4f00/750x750.jpg" alt="" className='h-10 w-20 bg-zinc-100 rounded-full object-cover'/>
                    </div>
                    <div className='flex flex-col gap-1 '>
                    
                        <div className='flex justify-between w-full'>
                        <h2 className={`${IsToggle ? 'text-white ' : 'text-black'}`}>Floyd Miles</h2>
                        <p className={`${IsToggle ? 'text-white ' : 'text-black'}`}> 10:15 am</p>
                        </div>
                    
                    <p className={`text-xs ${IsToggle ? 'text-white ' : 'text-black'}`}>Commented on Stark Projects</p>
                    <div className='bg-zinc-100 p-2 rounded-lg pt-3 text-sm'>
                        <p className='text-black'>Hii! next week we'll start a new project. I'll tell you all details later</p>
                    </div>
                    </div>
                </div>

                <div className='flex gap-3'>
                    <div>
                        <img src="https://paradiseecohub.com/wp-content/uploads/2023/10/team-2.jpg" alt="" className='h-10 w-12 bg-zinc-100 rounded-full object-cover'/>
                    </div>
                    <div className='flex flex-col gap-1 w-full'>
                        <div className='flex justify-between w-full'>
                        <h2 className={`${IsToggle ? 'text-white ' : 'text-black'}`}>Guy Hawkins</h2>
                        <p className={`${IsToggle ? 'text-white ' : 'text-black'}`}>10:15 am</p>
                    </div>
                    <p className={`text-xs ${IsToggle ? 'text-white ' : 'text-black'}`}>Added a file to 7Heros Projects</p>
                    <div className='bg-zinc-100 p-2 rounded-lg pt-3'>
                        <div className='flex gap-2 items-center justify-between'>
                            <div className='flex gap-2 items-center'>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/002/442/856/small_2x/f-letter-logo-template-initials-sign-free-vector.jpg" alt="" className='h-5 w-5 rounded-full object-cover' />
                        <div className='text-sm'>
                            <p className='text-black'>Homepage.fig</p>
                            <p className='text-black'>13.4 Mb</p>
                        </div>
                        </div>
                        <MdDownloadForOffline/>
                        </div>
                       
                    </div>
                    </div>
                </div>

                <div className='flex gap-3'>
                <div>
                        <img src="https://cdn.vox-cdn.com/thumbor/kMrQJrSZ7EFpXfLHT5gENrMnAbU=/0x0:428x640/1200x800/filters:focal(140x64:208x132)/cdn.vox-cdn.com/uploads/chorus_image/image/68814069/Kirsten_Watson_dodgers_2021.0.png" alt="" className='h-10 w-12 bg-zinc-100 rounded-full object-cover'/>
                    </div>
                    <div className='flex flex-col gap-1 w-full'>
                        <div className='flex justify-between w-full'>
                        <h2 className={`${IsToggle ? 'text-white ' : 'text-black'}`}>Kristin Watson</h2>
                        <p className={`${IsToggle ? 'text-white ' : 'text-black'}`}>10:15 am</p>
                    </div>
                    <p className={`text-xs ${IsToggle ? 'text-white ' : 'text-black'}`}>Added a file to 7Heros Projects</p>
                    </div>
                </div>
            </div>


            <div className='fixed bottom-2 flex gap-2 bg-zinc-100  justify-end items-center  rounded-lg py-2 px-3'>
                <Paperclip className='size-4 cursor-pointer'/>
                <input type="text" placeholder='write a message'/>
                <Smile className='size-4 cursor-pointer'/>
                <Mic className='size-4 cursor-pointer'/>
            </div>
            
        </motion.div>
        )}
        </>
    )
}

export default AppDrawer;