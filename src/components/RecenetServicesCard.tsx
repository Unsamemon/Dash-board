import { FC } from 'react'

export interface Service {
    
    name: string
    file: string;
    cat: string;
    status: string
    author: string
}
interface RecentServicesCardProps {
    service: Service
}////

const RecentServicesCard: FC<RecentServicesCardProps> = ({ service }) => {
    return <div className='flex justify-between items-center w-fit '>
        <div className='flex justify-center items-center w-36 '>{service.name}</div>
        <div className='flex justify-center items-center w-36 '>{service.file}</div>
        <div className='flex justify-center items-center w-36'>{service.cat}</div>
        <div className='flex justify-center items-center w-36'>
            <div className='w-fit bg-[#3A36DB]/20 text-[#3A36DB] rounded-[7.8px] px-7 py-1'>{service.status}</div>
        </div>
        <div className='flex justify-center items-center w-36'>{service.author}</div>
    </div>
}

export default RecentServicesCard