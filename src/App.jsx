import './App.css'
import SideBar from './components/SideBar'
import Content from './components/MainContent'
import AppDrawer from './components/AppDrawer';
import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [IsToggle, setIsToggle] = useState(false);
  
  return (
    <>
      <div className={`flex ${IsToggle? 'bg-black' : 'bg-white'}`}>
          <SideBar isOpen={isOpen} setIsOpen={setIsOpen} IsToggle={IsToggle} setIsToggle={setIsToggle} />
          <Content isOpen={isOpen} drawerIsOpen={drawerIsOpen} IsToggle={IsToggle}/>
          <AppDrawer drawerIsOpen={drawerIsOpen} setDrawerIsOpen={setDrawerIsOpen} IsToggle={IsToggle}/>
      </div>
    </>
  )
}

export default App
