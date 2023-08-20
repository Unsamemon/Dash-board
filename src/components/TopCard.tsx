import {FC} from 'react'

interface TopCardProps {
    text: string,
    subtext: string
    icon: any
    iconbg: string;
}////

const TopCard: FC<TopCardProps> = ({ text,subtext, icon, iconbg}) => {
    return <div className='bg-white flex gap-x-5 w-[291.55px] h-[162.54px] p-7 rounded-[10.56px]'>
        <div className= {`${iconbg} w-[63.38px] h-[63.38px] rounded-full flex justify-center items-center`}>
            {icon}
        </div>
        <div className='flex flex-col gap-4 text-right justify-center'>
            <div className='font-bold text-2xl'>{text}</div>
            <div className='text-[#06152B]/70 font-normal text-base'>{subtext}</div>
        </div>
    </div>
}

export default TopCard