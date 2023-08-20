import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from '../home';
import Sidebar from '../../components/Sidebar';
import { Activity, Calendar, Category, Chart, Document, Notification, Setting, Ticket } from 'react-iconly';
import Analytics from '../analytics';
import Invoice from '../document';
import Prospect from '../prospect';
import Messages from '../messages';
import Workflow from '../workflow';
import Notifications from '../notifications';
import Settings from '../settings';
function App() {
  const [selectedTab, setSelectedTab] = useState('dashboard')

  const tabs = [
  
    {
      title: 'Dashboard',
      icon: <Category size="large" set="bold" primaryColor={selectedTab === 'dashboard' ? "blue" : "gray"} secondaryColor="white" />,
      value: 'dashboard',
      link: '/'
    },
    {
      title: 'Analytics',
      icon: <Chart size="large" set="bold" primaryColor={selectedTab === 'analytics' ? "blue" : "gray"} secondaryColor="white" />,
      value: 'analytics',
      link: '/analytics'
    },
    {
      title: 'Document',
      icon: <Ticket size="large" set="bold" primaryColor={selectedTab === 'invoice' ? "blue" : "gray"} secondaryColor="white" />,
      value: 'document',
      link: '/document',
    },
    {
      title: 'Prospect',
      icon: <Document size="large" set="bold" primaryColor={selectedTab === 'prospect' ? "blue" : "gray"} secondaryColor="white" />,
      value: 'prospect',
      link: '/prospect'
    },
    {
      title: 'Workflow',
      icon: <Calendar size="large" set="bold" primaryColor={selectedTab === 'workflow' ? "blue" : "gray"} secondaryColor="white" />,
      value: 'workflow',
      link: '/Workflow'
    },
    {
      title: 'Messages',
      icon: <Activity size="large" set="bold" primaryColor={selectedTab === 'messages' ? "blue" : "gray"} secondaryColor="white" />,
      value: 'messages',
      link: '/messages',
    },
    {
      title: 'Notifications',
      icon: <Notification size="large" set="bold" primaryColor={selectedTab === 'notifications' ? "blue" : "gray"} secondaryColor="white" />,
      value: 'notifications',
      link: '/notifications',
    },
    {
      title: 'Settings',
      icon: <Setting size="large" set="bold" primaryColor={selectedTab === 'settings' ? "blue" : "gray"} secondaryColor="white" />,
      value: 'settings',
      link: '/settings'
    },
  ]
  const [clicked, setClicked] = useState(false)
  

  return (
    <div className={`flex flex-row  bg-light gap-x-3 max-w-screen  h-screen`}>
      <div className={`${!selectedTab ? 'pl-12 py-7' : 'px-0 py-0'} flex flex-col h-screen `}>
      <Sidebar setClicked={setClicked} tabs={tabs} clicked={clicked} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/analytics' element={<Analytics/>}/>
        <Route path='/document' element={<Document/>}/>
        <Route path='/prospect' element={<Prospect/>}/>
        <Route path='/workflow' element={<Workflow/>}/>
        <Route path='/messages' element={<Messages/>}/>
        <Route path='/notifications' element={<Notifications/>}/>
        <Route path='/settings' element={<Settings/>}/>
      </Routes>
    </div>
  );
}

export default App;
////
