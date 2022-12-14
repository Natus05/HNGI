import React from 'react'


function Footer() {
  return (
    <div className='flex flex-col justify-start items-start md:items-center md:justify-center py-[10px] md:py-[48px] px-0 gap-[64px] bg-[#ffffff]'>
       <div className='flex flex-col justify-start items-start md:items-center md:justify-center py-0 px-[32px] min-h-[64px]'>
          <div className='box-border flex flex-col md:flex-row justify-start items-start md:justify-center md:items-center pt-[32px] px-0 pb-0 gap-[40px] md:gap-[60px] lg:gap-[32px] border-t border-[#EAECF0] border-solid'>
             <img id="zuri" className='order-first' width="187.59px" height="32px" src="./images/Zuri.png" alt="Zuri" />
             <p className='h-[24px] min-w-[250px] ml-[-10px] md:ml-0 my-[10px] md:my-0 lg:w-[832px] font-[400] text-[16px] leading-[24px] text-center text-[#667085]'>HNG Internship 9 Frontend Task</p>
             <img id="I4G" className="order-last" width="132.13px" height="32px" src="./images/I4G.png" alt="I4G" />
          </div>
       </div>
    </div>
  )
}

export default Footer