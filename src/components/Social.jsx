import React from 'react'

function Social() {
  return (
    <div className='bg-[#FFFFFF] flex flex-col items-center py-[24px] px-[0px] gap-[64px] w-[375px] h-[72px]'>
       <div className='flex flex-col items-center py-[0px] px-[16px] gap-[32px] w-[375px] h-[24px]'>
         <div className='flex flex-row items-center p-0 w-[343px] h-[24px]'>
            <div className='flex flex-row items-center justify-center p-0 gap-[24px] w-[343px] h-[24px]'>
               <img id="slack" className='w-[24px] h-[24px]' src="./images/slack.png" alt="slack" />
               <img id="slack" width="24px" height="24px" src="./images/Social icon.png" alt="slack" />
            </div>
         </div>
       </div>
    </div>
  )
}

export default Social