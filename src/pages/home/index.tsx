import { FC } from 'react'
import TopCard from '../../components/TopCard'
import { Bag, Game, Heart2, Work } from 'react-iconly'
import { useMediaQuery } from 'react-responsive'
import {AiOutlineBell} from 'react-icons/ai'
import {HiOutlineDocumentText} from 'react-icons/hi'
import DonutChart from '../../components/DonutChart'
import AreaCharts from '../../components/AreaCharts'
import DashboardChartCard from '../../components/DashboardChartCard'
import RecentServicesCard, { Service } from '../../components/RecenetServicesCard'
import Rightbar from '../../components/Rightbar'
import {AiOutlineDown} from 'react-icons/ai'
import Logo from '../../assets/logo8.png'
interface HomeProps {
}

const Home: FC<HomeProps> = ({ }) => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 900px)'
  })

  const userData = [
    { time: '10 AM', users: 10 },
    { time: '11 AM', users: 5 },
    { time: '12 PM', users: 8 },
    { time: '1 PM', users: 12 },
    { time: '2 PM', users: 6 },
    { time: '3 PM', users: 9 },
    { time: '4 PM', users: 15 },
  ];

  const data = [
    { name: 'Active', value: 20 },
    { name: 'Completed', value: 50 },
    { name: 'Pending', value: 30 },
  ];

  // function generateRandomId(): number {
  //   return Math.floor(100000 + Math.random() * 900000);
  // }

  const services: Service [] = [
    {
      name:'Annual',
      file: 'PDF',
      cat: 'property',
      status: 'send',
      author: 'Diana Math',
    },
    {
      name:'Dan',
      file: 'WQDF',
      cat: 'property',
      status: 'Pend',
      author: 'Dan Math',
    },
    {
      name:'James',
      file: 'PRDF',
      cat: 'property',
      status: 'Pending',
      author: 'James Math',
      
    },
 
  ];

  return <div className='w-screen pt-6 bg-gray-600'>
    
    <div className='flex justify-between w-full items-center'>
      <div className='font-bold text-[27.07px] mr-10 leading-[35.25px]'>Overview</div>
      {/* <div className='flex gap-x-5 text'>
        <div className='bg-white rounded-[5.28px] px-4 py-2'>
          <p>10-06-2021</p>
        </div>
        <div className='bg-white rounded-[5.28px] px-4 py-2'>
          <p>10-10-2021</p>
        </div>
      </div> */}
      <div className='flex flex-row'>
      <AiOutlineBell  className='text-lg mx-10'/>
      <img src={Logo} className='h-[36.38px] w-[43.38px] rounded-2xl bg-slate-300 px-2 pt-2 pb-2 mx-2 flex justify-between' />
      <h1 className='font-bold text-[20.07px] mr-10 leading-[35.25px]'>Administrator</h1>
      <AiOutlineDown className='mt-3 items-left' />
      </div>
    </div>
    <div className='flex justify-between mt-10 gap-x-5 '>
      <div className=''>
      <div className='lg:flex justify-between  items-center flex-row grid grid-cols-1 gap-2 md:gap-3'>
          <TopCard icon={<HiOutlineDocumentText className='text-xl text-cyan-600'/> } subtext='New Sales' text='146000' iconbg='bg-[#03A89E]/20' />
          <TopCard icon={<Bag primaryColor='pink' set='bold' size={'large'} />} subtext='New Leads' text='1400' iconbg='bg-[#FF69B4]/10' />
          <TopCard icon={<Work primaryColor='blue' set='bold' size={'large'} />} subtext='New Referrals' text='150.700' iconbg='bg-[#99B2C6]/10' />
        </div>
        <div className='flex justify-between gap-x-10 lg:gap-y-0 gap-y-10 mt-10 lg:flex-row flex-col'>
        <DashboardChartCard title='Visitors' >
            <div className="w-fit">
              <AreaCharts data={userData} width={isDesktopOrLaptop ? 400 : 300} height={300} />
            </div>
          </DashboardChartCard>
          <DashboardChartCard title='Order Status'>
            <DonutChart data={data} width={400} height={300} />
          </DashboardChartCard>
        </div>
        <div className='flex justify-between mt-8 items-center gap-x-6 max-h-42  rounded-full '>
          <DashboardChartCard title='Document'>
           
            <div className='flex flex-col gap-y-8 h-52 '>
              {services.map((service: Service) => (
                <div>
                  <RecentServicesCard service={service} />
                </div>
              ))}
            </div>
            
          </DashboardChartCard>
  </div>

        </div>
  

  <div className='bg-gray-200 h-[1000px]  mb-[40px] w-52 sm:w-42 items-center justify-between rounded-2xl'>
    <Rightbar />
    
  </div>
  </div>
  
  
  </div>
}

export default Home