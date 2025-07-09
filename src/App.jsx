import './App.css'
import SideBar from './components/SideBar'
import Content from './components/MainContent'
import AppDrawer from './components/AppDrawer';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  
  return (
    <>
      <div className='flex'>
          <SideBar isOpen={isOpen} setIsOpen={setIsOpen}/>
          <Content isOpen={isOpen} drawerIsOpen={drawerIsOpen}/>
          <AppDrawer drawerIsOpen={drawerIsOpen} setDrawerIsOpen={setDrawerIsOpen}/>
      </div>
    </>
  )
}

export default App
