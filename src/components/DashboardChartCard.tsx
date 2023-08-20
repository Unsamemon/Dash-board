import { FC, ReactNode } from 'react'
import { BsThreeDots } from 'react-icons/bs'

interface DashboardChartCardProps {
  title: string
  children: ReactNode
  
}
////

const DashboardChartCard: FC<DashboardChartCardProps> = ({children, title}) => {
  return <div className='bg-gray-200 rounded-[10.56px] px-4 py-6 mt-5 w-fit md:items-center md:flex-wrap'>
    <div className='flex justify-between items-center gap-x-5'>
      <div className='text-[19.01px] leading-[25px] text-[#06152B]/70' >
        {title}
      </div>
      <div>
        <BsThreeDots className='text-xl text-[#06152B]/70' />
      </div>
    </div>
    <div className='flex mt-8 px-4 h-42 items-center justify-between text-[#06152B] w-fit'>
     
      {children}
     </div>
            
  </div>
}

export default DashboardChartCard