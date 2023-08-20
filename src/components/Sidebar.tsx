import { FC, useState } from 'react'
import Logo from '../assets/logo.svg'
import { BsGridFill } from 'react-icons/bs'
import { Chart, Category, Ticket, Document, Calendar, Activity, Notification, Setting, Logout } from 'react-iconly'
import { useNavigate } from 'react-router-dom'
interface SidebarProps {
  tabs: any,
  setClicked: (value: boolean) => void
  clicked: boolean
  selectedTab: string
  setSelectedTab: (value: string) => void
}

const Sidebar: FC<SidebarProps> = ({ tabs, setClicked, clicked, selectedTab, setSelectedTab }) => {
  const [showText, setShowText] = useState<boolean>(false)
  const navigate = useNavigate();
  // const [clicked, setClicked] = useState(false)
  return <div className={`flex flex-col h-[1400px] justify-start bg-dark rounded-lg p-5   ${selectedTab ? '' : 'rounded-[10.56px]'}`} >
    <div className='flex justify-center items-center flex-col'>
      <img src={Logo} alt='Logo' />
      <p className='font-bold text-2xl'>Wons</p>
    </div>
    

    <div className='py-10 gap-y-5'>
      {tabs.map((tab: any, index: number) => (
        <div className=''>
          <div className='flex flex-col justify-center items-center gap-y-18 '>
            <div className='w-full h- flex justify-start items-center gap-x-2'>
              <div className={`hover:bg-dark flex justify-center items-center h-36 -ml-3 rounded-r-[10.56px] ${selectedTab === tab.value ? 'bg-[#99B2C6]/10 w-fit' : 'bg-dark w-full'}`} onMouseEnter={() => { setShowText(true) }} onMouseLeave={() => { setShowText(false) }} onClick={() => {
                setSelectedTab(selectedTab === tab.value ? '' : tab.value)
                navigate(tab.link) 
              }}>
                <div className='ml-5 text-primary'>
                  <div>
                    {tab.icon}
                  </div>
                </div>
              </div>
              <p className={`font-bold text-base leading-[20.83px] p-5 ${selectedTab === tab.value ? 'text-gray-400' : 'hidden'}`}>{tab.title}</p>
            </div>
          </div> 
        </div>
      ))}
    </div>
    
    

    <div className={` flex    ${selectedTab ? ' flex-row justify-center items-end h-full  gap-x-4' : 'justify-end h-full items-center flex-col '}`}>
      <div className={`flex justify-center items-center ${selectedTab ? 'flex-row' : 'flex-col'}`} >
        
        
        

      </div>
    </div>
  </div>
}

export default Sidebar